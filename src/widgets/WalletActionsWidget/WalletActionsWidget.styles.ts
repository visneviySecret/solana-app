import styled from "styled-components";

export const Actions = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.75rem;
    }
`;
