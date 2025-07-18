import React, { useEffect } from "react";
import styled from "styled-components";

const ToastContainer = styled.div`
    position: fixed;
    left: 24px;
    bottom: 24px;
    z-index: 5000;
    background: #14f195;
    color: #fff;
    padding: 16px 32px;
    border-radius: 12px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.18);
    font-size: 1.1rem;
    opacity: 0.95;
    pointer-events: none;
`;

interface ToastProps {
    message: string;
    onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    if (!message) return null;
    return <ToastContainer>{message}</ToastContainer>;
}; 