import React from "react";
import { WalletConnection } from "../../features/WalletConnection";
import * as Styled from "./WalletConnectionWidget.styles.ts";

export const WalletConnectionWidget: React.FC = () => {
    return (
        <Styled.Widget>
            <WalletConnection />
        </Styled.Widget>
    );
};
