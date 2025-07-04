import styled from "styled-components";

export const WalletButtons = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 2rem;

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 0.75rem;
        width: 100%;
    }
`;

export const WalletButtonWrapper = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;

    @media (max-width: 480px) {
        width: 100%;

        .wallet-adapter-button {
            width: 100% !important;
            justify-content: center;
        }
    }
`;

export const CancelWalletButton = styled.button`
    position: absolute;
    top: -8px;
    right: -8px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #f44336;
    color: white;
    border: none;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    font-weight: bold;
    line-height: 1;
    box-shadow: 0 2px 8px rgba(244, 67, 54, 0.3);
    transition: all 0.2s ease;

    &:hover {
        background: #d32f2f;
        transform: scale(1.1);
        box-shadow: 0 4px 12px rgba(244, 67, 54, 0.4);
    }

    &:active {
        transform: scale(0.95);
    }

    @media (max-width: 480px) {
        top: -6px;
        right: -6px;
        width: 20px;
        height: 20px;
        font-size: 12px;
    }
`;
