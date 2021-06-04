import styled from "styled-components";

export const SessionTitle = styled.p`
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;

    &:before{
        content: "_ ";
        color: #Fa4d56;
        font-size: 2.8rem;
    }

    &:after{
        content: " _";
        color: #Fa4d56;
        font-size: 2.8rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.9rem;
    }
`;

export const SessionSupersetWrapper = styled.div`
`;

export const Superset = styled.div`
    display: flex;
    flex-direction: column;
    border-left: solid #FFAD0A 0.5rem;
    margin: 25px 0;

    @media screen and (max-width: 768px) {
        margin: 15px 0 0;
    }
`;

// header
export const SupersetHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 50px;
    color: #Fa4d56;
`;

export const SupersetText = styled.div`
    font-size: 1.1rem;
    font-weight: bold;
    font-style: italic;
`;

export const SupersetBody = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 20px;

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

export const Exercise = styled.div`
    text-align: center;
    margin: 5px 0;

    @media screen and (max-width: 480px) {
        text-align: left;
    }
`;

export const ExerciseName = styled.p`
    font-size: 1.5rem;
    font-weight: bold;

    @media screen and (max-width: 480px) {
        font-size: 1.3rem;
    }
`;

export const ExerciseDuration = styled.p`
    font-size: 1.1rem;
    color: #565656;

    @media screen and (max-width: 480px) {
        font-size: 0.9rem;
    }
`;

export const SessionInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 480px) {
        display: grid;
        grid-tempalte-rows: 1fr 1fr;
        justify-content: center;
    }
`;

export const Column = styled.div`
    margin: 10px 0;
`;

export const RecoveryDuration = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0 0 5px 0;
    margin-bottom: 10px;
    margin-right: 18px;

    @media screen and (max-width: 480px) {
        font-size: 0.9rem;
        line-height: 20px;
    }
`;

export const RecoveryExample = styled.p`
    font-size: 0.9rem;
    font-weight: bold;

    @media screen and (max-width: 768px) {
        font-size: 0.8rem;
    }
`;

export const RecoverySpan = styled.span`
    border-bottom: solid #Fa4d56;
    padding: 0 0 5px 0;

    @media screen and (max-width: 768px) {
        padding: 0;
    }
`;

export const TotalDuration = styled.p`
    font-size: 1.8rem;
    font-weight: bold;
    color: #Fa4d56;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.3rem;
        text-align: center;
    }
`;

export const DurationSpan = styled.span`
    color: #000;
`;