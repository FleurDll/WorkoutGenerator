import styled from "styled-components";

export const AddContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormWrapper = styled.div``;

export const AddSvgWrapper = styled.svg`
    position: absolute;
    top: -50px;
    left: 90px;
    width: 400px;

    @media screen and (max-width: 850px) {
        opacity: 0;
        width: 0px;
    }
`;

export const AddTitle = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 20px;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        text-align: center;
    }
`;

export const TitleSpan = styled.span`
    color: #FA4D56;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 480px) {
        align-items: center;
    }
`;

export const InputField = styled.input`
    font-size: 25px;
    padding: 0.25em 0.5em;
    margin: 5px 0;

    @media screen and (max-width: 900px) {
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
        width: 200px;
    }
`;

export const FormButtonWrapper = styled.div`
    margin: 10px 0;
    width: inherit;
`;