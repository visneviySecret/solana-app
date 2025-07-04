import React from "react";
import { useSolana } from "../../shared/lib/useSolana";
import { useWalletStore } from "../../shared/store/walletStore";
import { SOLANA_NETWORK } from "../../shared/constants";
import * as Styled from "./WalletInfoWidget.styles.ts";

export const WalletInfoWidget: React.FC = () => {
    const { wallet, walletAddress, shortAddress } = useSolana();
    const { walletBalance } = useWalletStore();

    return (
        <Styled.WalletDetails>
            <h3>Информация о кошельке</h3>

            <Styled.DetailItem>
                <Styled.Label>Кошелек:</Styled.Label>
                <Styled.Value>{wallet?.adapter.name}</Styled.Value>
            </Styled.DetailItem>

            <Styled.DetailItem>
                <Styled.Label>Полный адрес:</Styled.Label>
                <Styled.Value title={walletAddress}>
                    {walletAddress}
                </Styled.Value>
            </Styled.DetailItem>

            <Styled.DetailItem>
                <Styled.Label>Сокращенный адрес:</Styled.Label>
                <Styled.Value>{shortAddress}</Styled.Value>
            </Styled.DetailItem>

            <Styled.DetailItem>
                <Styled.Label>Сеть:</Styled.Label>
                <Styled.Value>{SOLANA_NETWORK.DEVNET}</Styled.Value>
            </Styled.DetailItem>

            {walletBalance !== null && (
                <Styled.DetailItem>
                    <Styled.Label>Баланс:</Styled.Label>
                    <Styled.Value>{walletBalance.toFixed(4)} SOL</Styled.Value>
                </Styled.DetailItem>
            )}
        </Styled.WalletDetails>
    );
};
