import React from "react";
import * as Styled from "./PageHeader.styles";

export const PageHeader: React.FC = () => {
    return (
        <Styled.Header>
            <h1>Solana Wallet Adapter</h1>
            <p>Подключите кошелек для взаимодействия с Solana</p>
        </Styled.Header>
    );
};
