import styled from "styled-components";

export const StyledButton = styled.button<{ variant: "primary" | "secondary" }>`
    position: relative;
    padding: 12px 24px;
    border: none;
    border-radius: 6px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    outline: none;

    &:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    &:active {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;

        &:hover {
            transform: none;
            box-shadow: none;
        }
    }

    /* Primary variant */
    ${({ variant }) =>
        variant === "primary" &&
        `
        background: #667eea;
        color: white;

        &:hover:not(:disabled) {
            background: #5a6fd8;
        }
    `}

    /* Secondary variant */
    ${({ variant }) =>
        variant === "secondary" &&
        `
        background: #f8f9fa;
        color: #333;
        border: 1px solid #dee2e6;

        &:hover:not(:disabled) {
            background: #e9ecef;
        }
    `}
`;

export const ButtonLoader = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-right: 8px; */
`;
