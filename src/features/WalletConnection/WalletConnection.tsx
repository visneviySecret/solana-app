import React from "react";
import {
    WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useSolana } from "../../shared/lib/useSolana";
import * as Styled from "./WalletConnection.styles.ts";
import { useOnboardingStore, OnboardingStep } from "../../shared/store/onboardingStore";
import { useTranslation } from "react-i18next";

export const WalletConnection: React.FC = () => {
    const { connected, wallet, cancelWalletSelection } = useSolana();
    const { step, nextStep } = useOnboardingStore();
    const { t } = useTranslation();

    return (
        <Styled.WalletButtons>
            <Styled.WalletButtonWrapper data-onboarding-id="onboarding-wallet-btn" onClick={() => {
                if (step === OnboardingStep.ConnectWallet)
                    setTimeout(() => {
                        nextStep();
                    })
            }}>
                <WalletMultiButton >
                    {connected ? wallet?.adapter.name : t("buttons.connect")}
                </WalletMultiButton>
                {wallet && connected && (
                    <Styled.CancelWalletButton
                        onClick={cancelWalletSelection}
                        title={`${t("buttons.disconnect")} ${wallet.adapter.name}`}
                    >
                        ✕
                    </Styled.CancelWalletButton>
                )}
            </Styled.WalletButtonWrapper>
        </Styled.WalletButtons>
    );
};
