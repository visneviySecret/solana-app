import React from "react";
import { useSolana } from "../../shared/lib/useSolana";
import { useWalletStore } from "../../shared/store/walletStore";
import { SOLANA_NETWORK } from "../../shared/constants";
import { useTranslation } from "react-i18next";
import * as Styled from "./WalletInfoWidget.styles.ts";

export const WalletInfoWidget: React.FC = () => {
    const { wallet, walletAddress, shortAddress } = useSolana();
    const { walletBalance } = useWalletStore();
    const { t } = useTranslation();

    return (
        <Styled.WalletDetails>
            <h3>{t("wallet_info.title")}</h3>

            <Styled.DetailItem>
                <Styled.Label>{t("wallet_info.wallet")}</Styled.Label>
                <Styled.Value>{wallet?.adapter.name}</Styled.Value>
            </Styled.DetailItem>

            <Styled.DetailItem>
                <Styled.Label>{t("wallet_info.full_address")}</Styled.Label>
                <Styled.Value title={walletAddress}>
                    {walletAddress}
                </Styled.Value>
            </Styled.DetailItem>

            <Styled.DetailItem>
                <Styled.Label>{t("wallet_info.short_address")}</Styled.Label>
                <Styled.Value>{shortAddress}</Styled.Value>
            </Styled.DetailItem>

            <Styled.DetailItem>
                <Styled.Label>{t("wallet_info.network")}</Styled.Label>
                <Styled.Value>{SOLANA_NETWORK.DEVNET}</Styled.Value>
            </Styled.DetailItem>

            {walletBalance !== null && (
                <Styled.DetailItem>
                    <Styled.Label>{t("wallet_info.balance")}</Styled.Label>
                    <Styled.Value>{walletBalance.toFixed(4)} SOL</Styled.Value>
                </Styled.DetailItem>
            )}
        </Styled.WalletDetails>
    );
};
