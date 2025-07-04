import styled from "styled-components";

export const ConnectPrompt = styled.div`
    text-align: center;
    padding: 3rem 2rem;
    border-radius: 20px;
    background: linear-gradient(
        135deg,
        rgba(20, 241, 149, 0.1),
        rgba(153, 69, 255, 0.1)
    );
    border: 1px solid rgba(255, 255, 255, 0.1);

    p {
        color: #8892b0;
        font-size: 1.1rem;
        margin: 0 0 1rem 0;
        line-height: 1.6;

        &:first-child {
            font-size: 1.3rem;
            color: #ccd6f6;
            font-weight: 500;
        }
    }

    @media (max-width: 768px) {
        padding: 2rem 1rem;

        p {
            font-size: 1rem;

            &:first-child {
                font-size: 1.1rem;
            }
        }
    }
`;

export const Features = styled.div`
    margin-top: 2rem;
    text-align: left;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;

    h4 {
        color: #14f195;
        margin: 0 0 1rem 0;
        font-size: 1.2rem;
        text-align: center;
    }

    ul {
        list-style: none;
        padding: 0;
        margin: 0;

        li {
            color: #8892b0;
            padding: 0.5rem 0;
            position: relative;
            padding-left: 1.5rem;

            &:before {
                content: "✓";
                color: #14f195;
                font-weight: bold;
                position: absolute;
                left: 0;
            }
        }
    }

    @media (max-width: 768px) {
        margin-top: 1.5rem;

        h4 {
            font-size: 1.1rem;
        }

        ul li {
            font-size: 0.9rem;
            padding: 0.4rem 0;
        }
    }
`;
