import React, { useCallback } from "react";
import { Transaction, SystemProgram } from "@solana/web3.js";
import { Button } from "../../shared/ui/Button";
import { useSolana } from "../../shared/lib/useSolana";
import { useWalletStore } from "../../shared/store/walletStore";
import { TRANSACTION_AMOUNTS } from "../../shared/constants";

interface TransactionSendProps {
    showToast?: (msg: string) => void;
}

export const TransactionSend: React.FC<TransactionSendProps> = ({ showToast }) => {
    const {
        publicKey,
        connected,
        sendTransaction,
        connection,
        loading,
        setLoading,
        saveTransaction,
    } = useSolana();

    const { walletBalance } = useWalletStore();

    const sendTestTransaction = useCallback(async () => {
        if (!publicKey || !connected) return;

        try {
            setLoading(true);

            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: publicKey,
                    lamports: TRANSACTION_AMOUNTS.TEST_TRANSACTION,
                })
            );

            const { blockhash } = await connection.getLatestBlockhash();
            transaction.recentBlockhash = blockhash;
            transaction.feePayer = publicKey;

            const signature = await sendTransaction(transaction, connection);

            saveTransaction(signature);

            if (showToast) showToast("Транзакция отправлена!");
        } catch (error) {
            console.error("Ошибка отправки транзакции:", error);
        } finally {
            setLoading(false);
        }
    }, [
        publicKey,
        connected,
        connection,
        sendTransaction,
        setLoading,
        saveTransaction,
        showToast,
    ]);

    return (
        <Button
            data-onboarding-id="onboarding-send-btn"
            onClick={sendTestTransaction}
            disabled={
                loading ||
                walletBalance === null ||
                walletBalance < TRANSACTION_AMOUNTS.MIN_BALANCE_FOR_TRANSACTION
            }
            variant="secondary"
        >
            {loading ? "Отправка..." : "Тестовая транзакция (0.001 SOL)"}
        </Button>
    );
};
