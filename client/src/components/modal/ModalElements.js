import styled from "styled-components";
import { ImCross } from "react-icons/im";

export const ModalContainer = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    pointer-events: none;

    opacity: ${({ show }) => (show ? "1" : "")};
    pointer-events: ${({ show }) => (show ? "visible" : "invisible")};
`;

export const ModalContent = styled.div`
    width: 500px;
    background-color: #fff;
    transition: all 0.3s ease-in-out;
    border-radius: 0.1875rem;
    letter-spacing: .05rem;

    @media screen and (max-width: 768px) {
        max-width: 450px;
    }

    @media screen and (max-width: 480px) {
        max-width: 300px;
    }
`;

export const ModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`;

export const ModalTitle = styled.p`
    color: #121212;
    font-size: 30px;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: 25px;
    }

    ${'' /* @media screen and (max-width: 480px) {
        font-size: 20px;
    } */}
`;

export const ModalBody = styled.div`
    padding: 10px;
    border-top: 1px solid #eee;
    color: #505050;
    font-size: 20px;
`;

export const ModalFooter = styled.div`
    padding: 10px;
`;

export const ModalCloseButton = styled.button`
    border: none;
    display: inline-block;
    font-size: 16px;
    margin: 10px 0;
    color: #fff;
    border-radius: 50px;
    background: #121212;
    padding: 12px;
    text-align: center;
    letter-spacing: 1px;
    box-shadow: rgb(0 0 0 / 30%) 0px 0.0625rem 0.1875rem 0px;
    cursor: pointer;
    float: right;

    &:hover{
        background: #fa4d56;
    }
`;

export const CloseIcon = styled(ImCross)`
    font-size: 30px;
    cursor: pointer;

    &:hover{
        color: #Fa4d56;
    }
`;