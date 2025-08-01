import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { useOnboardingStore } from "../store/onboardingStore";
import { Bubble } from "./OnboardingOverlay.styles";

const getBubbleTexts = (t: any): Record<string, React.ReactNode> => ({
    "connect-wallet": (
        <>
            <b>{t('onboarding.step')} 1:</b> {t('onboarding.connect_wallet_desc')}<br />
        </>
    ),
    "phantom-login": (
        <>
            <b>{t('onboarding.step')} 2:</b> {t('onboarding.phantom_login_desc')}<br />
            {t('onboarding.use_credentials')} <b>AmpleGrove2196</b> {t('onboarding.and_password')} <b>testMySolanaApp</b>.
        </>
    ),
    "get-sol": (
        <>
            <b>{t('onboarding.step')} 3:</b> {t('onboarding.get_sol_desc')}<br />
            {t('onboarding.copy_address')} <a href="https://faucet.solana.com/" target="_blank" rel="noopener noreferrer">Solana Faucet</a>.
        </>
    ),
    "check-balance": (
        <>
            <b>{t('onboarding.step')} 4:</b> {t('onboarding.check_balance_desc')}<br />
        </>
    ),
    "send-transaction": (
        <>
            <b>{t('onboarding.step')} 5:</b> {t('onboarding.send_transaction_desc')}<br />
        </>
    ),
});

const getAnchorId = (step: string): string | null => {
    switch (step) {
        case "connect-wallet":
            return "onboarding-wallet-btn";
        case "phantom-login":
            return "onboarding-header";
        case "get-sol":
            return "onboarding-connect-prompt";
        case "check-balance":
            return "onboarding-balance-btn";
        case "send-transaction":
            return "onboarding-send-btn";
        default:
            return null;
    }
};

function useBubblePosition(step: string) {
    const [pos, setPos] = useState<{ top: number; left: number } | null>(null);
    useEffect(() => {
        const anchorId = getAnchorId(step);

        if (!anchorId) return;
        let el

        switch (anchorId) {
            case ('onboarding-header'):
                const adapterButtons = document.querySelectorAll(`.wallet-adapter-button`);
                el = Array.from(adapterButtons).find(node => node.innerHTML.includes('Phantom'))
                break;
            default:
                el = document.querySelector(`[data-onboarding-id="${anchorId}"]`);
                break;
        }

        if (el) {
            const rect = el.getBoundingClientRect();
            setPos({
                top: rect.bottom + window.scrollY + 12,
                left: rect.left + window.scrollX,
            });
        }
    }, [step]);
    return pos;
}

export const OnboardingOverlay: React.FC = () => {
    const { step, completed } = useOnboardingStore();
    const { t } = useTranslation();

    const pos = useBubblePosition(step);
    if (completed || step === "done") return null;
    if (!pos) return null;

    const bubbleTexts = getBubbleTexts(t);

    return createPortal(
        <Bubble style={{ top: pos.top, left: pos.left }}>
            {bubbleTexts[step]}
        </Bubble>,
        document.body
    );
}; 