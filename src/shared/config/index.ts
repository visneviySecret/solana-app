// Конфигурация приложения

export const APP_CONFIG = {
  name: "Solana React App",
  version: "1.0.0",
  solana: {
    network: process.env.REACT_APP_SOLANA_NETWORK || "devnet",
    rpcUrl: process.env.REACT_APP_RPC_URL || "https://api.devnet.solana.com",
  },
} as const;
