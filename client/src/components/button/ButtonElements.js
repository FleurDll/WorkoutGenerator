import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: #fff;
    border-radius: 10px;
    background: ${prop => prop.backroundColor};
    padding: 0.25em 0.5em;
    border: none;
    box-shadow: rgb(0 0 0 / 30%) 0px 0.0625rem 0.1875rem 0px;
    cursor: ${prop => prop.color === "disable" ? "default" : "pointer"};

    &:hover{
        background: ${prop => prop.hoverColor};
    }

   ${'' /*  @media screen and (max-width: 768px) {
        font-size: 20px;
    } */}
`;