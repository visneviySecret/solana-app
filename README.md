# Solana Web App

Веб-приложение для работы с Solana блокчейном, построенное на React + TypeScript + Vite.

## 🚀 Возможности

-   **Подключение кошельков**: Phantom, Solflare, Torus и другие
-   **Просмотр баланса**: Отображение баланса SOL в реальном времени
-   **Отправка транзакций**: Тестовые транзакции на devnet
-   **Просмотр транзакций**: Интеграция с Solana Explorer
-   **Современный UI**: Styled-components с адаптивным дизайном
-   **State Management**: Zustand store с автоматическим сохранением

## 🛠️ Технологии

-   **Frontend**: React 19, TypeScript 5.8, Vite
-   **Blockchain**: Solana Web3.js, Wallet Adapter
-   **Styling**: Styled-components
-   **State**: Zustand с persist middleware
-   **Архитектура**: Feature-Sliced Design

## 📦 Установка и запуск

### Локальная разработка

```bash
# Клонировать репозиторий
git clone <repository-url>
cd solana-app

# Установить зависимости
yarn install

# Запустить dev сервер
yarn dev
```

Приложение будет доступно на `http://localhost:3000`

### Сборка для production

```bash
# Обычная сборка
yarn build

# Сборка для GitHub Pages
yarn build:gh-pages
```

## 🌐 Деплой

### Автоматический деплой на GitHub Pages

1. **Настройка репозитория**:

    - Перейдите в Settings → Pages
    - Выберите Source: "GitHub Actions"

2. **Автоматический деплой**:

    - При пуше в `main`/`master` ветку
    - GitHub Actions собирает и деплоит приложение
    - Доступно на `https://visneviysecret.github.io//solana-app/`

3. **Мониторинг**:
    - Статус в разделе "Actions" репозитория
    - Логи сборки и деплоя

### Ручной деплой

```bash
# Установить gh-pages (если нужно)
yarn add -D gh-pages

# Собрать и задеплоить
yarn deploy
```

Подробная инструкция в [DEPLOYMENT.md](./DEPLOYMENT.md)

## 🏗️ Архитектура проекта

```
src/
├── app/                 # Инициализация приложения
├── pages/              # Страницы приложения
├── widgets/            # Сложные компоненты
├── features/           # Функциональные блоки
├── entities/           # Бизнес-сущности
└── shared/             # Переиспользуемый код
    ├── ui/             # UI компоненты
    ├── lib/            # Хуки и утилиты
    ├── store/          # Zustand store
    ├── constants/      # Константы
    └── types/          # TypeScript типы
```

## 🔧 Настройка

### Solana Network

По умолчанию используется **devnet**. Для изменения сети:

```typescript
// src/shared/config/index.ts
export const SOLANA_CONFIG = {
    network: WalletAdapterNetwork.Devnet, // или Mainnet
    endpoint: clusterApiUrl(WalletAdapterNetwork.Devnet),
};
```

### Поддерживаемые кошельки

-   Phantom
-   Solflare
-   Torus
-   Coin98
-   Математические кошельки

## 📱 Использование

1. **Подключение кошелька**: Нажмите "Select Wallet"
2. **Просмотр баланса**: Автоматически после подключения
3. **Тестовая транзакция**: Отправка 0.001 SOL самому себе
4. **Просмотр в Explorer**: Клик по хешу транзакции

## 🐛 Возможные проблемы

### Phantom кошелек не подключается

-   Убедитесь что расширение установлено
-   Используйте кнопку ❌ для сброса выбора
-   Перезагрузите страницу

### CORS ошибки

-   GitHub Pages использует HTTPS
-   RPC endpoint должен поддерживать CORS
-   Для devnet используется публичный RPC

## 📄 Лицензия

MIT License

## 🤝 Разработка

Проект использует:

-   **ESLint + Prettier** для форматирования
-   **TypeScript** для типизации
-   **Yarn** как package manager
-   **Feature-Sliced Design** архитектуру

Вклад в развитие приветствуется!
