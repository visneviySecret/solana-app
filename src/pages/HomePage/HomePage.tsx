import React, { useState, useCallback } from "react";
import { useSolana } from "../../shared/lib/useSolana";
import {
    PageHeader,
    WalletConnectionWidget,
    WalletInfoWidget,
    WalletActionsWidget,
    TransactionHistoryWidget,
    ConnectPromptWidget,
} from "../../widgets";
import * as Styled from "./HomePage.styles.ts";
import { OnboardingOverlay } from "../../shared/ui/OnboardingOverlay";
import { Toast } from "../../shared/ui/Toast";

export const HomePageComponent: React.FC = () => {
    const { connected, publicKey } = useSolana();
    const [toast, setToast] = useState<string>("");
    const showToast = useCallback((msg: string) => setToast(msg), []);

    return (
        <Styled.ResponsiveContainer>
            <OnboardingOverlay />
            <Toast message={toast} onClose={() => setToast("")} />
            <Styled.HomePage>
                <PageHeader />

                <Styled.WalletSection>
                    <WalletConnectionWidget />

                    {connected && publicKey ? (
                        <Styled.WalletInfo>
                            <WalletInfoWidget />
                            <WalletActionsWidget showToast={showToast} />
                            <TransactionHistoryWidget />
                        </Styled.WalletInfo>
                    ) : (
                        <ConnectPromptWidget />
                    )}
                </Styled.WalletSection>
            </Styled.HomePage>
        </Styled.ResponsiveContainer>
    );
};
