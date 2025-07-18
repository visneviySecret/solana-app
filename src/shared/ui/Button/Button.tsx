import React from "react";
import { ButtonLoader, StyledButton } from "./Button.styles";
import { Loader } from "../Loader";

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    variant?: "primary" | "secondary";
    type?: "button" | "submit" | "reset";
    loader?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    onClick,
    disabled = false,
    variant = "primary",
    type = "button",
    loader = false,
    ...props
}) => {

    return (
        <StyledButton
            onClick={onClick}
            disabled={disabled}
            variant={variant}
            type={type}
            {...props}
        >
            {loader && (
                <ButtonLoader>
                    <Loader size={18} />
                </ButtonLoader>
            )}
            {children}
        </StyledButton>
    );
};
