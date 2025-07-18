import { create } from "zustand";

export enum OnboardingStep {
    ConnectWallet = "connect-wallet",
    PhantomLogin = "phantom-login",
    GetSol = "get-sol",
    CheckBalance = "check-balance",
    SendTransaction = "send-transaction",
    Done = "done",
}

const ONBOARDING_KEY = "onboarding_completed";

interface OnboardingState {
    step: OnboardingStep;
    completed: boolean;
    nextStep: () => void;
    setStep: (step: OnboardingStep) => void;
    finish: () => void;
}

const steps: OnboardingStep[] = [
    OnboardingStep.ConnectWallet,
    OnboardingStep.PhantomLogin,
    OnboardingStep.GetSol,
    OnboardingStep.CheckBalance,
    OnboardingStep.SendTransaction,
    OnboardingStep.Done,
];

function getInitialCompleted() {
    return localStorage.getItem(ONBOARDING_KEY) === "true";
}

export const useOnboardingStore = create<OnboardingState>((set, get) => ({
    step: OnboardingStep.ConnectWallet,
    completed: getInitialCompleted(),
    nextStep: () => {
        if (get().completed) return
        const current = get().step;
        const idx = steps.indexOf(current);
        if (idx < steps.length - 1) {
            const next = steps[idx + 1];
            set({ step: next, completed: next === OnboardingStep.Done });
            if (next === OnboardingStep.Done) {
                localStorage.setItem(ONBOARDING_KEY, "true");
            }
        }
    },
    setStep: (step) => {
        if (get().completed) return
        set({ step, completed: step === OnboardingStep.Done });
        if (step === OnboardingStep.Done) {
            localStorage.setItem(ONBOARDING_KEY, "true");
        }
    },
    finish: () => {
        set({ step: OnboardingStep.Done, completed: true });
        localStorage.setItem(ONBOARDING_KEY, "true");
    },
})); 