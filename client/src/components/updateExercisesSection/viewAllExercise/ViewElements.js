import styled from "styled-components";
import { MdDeleteForever } from "react-icons/md";
/* import { TiDelete } from "react-icons/ti"; */

export const ViewContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 850px) {
        margin: 10px 0;
    }
`;

export const ExerciseWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    align-items: center;
    border-left: 0.4rem solid ${prop => prop.borderColor === "top" ? "#Fa4d56" : "#FFAD0A"};
    padding-left: 10px;
    margin: 15px 0;

    @media screen and (max-width: 850px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 10px 30px;
    }
`;

export const ExerciseName = styled.p`
    font-size: 1.5rem;

    @media screen and (max-width: 850px) {
        font-size: 1.3rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const ExerciseDelete = styled(MdDeleteForever)`
    color: ${prop => prop.admin === "true" ? "#121212" : "grey"};
    cursor: ${prop => prop.admin === "true" ? "pointer" : "default"};
    font-size: 28px;

    &:hover{
        color: ${prop => prop.admin === "true" ? "#FA4D56" : "grey"};
    }
`;
