import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export const SOLANA_NETWORK = {
    DEVNET: "devnet",
    TESTNET: "testnet",
    MAINNET: "mainnet-beta",
} as const;

export const TRANSACTION_AMOUNTS = {
    TEST_TRANSACTION: 0.001 * LAMPORTS_PER_SOL, // 0.001 SOL
    MIN_BALANCE_FOR_TRANSACTION: 0.01, // 0.01 SOL
} as const;

export const SOLANA_EXPLORER_BASE_URL = "https://explorer.solana.com";

export const WALLET_NAMES = {
    PHANTOM: "Phantom",
    SOLFLARE: "Solflare",
    TORUS: "Torus",
} as const;

export const LOCAL_STORAGE_KEYS = {
    WALLET_NAME: "walletName",
    PHANTOM_WALLET: "phantom-wallet",
} as const;
