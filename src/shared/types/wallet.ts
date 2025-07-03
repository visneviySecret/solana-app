export interface WalletState {
    selectedWalletName: string | null;
    isWalletConnected: boolean;
    walletAddress: string | null;
    lastTransactionSignature: string | null;
    walletBalance: number | null;
}

export interface WalletActions {
    setSelectedWallet: (walletName: string | null) => void;
    setWalletConnected: (connected: boolean) => void;
    setWalletAddress: (address: string | null) => void;
    setLastTransaction: (signature: string | null) => void;
    setWalletBalance: (balance: number | null) => void;
    resetWalletState: () => void;
    clearWalletSelection: () => void;
}

export type WalletStore = WalletState & WalletActions;
