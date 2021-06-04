import styled, { keyframes, css } from "styled-components";
import { IoMdArrowRoundBack } from "react-icons/io";

export const HomeContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    height: 100vh;
    padding: 50px;

    @media screen and (max-width: 768px) {
        padding: 15px;
        height: 80vh;
    }
`;

export const HomeHeader = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
`;

export const HeaderMsg = styled.p`
    text-align: center;
    font-size: 2rem;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const HomeBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
`;

export const BodyMsg = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    padding: 5px;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const BodyMsgSpan = styled.span`
    padding: 10px;
    border-bottom: 0.2rem solid #FA4D56;
`;

export const HomeFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export const FooterMsgWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-left: 100px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const FooterMsg = styled.p`
    font-size: 2rem;
    font-weight: bold;
`;

const arrowAnimation = keyframes`
    0% {
        transform: translate(0px);
    }

    70% {
        transform: translate(-150px);
    }

    100% {
        transform: translate(0px);
    }
`;

export const ArrowIcon = styled(IoMdArrowRoundBack)`
    font-size: 5rem;
    color: #FA4D56;
    margin-right: 20px;
    animation: 4.5s ease-in-out infinite ${arrowAnimation};

    @media screen and (max-width: 768px) {
        animation: none;
        margin-right: 0;
    }
`;

const styledSvg = css`
    width: 350px;

    @media screen and (max-width: 768px) {
        width: 180px;
    }
`;


export const HeaderSvgWrapper = styled.div`
    display: flex;
    justify-content: center;
    ${styledSvg};
`;

export const FooterSvgWrapper = styled.div`
    ${styledSvg};
`;