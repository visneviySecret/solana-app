import { create } from "zustand";

export enum OnboardingStep {
    ConnectWallet = "connect-wallet",
    PhantomLogin = "phantom-login",
    GetSol = "get-sol",
    CheckBalance = "check-balance",
    SendTransaction = "send-transaction",
    Done = "done",
}

interface OnboardingState {
    step: OnboardingStep;
    completed: boolean;
    nextStep: () => void;
    reset: () => void;
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

export const useOnboardingStore = create<OnboardingState>((set, get) => ({
    step: OnboardingStep.ConnectWallet,
    completed: false,
    nextStep: () => {
        const current = get().step;
        const idx = steps.indexOf(current);
        if (idx < steps.length - 1) {
            set({ step: steps[idx + 1], completed: steps[idx + 1] === OnboardingStep.Done });
        }
    },
    reset: () => set({ step: OnboardingStep.ConnectWallet, completed: false }),
    setStep: (step) => set({ step, completed: step === OnboardingStep.Done }),
    finish: () => set({ completed: true }),
})); 