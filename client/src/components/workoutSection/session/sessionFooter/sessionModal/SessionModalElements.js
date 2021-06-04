import styled from "styled-components";
import { Link } from "react-router-dom";

export const ModalInputWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 10px 0 0;
`;

export const ModalInput = styled.input`
font-size: 25px;
padding: 0.25em 0.5em;
margin: 20px 0 0;
border: ${prop => prop.inputRequired === "true" && "solid #Fa4d56"};
`;

export const ModalText = styled.p`
font-size: 20px;
`;

export const ModalTextSpan = styled.span`
border-bottom: solid #Fa4d56;
`;

export const ModalLink = styled(Link)`
    text-decoration: none;
    color: #fa4d56;
    font-weight: bold;
    
    &:before{
        content: "'";
        color: #FFAD0A;
        font-size: 25px;
    }

    &:after{
        content: "'";
        color: #FFAD0A;
        font-size: 25px;
    }

    &:hover {
        border-bottom: solid;
    }
`;