import styled from "styled-components";

export const Bubble = styled.div`
    position: absolute;
    z-index: 3000;
    background: #fff;
    color: #0a0e27;
    border-radius: 16px;
    padding: 1.2rem 1.5rem;
    box-shadow: 0 8px 32px rgba(0,0,0,0.18);
    min-width: 220px;
    max-width: 320px;
    font-size: 1rem;
    pointer-events: auto;
    border: 2px solid #14f195;
    &:after {
        content: "";
        position: absolute;
        border-style: solid;
        border-width: 0 12px 12px 12px;
        border-color: transparent transparent #fff transparent;
        left: 32px;
        top: -12px;
        filter: drop-shadow(0 -2px 2px rgba(20,241,149,0.15));
    }
`;
