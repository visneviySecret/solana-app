import React from "react";
import * as Styled from "./ConnectPromptWidget.styles.ts";

export const ConnectPromptWidget: React.FC = () => {
    return (
        <Styled.ConnectPrompt>
            <p>Подключите кошелек для начала работы с Solana</p>
            <p>Поддерживаемые кошельки: Phantom, Solflare, Torus</p>
            <Styled.Features>
                <h4>Возможности:</h4>
                <ul>
                    <li>Просмотр баланса кошелька</li>
                    <li>Отправка тестовых транзакций</li>
                    <li>Взаимодействие с Solana devnet</li>
                    <li>Интеграция с популярными кошельками</li>
                </ul>
            </Styled.Features>
        </Styled.ConnectPrompt>
    );
};
