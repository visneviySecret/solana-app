import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState, useCallback } from "react";

export const useSolana = () => {
    const { publicKey, connected, sendTransaction } = useWallet();
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

    return {
        // Wallet state
        publicKey,
        connected,
        sendTransaction,
        connection,
        loading,
        setLoading,

        // Utility functions
        getBalance,
        getAccountInfo,
        accountExists,
        shortenAddress,

        // Computed values
        walletAddress: publicKey?.toBase58() || "",
        shortAddress: publicKey ? shortenAddress(publicKey.toBase58()) : "",
    };
};
