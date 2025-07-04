# Деплой на GitHub Pages ✅

## Автоматическая настройка CI/CD

### 1. Настройка GitHub Pages в репозитории

1. Перейдите в Settings вашего GitHub репозитория
2. В левом меню выберите "Pages"
3. В разделе "Source" выберите "GitHub Actions"
4. Сохраните настройки

### 2. Автоматический деплой

После пуша в ветку `master`:

1. GitHub Actions автоматически запустит сборку
2. Приложение будет задеплоено на `https://visneviysecret.github.io/solana-app/`

### 3. Мониторинг деплоя

-   Статус деплоя можно отслеживать во вкладке "Actions" репозитория
-   После успешного деплоя приложение будет доступно по адресу выше

## ✅ Что уже настроено

-   ✅ GitHub Actions workflow (`.github/workflows/deploy.yml`)
-   ✅ Vite конфигурация с base path для GitHub Pages
-   ✅ Кроссплатформенные npm скрипты (Windows/Linux/macOS)
-   ✅ Автоматическое создание `.nojekyll` файла
-   ✅ TypeScript конфигурация исправлена
-   ✅ Тестовая сборка прошла успешно

## Особенности конфигурации

-   **Base Path**: В production сборке используется `/solana-app/` как base path
-   **Автоматическая сборка**: Запускается при пуше в master ветку
-   **Оптимизация**: Включает sourcemaps для отладки
-   **Solana совместимость**: Все необходимые полифиллы настроены
-   **Кроссплатформенность**: Использует `cross-env` для Windows совместимости

## Переменные окружения

Приложение автоматически определяет окружение:

-   `GITHUB_PAGES=true` - для GitHub Pages сборки
-   `NODE_ENV=production` - для production оптимизации
-   `CI=true` - автоматически в GitHub Actions

## Файлы CI/CD

### `.github/workflows/deploy.yml`

Основной workflow файл с настройками:

-   Node.js 18
-   Yarn кэширование
-   Автоматический деплой при пуше в master

### `vite.config.ts`

Условная настройка base path:

```typescript
base: isProduction && isGitHubPages ? "/solana-app/" : "/";
```

### `package.json`

Скрипт для тестирования сборки:

-   `build:gh-pages` - сборка для GitHub Pages (для локального тестирования)

## Размер бандла

Текущие размеры после сборки:

-   CSS: ~4.86 kB (gzip: 1.37 kB)
-   JS (основной): ~746.44 kB (gzip: 223.40 kB)
-   JS (Solana): ~208.75 kB (gzip: 70.71 kB)

💡 **Рекомендация**: Рассмотрите использование dynamic imports для оптимизации размера.

## Возможные проблемы

### Ошибки CORS

Если возникают проблемы с CORS, убедитесь что:

-   Solana RPC URL поддерживает CORS
-   Используется правильная сеть (devnet/mainnet)

### Проблемы с Phantom кошельком

GitHub Pages использует HTTPS, что может повлиять на работу с кошельками:

-   Phantom кошелек работает только на HTTPS ✅
-   Локальная разработка остается на HTTP

### Кэширование

GitHub Pages может кэшировать файлы:

-   Используйте hard refresh (Ctrl+F5) если изменения не видны
-   GitHub автоматически очищает кэш при новом деплое

### TypeScript ошибки

Если возникают ошибки сборки:

-   Убедитесь что `vite.config.ts` не включен в основной `tsconfig.json`
-   Используйте `tsconfig.node.json` для конфигурационных файлов

## Структура деплоя

```
build/
├── index.html              # Главная страница (base: /solana-app/)
├── assets/                # JS, CSS, изображения с хешами
│   ├── index-[hash].js    # Основной бандл
│   ├── index-[hash].css   # Стили
│   └── solanaEmbed.esm-[hash].js  # Solana библиотеки
├── .nojekyll              # Отключает Jekyll
└── [статические файлы]    # Иконки, манифест и т.д.
```

## Следующие шаги

1. **Создайте репозиторий на GitHub** (если еще не создан)
2. **Пушните код** в ветку master
3. **Настройте GitHub Pages** в Settings → Pages → Source: GitHub Actions
4. **Дождитесь деплоя** - обычно занимает 2-5 минут
5. **Проверьте приложение** по адресу `https://visneviysecret.github.io/solana-app/`

🎉 **Готово!** Ваше Solana приложение автоматически деплоится при каждом пуше в master!
