import { create } from "zustand";
import { persist } from "zustand/middleware";
import { WalletStore } from "../types/wallet";
import {
    INITIAL_WALLET_STATE,
    WALLET_STORAGE_KEY,
    WALLET_STORAGE_FIELDS,
} from "../constants/wallet";

export const useWalletStore = create<WalletStore>()(
    persist(
        set => ({
            ...INITIAL_WALLET_STATE,

            // Установка выбранного кошелька
            setSelectedWallet: walletName => {
                set({ selectedWalletName: walletName });
            },

            // Установка статуса подключения
            setWalletConnected: connected => {
                set({ isWalletConnected: connected });
                if (!connected) {
                    // При отключении очищаем связанные данные
                    set({
                        walletAddress: null,
                        walletBalance: null,
                    });
                }
            },

            // Установка адреса кошелька
            setWalletAddress: address => {
                set({ walletAddress: address });
            },

            // Установка последней транзакции
            setLastTransaction: signature => {
                set({ lastTransactionSignature: signature });
            },

            // Установка баланса кошелька
            setWalletBalance: balance => {
                set({ walletBalance: balance });
            },

            // Полный сброс состояния кошелька
            resetWalletState: () => {
                set(INITIAL_WALLET_STATE);
            },

            // Очистка только выбора кошелька (для отмены выбора)
            clearWalletSelection: () => {
                set({
                    selectedWalletName: null,
                    isWalletConnected: false,
                    walletAddress: null,
                    walletBalance: null,
                });
            },
        }),
        {
            name: WALLET_STORAGE_KEY,
            partialize: state =>
                Object.fromEntries(
                    WALLET_STORAGE_FIELDS.map(field => [field, state[field]])
                ),
        }
    )
);
