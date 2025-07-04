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
