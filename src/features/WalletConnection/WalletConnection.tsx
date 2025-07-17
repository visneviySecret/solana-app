import React from "react";
import {
    WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { useSolana } from "../../shared/lib/useSolana";
import * as Styled from "./WalletConnection.styles.ts";

export const WalletConnection: React.FC = () => {
    const { connected, wallet, cancelWalletSelection } = useSolana();

    return (
        <Styled.WalletButtons>
            <Styled.WalletButtonWrapper>
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
