import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState, useCallback } from "react";

export const useSolana = () => {
    const { publicKey, connected, sendTransaction, disconnect, wallet } =
        useWallet();
    const { connection } = useConnection();
    const [loading, setLoading] = useState(false);

    // Получение баланса в SOL
    const getBalance = useCallback(
        async (address?: PublicKey): Promise<number | null> => {
            const targetAddress = address || publicKey;
            if (!targetAddress) return null;

            try {
                const balance = await connection.getBalance(targetAddress);
                return balance / LAMPORTS_PER_SOL;
            } catch (error) {
                console.error("Ошибка получения баланса:", error);
                return null;
            }
        },
        [publicKey, connection]
    );

    // Получение информации об аккаунте
    const getAccountInfo = useCallback(
        async (address: PublicKey) => {
            try {
                return await connection.getAccountInfo(address);
            } catch (error) {
                console.error(
                    "Ошибка получения информации об аккаунте:",
                    error
                );
                return null;
            }
        },
        [connection]
    );

    // Проверка существования аккаунта
    const accountExists = useCallback(
        async (address: PublicKey): Promise<boolean> => {
            const accountInfo = await getAccountInfo(address);
            return accountInfo !== null;
        },
        [getAccountInfo]
    );

    // Сокращение адреса для отображения
    const shortenAddress = useCallback((address: string, chars = 4): string => {
        return `${address.slice(0, chars)}...${address.slice(-chars)}`;
    }, []);

    // Отмена выбора кошелька (сброс без перезагрузки)
    const cancelWalletSelection = useCallback(async () => {
        try {
            // Отключаем кошелек если он подключен
            if (connected && disconnect) {
                await disconnect();
            }

            // Очищаем localStorage
            localStorage.removeItem("walletName");
            if (wallet?.adapter.name === "Phantom") {
                localStorage.removeItem("phantom-wallet");
            }

            // Очищаем localStorage
            setTimeout(() => {
                window.location.reload();
            }, 100);
        } catch (error) {
            console.error("Ошибка при отмене выбора кошелька:", error);
            // В случае ошибки просто перезагружаем
            window.location.reload();
        }
    }, [connected, disconnect, wallet]);

    return {
        // Wallet state
        publicKey,
        connected,
        sendTransaction,
        connection,
        loading,
        setLoading,
        wallet,
        disconnect,

        // Utility functions
        getBalance,
        getAccountInfo,
        accountExists,
        shortenAddress,
        cancelWalletSelection,

        // Computed values
        walletAddress: publicKey?.toBase58() || "",
        shortAddress: publicKey ? shortenAddress(publicKey.toBase58()) : "",
    };
};
