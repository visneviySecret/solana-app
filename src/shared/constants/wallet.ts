import { WalletState } from "../types/wallet";

export const WALLET_STORAGE_KEY = "wallet-storage";

export const INITIAL_WALLET_STATE: WalletState = {
    selectedWalletName: null,
    isWalletConnected: false,
    walletAddress: null,
    lastTransactionSignature: null,
    walletBalance: null,
};

export const WALLET_STORAGE_FIELDS = [
    "selectedWalletName",
    "lastTransactionSignature",
] as const;
