import React from "react";
import { StyledButton } from "./Button.styles";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant?: "primary" | "secondary";
    type?: "button" | "submit" | "reset";
}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    disabled = false,
    variant = "primary",
    type = "button",
}) => {
    return (
        <StyledButton
            onClick={onClick}
            disabled={disabled}
            variant={variant}
            type={type}
        >
            {children}
        </StyledButton>
    );
};
