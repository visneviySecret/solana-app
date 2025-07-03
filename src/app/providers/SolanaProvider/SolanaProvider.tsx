import React, { useMemo } from "react";
import {
    ConnectionProvider,
    WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { APP_CONFIG } from "../../../shared/config";

// Импорт стилей кошелька
require("@solana/wallet-adapter-react-ui/styles.css");

interface SolanaProviderProps {
    children: React.ReactNode;
}

export const SolanaProvider: React.FC<SolanaProviderProps> = ({ children }) => {
    // Настройка сети
    const network =
        (APP_CONFIG.solana.network as WalletAdapterNetwork) ||
        WalletAdapterNetwork.Devnet;

    // Endpoint для подключения
    const endpoint = useMemo(() => {
        if (APP_CONFIG.solana.rpcUrl) {
            return APP_CONFIG.solana.rpcUrl;
        }
        return clusterApiUrl(network);
    }, [network]);

    // Конфигурация поддерживаемых кошельков
    const wallets = useMemo(
        () => [
            new PhantomWalletAdapter(),
            new SolflareWalletAdapter({ network }),
            new TorusWalletAdapter(),
        ],
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};
