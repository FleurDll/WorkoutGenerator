import styled from "styled-components";
import { IoReloadCircle } from "react-icons/io5";

export const SessionContainer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 0.5fr 0.5fr 0.2fr 1fr;
    align-items: center;
    margin: auto;
    padding: 0 15px;

    max-width: 900px;

    @media screen and (max-width: 1024px) {
        max-width: 690px;
        margin: 100px auto;
    }
`;

export const ReloadIcon = styled(IoReloadCircle)`
    position: absolute;
    left: 90px;
    top: 10px;
    font-size: 70px;
    color: #Fa4d56;
    cursor: pointer;

    &:hover {
        transform: rotate(85deg);
        color: #121212;
    }

    @media screen and (max-width: 768px) {
        left: 5px;
        top: 85px;
    }

    @media screen and (max-width: 480px) {
        font-size: 55px;
    }
`;