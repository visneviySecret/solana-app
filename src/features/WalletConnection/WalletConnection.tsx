import React from "react";
import {
    WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useSolana } from "../../shared/lib/useSolana";
import * as Styled from "./WalletConnection.styles.ts";
import { useOnboardingStore, OnboardingStep } from "../../shared/store/onboardingStore";

export const WalletConnection: React.FC = () => {
    const { connected, wallet, cancelWalletSelection } = useSolana();
    const { step, nextStep } = useOnboardingStore();

    return (
        <Styled.WalletButtons>
            <Styled.WalletButtonWrapper data-onboarding-id="onboarding-wallet-btn" onClick={(e) => {
                if (step === OnboardingStep.ConnectWallet)
                    setTimeout(() => {
                        nextStep();
                    })
            }}>
                <WalletMultiButton />
                {wallet && connected && (
                    <Styled.CancelWalletButton
                        onClick={cancelWalletSelection}
                        title={`Отключить кошелек ${wallet.adapter.name}`}
                    >
                        ✕
                    </Styled.CancelWalletButton>
                )}
            </Styled.WalletButtonWrapper>
        </Styled.WalletButtons>
    );
};
