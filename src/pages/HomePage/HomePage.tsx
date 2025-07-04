import React from "react";
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

export const HomePageComponent: React.FC = () => {
    const { connected, publicKey } = useSolana();

    return (
        <Styled.ResponsiveContainer>
            <Styled.HomePage>
                <PageHeader />

                <Styled.WalletSection>
                    <WalletConnectionWidget />

                    {connected && publicKey ? (
                        <Styled.WalletInfo>
                            <WalletInfoWidget />
                            <WalletActionsWidget />
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
