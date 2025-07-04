import styled from "styled-components";

export const ResponsiveContainer = styled.div`
    min-height: 100vh;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: linear-gradient(135deg, #0a0e27 0%, #1a1a2e 50%, #16213e 100%);

    @media (max-width: 768px) {
        padding: 0.5rem;
        align-items: stretch;
    }
`;

export const HomePage = styled.main`
    width: 100%;
    max-width: 800px;
    margin-top: 2rem;

    @media (max-width: 768px) {
        margin-top: 1rem;
        max-width: none;
    }
`;

export const WalletSection = styled.section`
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 2rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

    @media (max-width: 768px) {
        padding: 1.5rem;
        border-radius: 20px;
    }

    @media (max-width: 480px) {
        padding: 1rem;
        border-radius: 16px;
    }
`;

export const WalletInfo = styled.div`
    margin-top: 1.5rem;
`;
