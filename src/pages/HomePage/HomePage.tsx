import React, { useCallback } from "react";
import {
    WalletMultiButton,
    WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";
import { Transaction, SystemProgram } from "@solana/web3.js";
import { Button } from "../../shared/ui/Button";
import { useSolana } from "../../shared/lib/useSolana";
import { useWalletStore } from "../../shared/store/walletStore";
import {
    TRANSACTION_AMOUNTS,
    SOLANA_EXPLORER_BASE_URL,
    SOLANA_NETWORK,
} from "../../shared/constants";
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
        saveTransaction,
    } = useSolana();

    const { lastTransactionSignature, walletBalance } = useWalletStore();

    // Получение баланса кошелька
    const handleGetBalance = useCallback(async () => {
        if (!publicKey) return;

        try {
            setLoading(true);
            await getBalance(); // Баланс автоматически сохранится в store
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
                    lamports: TRANSACTION_AMOUNTS.TEST_TRANSACTION,
                })
            );

            // Получаем последний blockhash
            const { blockhash } = await connection.getLatestBlockhash();
            transaction.recentBlockhash = blockhash;
            transaction.feePayer = publicKey;

            // Отправляем транзакцию
            const signature = await sendTransaction(transaction, connection);

            // Сохраняем транзакцию в store
            saveTransaction(signature);

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
        saveTransaction,
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
                                    <Styled.Value>
                                        {SOLANA_NETWORK.DEVNET}
                                    </Styled.Value>
                                </Styled.DetailItem>

                                {walletBalance !== null && (
                                    <Styled.DetailItem>
                                        <Styled.Label>Баланс:</Styled.Label>
                                        <Styled.Value>
                                            {walletBalance.toFixed(4)} SOL
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
                                        walletBalance === null ||
                                        walletBalance <
                                            TRANSACTION_AMOUNTS.MIN_BALANCE_FOR_TRANSACTION
                                    }
                                    variant="secondary"
                                >
                                    {loading
                                        ? "Отправка..."
                                        : "Тестовая транзакция (0.001 SOL)"}
                                </Button>
                            </Styled.Actions>

                            {lastTransactionSignature && (
                                <Styled.TransactionInfo>
                                    <h4>Последняя транзакция:</h4>
                                    <Styled.TxLink
                                        href={`${SOLANA_EXPLORER_BASE_URL}/tx/${lastTransactionSignature}?cluster=${SOLANA_NETWORK.DEVNET}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {`${lastTransactionSignature.slice(
                                            0,
                                            8
                                        )}...${lastTransactionSignature.slice(
                                            -8
                                        )}`}
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
