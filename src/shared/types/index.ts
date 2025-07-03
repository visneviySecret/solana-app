// Базовые типы для Solana приложения

export interface User {
  id: string;
  wallet?: string;
  name?: string;
}

export interface WalletState {
  connected: boolean;
  publicKey: string | null;
  balance: number;
}
