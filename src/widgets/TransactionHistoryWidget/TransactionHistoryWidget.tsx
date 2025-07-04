import React from "react";
import { useWalletStore } from "../../shared/store/walletStore";
import {
    SOLANA_EXPLORER_BASE_URL,
    SOLANA_NETWORK,
} from "../../shared/constants";
import * as Styled from "./TransactionHistoryWidget.styles.ts";

export const TransactionHistoryWidget: React.FC = () => {
    const { lastTransactionSignature } = useWalletStore();

    if (!lastTransactionSignature) {
        return null;
    }

    return (
        <Styled.TransactionInfo>
            <h4>Последняя транзакция:</h4>
            <Styled.TxLink
                href={`${SOLANA_EXPLORER_BASE_URL}/tx/${lastTransactionSignature}?cluster=${SOLANA_NETWORK.DEVNET}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {`${lastTransactionSignature.slice(
                    0,
                    8
                )}...${lastTransactionSignature.slice(-8)}`}
            </Styled.TxLink>
            <Styled.TxNote>
                Нажмите для просмотра в Solana Explorer
            </Styled.TxNote>
        </Styled.TransactionInfo>
    );
};
