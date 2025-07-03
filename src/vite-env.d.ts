/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SOLANA_NETWORK?: string;
    readonly VITE_RPC_URL?: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
