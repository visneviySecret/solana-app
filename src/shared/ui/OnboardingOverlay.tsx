import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useOnboardingStore } from "../store/onboardingStore";
import { Bubble } from "./OnboardingOverlay.styles";

const bubbleTexts: Record<string, React.ReactNode> = {
    "connect-wallet": (
        <>
            <b>Шаг 1:</b> Подключите кошелёк к приложению.<br />
            {/* Нажмите "Подключить кошелёк" и выберите Phantom. */}
        </>
    ),
    "phantom-login": (
        <>
            <b>Шаг 2:</b> Войдите в тестовый кошелёк Phantom.<br />
            Используйте логин <b>AmpleGrove2196</b> и пароль <b>testMySolanaApp</b>.
        </>
    ),
    "get-sol": (
        <>
            <b>Шаг 3:</b> Получите тестовые SOL.<br />
            Скопируйте адрес кошелька и пополните через <a href="https://faucet.solana.com/" target="_blank" rel="noopener noreferrer">Solana Faucet</a>.
        </>
    ),
    "check-balance": (
        <>
            <b>Шаг 4:</b> Проверьте баланс кошелька.<br />
        </>
    ),
    "send-transaction": (
        <>
            <b>Шаг 5:</b> Отправьте тестовую транзакцию.<br />
        </>
    ),
};

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
    const { step, completed, nextStep, finish } = useOnboardingStore();

    const pos = useBubblePosition(step);
    if (completed || step === "done") return null;
    if (!pos) return null;

    return createPortal(
        <Bubble style={{ top: pos.top, left: pos.left }}>
            {bubbleTexts[step]}
        </Bubble>,
        document.body
    );
}; 