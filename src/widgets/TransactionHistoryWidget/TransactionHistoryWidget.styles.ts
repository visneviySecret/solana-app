import styled from "styled-components";

export const TransactionInfo = styled.div`
    background: rgba(20, 241, 149, 0.05);
    border: 1px solid rgba(20, 241, 149, 0.2);
    border-radius: 12px;
    padding: 1.25rem;
    margin-top: 1.5rem;

    h4 {
        color: #14f195;
        margin: 0 0 0.75rem 0;
        font-size: 1.1rem;
        font-weight: 600;
    }

    @media (max-width: 768px) {
        padding: 1rem;
        margin-top: 1rem;

        h4 {
            font-size: 1rem;
            margin-bottom: 0.5rem;
        }
    }
`;

export const TxLink = styled.a`
    color: #14f195;
    text-decoration: none;
    font-family: "Courier New", monospace;
    font-size: 0.95rem;
    font-weight: 500;
    display: block;
    margin-bottom: 0.5rem;
    transition: color 0.2s ease;

    &:hover {
        color: #64ffda;
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        font-size: 0.85rem;
        word-break: break-all;
    }
`;

export const TxNote = styled.p`
    color: #8892b0;
    font-size: 0.85rem;
    margin: 0;
    font-style: italic;

    @media (max-width: 768px) {
        font-size: 0.8rem;
    }
`;
