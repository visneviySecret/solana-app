import styled from "styled-components";

export const WalletDetails = styled.div`
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;

    h3 {
        color: #14f195;
        margin: 0 0 1.5rem 0;
        font-size: 1.3rem;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        padding: 1rem;

        h3 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
        }
    }
`;

export const DetailItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
    gap: 1rem;

    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.3rem;
        margin-bottom: 0.8rem;
    }
`;

export const Label = styled.span`
    color: #8892b0;
    font-weight: 500;
    min-width: 140px;
    flex-shrink: 0;

    @media (max-width: 768px) {
        min-width: auto;
        font-size: 0.9rem;
    }
`;

export const Value = styled.span`
    color: #ccd6f6;
    font-family: "Courier New", monospace;
    font-size: 0.9rem;
    word-break: break-all;
    text-align: right;
    line-height: 1.4;

    @media (max-width: 768px) {
        text-align: left;
        font-size: 0.85rem;
    }
`;
