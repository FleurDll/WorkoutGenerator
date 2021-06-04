import styled from "styled-components";

export const UpdateContainer = styled.div`
    height: 100vh;
`;

export const UpdateWrapper = styled.div`
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 0.6fr;
    align-items: center;

    @media screen and (max-width: 850px) {
        grid-template-columns: 1fr;
    }
`;