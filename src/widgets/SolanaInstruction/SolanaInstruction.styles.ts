import styled from "styled-components";

export const Header = styled.div`
    text-align: center;
    margin-bottom: 2rem;
    padding: 1rem;

    h1 {
        color: #14f195;
        font-size: 2.5rem;
        margin: 0 0 0.5rem 0;
        font-weight: 700;
        background: linear-gradient(135deg, #14f195, #9945ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;

        @media (max-width: 768px) {
            font-size: 2rem;
        }
    }

    p {
        color: #8892b0;
        font-size: 1.1rem;
        margin: 0;
        max-width: 500px;
        margin: 0 auto;

        @media (max-width: 768px) {
            font-size: 1rem;
        }
    }
`;

export const InfoButton = styled.button`
    position: absolute;
    top: 16px;
    left: 16px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #14f195;
    color: #0a0e27;
    border: none;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    box-shadow: 0 2px 8px rgba(20, 241, 149, 0.2);
    transition: background 0.2s;

    &:hover {
        background: #0a0e27;
        color: #14f195;
        border: 1px solid #14f195;
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(10, 14, 39, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const ModalContent = styled.div`
    background: #fff;
    color: #0a0e27;
    border-radius: 16px;
    padding: 2rem 2.5rem 1.5rem 2.5rem;
    min-width: 320px;
    max-width: 90vw;
    max-height: 100dvh;
    box-shadow: 0 8px 32px rgba(0,0,0,0.25);
    overflow-y: auto;
    position: relative;
    text-align: left;
`;

export const ModalClose = styled.button`
    position: absolute;
    top: 12px;
    right: 16px;
    background: none;
    border: none;
    font-size: 2rem;
    color: #0a0e27;
    cursor: pointer;
    z-index: 10;
    line-height: 1;
    padding: 0;
    transition: color 0.2s;
    &:hover {
        color: #14f195;
    }
`;
