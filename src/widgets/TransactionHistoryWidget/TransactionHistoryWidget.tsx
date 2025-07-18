import React from "react";
import { useWalletStore } from "../../shared/store/walletStore";
import {
    SOLANA_EXPLORER_BASE_URL,
    SOLANA_NETWORK,
} from "../../shared/constants";
import * as Styled from "./TransactionHistoryWidget.styles.ts";
import { useTranslation } from "react-i18next";

export const TransactionHistoryWidget: React.FC = () => {
    const { lastTransactionSignature } = useWalletStore();
    const { t } = useTranslation();

    if (!lastTransactionSignature) {
        return null;
    }

    return (
        <Styled.TransactionInfo>
            <h4>{t("transaction.last_title")}:</h4>
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
                {t("transaction.click_to_view")}
            </Styled.TxNote>
        </Styled.TransactionInfo>
    );
};
