import styled from "styled-components";

export const AdminContainer = styled.div`
    height: 100vh;

    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const AdminWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AdminMsgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AdminMsg = styled.p`
    font-size: 2rem;
    font-weight: bold;
    padding: 5px;
    text-align: center;
    
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const AdminMsgSpan = styled.span`
    color: #fa4d56;
    &:before{
        content: " "
    }
`;

export const AdminForm = styled.form`
    display: flex;
    flex-direction: column;
`;


export const AdminInput = styled.input`
    font-size: 25px;
    padding: 0.25em 0.5em;
    margin: 15px 0;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`;

export const AdminButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: #000;
    border-radius: 10px;
    background: #FA4D56;
    padding: 0.25em 0.5em;
    border: none;
    box-shadow: rgb(0 0 0 / 30%) 0px 0.0625rem 0.1875rem 0px;
    cursor: pointer;

    &:hover{
        background: #121212;
    }
`;

export const AdminSvgWrapper1 = styled.div`
    width: 400px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const AdminSvgWrapper2 = styled.div`
    width: 350px;
    float: right;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;