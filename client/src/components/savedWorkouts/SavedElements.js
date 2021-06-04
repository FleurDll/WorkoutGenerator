import styled, { keyframes, css } from "styled-components";
import { HiPlay } from "react-icons/hi";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

export const SavedContainer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 15vh 80vh;
    justify-content: center;
`;

export const SavedTitle = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    align-self: center;
    text-align: center;
    padding: 20px;
    
    &:before{
        content: "_ ";
        color: #FFAD0A;
        font-size: 2.8rem;
    }

    &:after{
        content: " _";
        color: #FFAD0A;
        font-size: 2.8rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.6rem;
    }
`;

export const SavedItemsWrapper = styled.div`
    @media screen and (max-width: 480px) {
        padding: 0 5px;
    }
`;

export const SavedItem = styled.div`
    text-decoration: none;
    color: #121212;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 25px 0 0 0;
    padding: 20px 15px;
    cursor: pointer;
    border-left: solid #Fa4d56 0.5rem;

    &:hover {
        transform: scale(1.05);
        border-bottom: solid #Fa4d56 0.5rem;
    }

    @media screen and (max-width: 480px) {
        border-left: solid #Fa4d56 0.3rem;
    }
`;

const animateAppearance = keyframes`
    0% {
        width: 0px;
    }
    100% {
        width: 200px;
    }
`;

export const BorderAnimation = styled.div`
    position: relative;
    bottom: 6px;
    background: #Fa4d56;
    height: 0.4rem;
    width: 200px;
    animation: ${animateAppearance} 1s linear;

    @media screen and (max-width: 480px) {
        bottom: 4px;
        height: 0.3rem;
    }
`;

export const ItemTitle = styled.p`
    font-size: 1.8rem;
    font-weight: bold;
    margin-right: 25px;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.3rem;
    }
`;

export const ItemDate = styled.p`
    font-size: 1.1rem;
    color: #565656;

    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export const SvgWrapper = styled.div`
    position: absolute;
    width: 350px;
    bottom: 0;
    right: 10px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

//////////////////////// MODAL

export const BodyModalWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
`;

const styledButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #Fa4d56;
    margin: 0 40px;
    font-size: 25px;
    color: #fff;
    text-decoration: none;
    border-radius: 10px;
    padding: 0.25em 0.5em;
    cursor: pointer;

    &:hover {
        background: #000;
    }

    @media screen and (max-width: 768px) {
        font-size: 20px;
        margin: 0 25px;
    }

    @media screen and (max-width: 480px) {
        font-size: 20px;
        margin: 0 5px;
    }
`;

export const PlayIconWrapper = styled(Link)`
    ${styledButton};
`;

export const DeleteIconWrapper = styled.div`
    ${styledButton};
`;

const styledIcon = css`
    color: #fff;
    font-size: 50px;
    margin-left: 5px;

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }
`;

export const PlayIcon = styled(HiPlay)`
    ${styledIcon};
`;

export const DeleteIcon = styled(MdDeleteForever)`
    ${styledIcon};
`;