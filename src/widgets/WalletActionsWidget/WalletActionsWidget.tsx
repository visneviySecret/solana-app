import React, { useState, useCallback } from "react";
import { BalanceCheck } from "../../features/BalanceCheck";
import { TransactionSend } from "../../features/TransactionSend";
import * as Styled from "./WalletActionsWidget.styles.ts";

export const WalletActionsWidget: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const handleTransactionSent = useCallback(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <Styled.Actions>
            <BalanceCheck loading={loading} />
            <TransactionSend
                loading={loading}
                onTransactionSent={handleTransactionSent}
            />
        </Styled.Actions>
    );
};
