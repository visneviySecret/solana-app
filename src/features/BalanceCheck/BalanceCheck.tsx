import React, { useCallback } from "react";
import { Button } from "../../shared/ui/Button";
import { useSolana } from "../../shared/lib/useSolana";

interface BalanceCheckProps {
    loading: boolean;
}

export const BalanceCheck: React.FC<BalanceCheckProps> = ({ loading }) => {
    const { publicKey, getBalance, setLoading } = useSolana();

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
        <Button onClick={handleGetBalance} disabled={loading} variant="primary">
            {loading ? "Загрузка..." : "Получить баланс"}
        </Button>
    );
};
