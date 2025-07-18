import React from "react";
import { BalanceCheck } from "../../features/BalanceCheck";
import { TransactionSend } from "../../features/TransactionSend";
import * as Styled from "./WalletActionsWidget.styles.ts";

interface WalletActionsWidgetProps {
    showToast?: (msg: string) => void;
}

export const WalletActionsWidget: React.FC<WalletActionsWidgetProps> = ({ showToast }) => {
    return (
        <Styled.Actions>
            <BalanceCheck />
            <TransactionSend showToast={showToast} />
        </Styled.Actions>
    );
};
