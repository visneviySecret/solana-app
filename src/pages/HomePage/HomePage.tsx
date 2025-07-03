import React, { useState, useCallback } from "react";
import {
    WalletMultiButton,
    WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";
import { Transaction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { Button } from "../../shared/ui/Button";
import { useSolana } from "../../shared/lib/useSolana";
import * as Styled from "./HomePage.styles";

export const HomePageComponent: React.FC = () => {
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
        wallet,
        cancelWalletSelection,
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
        <Styled.ResponsiveContainer>
            <Styled.HomePage>
                <Styled.HomeHeader>
                    <h1>Solana Wallet Adapter</h1>
                    <p>Подключите кошелек для взаимодействия с Solana</p>
                </Styled.HomeHeader>

                <Styled.WalletSection>
                    <Styled.WalletButtons>
                        <Styled.WalletButtonWrapper>
                            <WalletMultiButton />
                            {wallet && !connected && (
                                <Styled.CancelWalletButton
                                    onClick={cancelWalletSelection}
                                    title={`Отменить выбор ${wallet.adapter.name}`}
                                >
                                    ✕
                                </Styled.CancelWalletButton>
                            )}
                        </Styled.WalletButtonWrapper>
                        {connected && <WalletDisconnectButton />}
                    </Styled.WalletButtons>

                    {connected && publicKey && (
                        <Styled.WalletInfo>
                            <Styled.WalletDetails>
                                <h3>Информация о кошельке</h3>

                                <Styled.DetailItem>
                                    <Styled.Label>Кошелек:</Styled.Label>
                                    <Styled.Value>
                                        {wallet?.adapter.name}
                                    </Styled.Value>
                                </Styled.DetailItem>

                                <Styled.DetailItem>
                                    <Styled.Label>Полный адрес:</Styled.Label>
                                    <Styled.Value title={walletAddress}>
                                        {walletAddress}
                                    </Styled.Value>
                                </Styled.DetailItem>

                                <Styled.DetailItem>
                                    <Styled.Label>
                                        Сокращенный адрес:
                                    </Styled.Label>
                                    <Styled.Value>{shortAddress}</Styled.Value>
                                </Styled.DetailItem>

                                <Styled.DetailItem>
                                    <Styled.Label>Сеть:</Styled.Label>
                                    <Styled.Value>Devnet</Styled.Value>
                                </Styled.DetailItem>

                                {balance !== null && (
                                    <Styled.DetailItem>
                                        <Styled.Label>Баланс:</Styled.Label>
                                        <Styled.Value>
                                            {balance.toFixed(4)} SOL
                                        </Styled.Value>
                                    </Styled.DetailItem>
                                )}
                            </Styled.WalletDetails>

                            <Styled.Actions>
                                <Button
                                    onClick={handleGetBalance}
                                    disabled={loading}
                                    variant="primary"
                                >
                                    {loading
                                        ? "Загрузка..."
                                        : "Получить баланс"}
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
                            </Styled.Actions>

                            {lastTxSignature && (
                                <Styled.TransactionInfo>
                                    <h4>Последняя транзакция:</h4>
                                    <Styled.TxLink
                                        href={`https://explorer.solana.com/tx/${lastTxSignature}?cluster=devnet`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {`${lastTxSignature.slice(
                                            0,
                                            8
                                        )}...${lastTxSignature.slice(-8)}`}
                                    </Styled.TxLink>
                                    <Styled.TxNote>
                                        Нажмите для просмотра в Solana Explorer
                                    </Styled.TxNote>
                                </Styled.TransactionInfo>
                            )}
                        </Styled.WalletInfo>
                    )}

                    {!connected && (
                        <Styled.ConnectPrompt>
                            <p>Подключите кошелек для начала работы с Solana</p>
                            <p>
                                Поддерживаемые кошельки: Phantom, Solflare,
                                Torus
                            </p>
                            <Styled.Features>
                                <h4>Возможности:</h4>
                                <ul>
                                    <li>Просмотр баланса кошелька</li>
                                    <li>Отправка тестовых транзакций</li>
                                    <li>Взаимодействие с Solana devnet</li>
                                    <li>Интеграция с популярными кошельками</li>
                                </ul>
                            </Styled.Features>
                        </Styled.ConnectPrompt>
                    )}
                </Styled.WalletSection>
            </Styled.HomePage>
        </Styled.ResponsiveContainer>
    );
};
