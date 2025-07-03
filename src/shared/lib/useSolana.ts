import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { useState, useCallback, useEffect } from "react";
import { useWalletStore } from "../store/walletStore";
import { WALLET_NAMES, LOCAL_STORAGE_KEYS } from "../constants";

export const useSolana = () => {
    const { publicKey, connected, sendTransaction, disconnect, wallet } =
        useWallet();
    const { connection } = useConnection();
    const [loading, setLoading] = useState(false);

    const {
        setSelectedWallet,
        setWalletConnected,
        setWalletAddress,
        setLastTransaction,
        setWalletBalance,
        resetWalletState,
        clearWalletSelection,
    } = useWalletStore();

    useEffect(() => {
        if (wallet?.adapter.name) {
            setSelectedWallet(wallet.adapter.name);
        }
    }, [wallet?.adapter.name, setSelectedWallet]);

    useEffect(() => {
        setWalletConnected(connected);
    }, [connected, setWalletConnected]);

    useEffect(() => {
        if (publicKey) {
            setWalletAddress(publicKey.toBase58());
        } else {
            setWalletAddress(null);
        }
    }, [publicKey, setWalletAddress]);

    const getBalance = useCallback(
        async (address?: PublicKey): Promise<number | null> => {
            const targetAddress = address || publicKey;
            if (!targetAddress) return null;

            try {
                const balance = await connection.getBalance(targetAddress);
                const balanceInSol = balance / LAMPORTS_PER_SOL;

                setWalletBalance(balanceInSol);

                return balanceInSol;
            } catch (error) {
                console.error("Ошибка получения баланса:", error);
                return null;
            }
        },
        [publicKey, connection, setWalletBalance]
    );

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

    const accountExists = useCallback(
        async (address: PublicKey): Promise<boolean> => {
            const accountInfo = await getAccountInfo(address);
            return accountInfo !== null;
        },
        [getAccountInfo]
    );

    const shortenAddress = useCallback((address: string, chars = 4): string => {
        return `${address.slice(0, chars)}...${address.slice(-chars)}`;
    }, []);

    const cancelWalletSelection = useCallback(async () => {
        try {
            if (connected && disconnect) {
                await disconnect();
            }

            clearWalletSelection();

            localStorage.removeItem(LOCAL_STORAGE_KEYS.WALLET_NAME);
            if (wallet?.adapter.name === WALLET_NAMES.PHANTOM) {
                localStorage.removeItem(LOCAL_STORAGE_KEYS.PHANTOM_WALLET);
            }

            setTimeout(() => {
                window.location.reload();
            }, 100);
        } catch (error) {
            console.error("Ошибка при отмене выбора кошелька:", error);
            clearWalletSelection();
            window.location.reload();
        }
    }, [connected, disconnect, clearWalletSelection, wallet]);

    const saveTransaction = useCallback(
        (signature: string) => {
            setLastTransaction(signature);
        },
        [setLastTransaction]
    );

    return {
        publicKey,
        connected,
        sendTransaction,
        connection,
        loading,
        setLoading,
        wallet,
        disconnect,

        getBalance,
        getAccountInfo,
        accountExists,
        shortenAddress,
        cancelWalletSelection,
        saveTransaction,

        setSelectedWallet,
        setWalletConnected,
        setWalletAddress,
        setLastTransaction,
        setWalletBalance,
        resetWalletState,
        clearWalletSelection,

        walletAddress: publicKey?.toBase58() || "",
        shortAddress: publicKey ? shortenAddress(publicKey.toBase58()) : "",
    };
};
