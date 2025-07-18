import React, { useCallback } from "react";
import { Button } from "../../shared/ui/Button";
import { useSolana } from "../../shared/lib/useSolana";

export const BalanceCheck: React.FC = () => {
    const { publicKey, getBalance, loading, setLoading } = useSolana();

    const handleGetBalance = useCallback(async () => {
        if (!publicKey) return;

        try {
            setLoading(true);
            await getBalance();
        } catch (error) {
            console.error("Ошибка получения баланса:", error);
        } finally {
            setLoading(false);
        }
    }, [publicKey, getBalance, setLoading]);

    return (
        <Button data-onboarding-id="onboarding-balance-btn" onClick={handleGetBalance} disabled={loading} variant="primary" loader={loading}>
            Получить баланс
        </Button>
    );
};
