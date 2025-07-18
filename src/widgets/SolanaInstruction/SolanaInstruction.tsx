import React, { useState } from "react";
import * as Styled from "./SolanaInstruction.styles";

export const SolanaInstruction: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <Styled.Header>
            <Styled.InfoButton onClick={() => setModalOpen(true)} title="Информация">
                i
            </Styled.InfoButton>

            <h1>Solana Wallet Practice</h1>
            <p>Подключите кошелек для взаимодействия с Solana</p>

            {modalOpen && (
                <Styled.ModalOverlay onClick={() => setModalOpen(false)}>
                    <Styled.ModalContent onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
                        <Styled.ModalClose onClick={() => setModalOpen(false)}>&times;</Styled.ModalClose>
                        <h2>Инструкция: Phantom + Solana Devnet</h2>
                        <ol>
                            <li>
                                <b>Установите кошелек Phantom</b> — скачайте расширение для браузера с <a href="https://phantom.app/" target="_blank" rel="noopener noreferrer">официального сайта</a> и создайте новый кошелек или импортируйте существующий.
                            </li>
                            <li>
                                <b>Вход в тестовый кошелек</b> — используйте следующие данные для входа или восстановления:
                                <ul>
                                    <li><b>Логин:</b> AmpleGrove2196</li>
                                    <li><b>Пароль:</b> testMySolanaApp</li>
                                </ul>
                                <b>Или создайте новый кошелек.</b>
                            </li>
                            <li>
                                <b>Подключите кошелек к приложению</b> — нажмите кнопку "Подключить кошелек" и выберите Phantom.</li>
                            <li>
                                <b>Проверьте баланс</b> — используйте кнопку "Получить баланс".</li>
                            <li>
                                <b>Отправьте тестовую транзакцию</b> — нажмите "Тестовая транзакция (0.001 SOL)" для проверки работы отправки.</li>
                            <li>
                                <b>Если в тестовом кошельке закончились средства</b> — перейдите на <a href="https://faucet.solana.com/" target="_blank" rel="noopener noreferrer">https://faucet.solana.com/</a> и пополните кошелёк. Адрес для пополнения можно скопировать в Phantom → Account → Devnet.</li>
                        </ol>
                        <p style={{ marginTop: '1rem', color: '#555' }}>Все операции выполняются только в тестовой сети Devnet и не затрагивают реальные средства.</p>
                    </Styled.ModalContent>
                </Styled.ModalOverlay>
            )}
        </Styled.Header>
    );
};
