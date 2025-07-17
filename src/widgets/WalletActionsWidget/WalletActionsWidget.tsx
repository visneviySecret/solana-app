import React from "react";
import { BalanceCheck } from "../../features/BalanceCheck";
import { TransactionSend } from "../../features/TransactionSend";
import * as Styled from "./WalletActionsWidget.styles.ts";

export const WalletActionsWidget: React.FC = () => {

    return (
        <Styled.Actions>
            <BalanceCheck />
            <TransactionSend />
        </Styled.Actions>
    );
};
