import React, { useState, useCallback } from "react";
import {
    WalletMultiButton,
    WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";
import { Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { Button } from "../../shared/ui/Button";
import { useSolana } from "../../shared/lib/useSolana";
import "./HomePage.css";

export const HomePage: React.FC = () => {
    const {
        publicKey,
        connected,
        sendTransaction,
        connection,
        getBalance,
        walletAddress,
        shortAddress,
        loading,
        setLoading,
    } = useSolana();

    const [balance, setBalance] = useState<number | null>(null);
    const [lastTxSignature, setLastTxSignature] = useState<string>("");

    // Получение баланса кошелька
    const handleGetBalance = useCallback(async () => {
        if (!publicKey) return;

        try {
            setLoading(true);
            const walletBalance = await getBalance();
            setBalance(walletBalance);
        } catch (error) {
            console.error("Ошибка получения баланса:", error);
        } finally {
            setLoading(false);
        }
    }, [publicKey, getBalance, setLoading]);

    // Отправка тестовой транзакции (самому себе)
    const sendTestTransaction = useCallback(async () => {
        if (!publicKey || !connected) return;

        try {
            setLoading(true);

            // Создаем транзакцию отправки 0.001 SOL самому себе
            const transaction = new Transaction().add(
                SystemProgram.transfer({
                    fromPubkey: publicKey,
                    toPubkey: publicKey,
                    lamports: 0.001 * LAMPORTS_PER_SOL, // 0.001 SOL
                })
            );

            // Получаем последний blockhash
            const { blockhash } = await connection.getLatestBlockhash();
            transaction.recentBlockhash = blockhash;
            transaction.feePayer = publicKey;

            // Отправляем транзакцию
            const signature = await sendTransaction(transaction, connection);
            setLastTxSignature(signature);

            console.log("Транзакция отправлена:", signature);

            // Обновляем баланс после транзакции
            setTimeout(() => {
                handleGetBalance();
            }, 2000);
        } catch (error) {
            console.error("Ошибка отправки транзакции:", error);
        } finally {
            setLoading(false);
        }
    }, [
        publicKey,
        connected,
        connection,
        sendTransaction,
        handleGetBalance,
        setLoading,
    ]);

    return (
        <div className="home-page">
            <header className="home-header">
                <h1>Solana Wallet Adapter</h1>
                <p>Подключите кошелек для взаимодействия с Solana</p>
            </header>

            <div className="wallet-section">
                <div className="wallet-buttons">
                    <WalletMultiButton />
                    {connected && <WalletDisconnectButton />}
                </div>

                {connected && publicKey && (
                    <div className="wallet-info">
                        <div className="wallet-details">
                            <h3>Информация о кошельке</h3>

                            <div className="detail-item">
                                <span className="label">Полный адрес:</span>
                                <span className="value" title={walletAddress}>
                                    {walletAddress}
                                </span>
                            </div>

                            <div className="detail-item">
                                <span className="label">
                                    Сокращенный адрес:
                                </span>
                                <span className="value">{shortAddress}</span>
                            </div>

                            <div className="detail-item">
                                <span className="label">Сеть:</span>
                                <span className="value">Devnet</span>
                            </div>

                            {balance !== null && (
                                <div className="detail-item">
                                    <span className="label">Баланс:</span>
                                    <span className="value">
                                        {balance.toFixed(4)} SOL
                                    </span>
                                </div>
                            )}
                        </div>

                        <div className="actions">
                            <Button
                                onClick={handleGetBalance}
                                disabled={loading}
                                variant="primary"
                            >
                                {loading ? "Загрузка..." : "Получить баланс"}
                            </Button>

                            <Button
                                onClick={sendTestTransaction}
                                disabled={
                                    loading ||
                                    balance === null ||
                                    balance < 0.01
                                }
                                variant="secondary"
                            >
                                {loading
                                    ? "Отправка..."
                                    : "Тестовая транзакция (0.001 SOL)"}
                            </Button>
                        </div>

                        {lastTxSignature && (
                            <div className="transaction-info">
                                <h4>Последняя транзакция:</h4>
                                <a
                                    href={`https://explorer.solana.com/tx/${lastTxSignature}?cluster=devnet`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="tx-link"
                                >
                                    {`${lastTxSignature.slice(
                                        0,
                                        8
                                    )}...${lastTxSignature.slice(-8)}`}
                                </a>
                                <p className="tx-note">
                                    Нажмите для просмотра в Solana Explorer
                                </p>
                            </div>
                        )}
                    </div>
                )}

                {!connected && (
                    <div className="connect-prompt">
                        <p>Подключите кошелек для начала работы с Solana</p>
                        <p>Поддерживаемые кошельки: Phantom, Solflare, Torus</p>
                        <div className="features">
                            <h4>Возможности:</h4>
                            <ul>
                                <li>Просмотр баланса кошелька</li>
                                <li>Отправка тестовых транзакций</li>
                                <li>Взаимодействие с Solana devnet</li>
                                <li>Интеграция с популярными кошельками</li>
                            </ul>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
