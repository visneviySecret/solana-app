// Конфигурация приложения

export const APP_CONFIG = {
    name: "Solana React App",
    version: "1.0.0",
    solana: {
        network: import.meta.env.VITE_SOLANA_NETWORK || "devnet",
        rpcUrl: import.meta.env.VITE_RPC_URL || "https://api.devnet.solana.com",
    },
} as const;
