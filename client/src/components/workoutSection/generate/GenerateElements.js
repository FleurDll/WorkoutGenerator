import styled from "styled-components";

export const GenerateContainer = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;

    @media screen and (max-width: 768px) {
      height: 80vh;
    }
`;

export const GenerateSvgWrapper1 = styled.div`
    width: 350px;
   
    @media screen and (max-width: 768px) {
      width: 250px;
    }
`;

export const GenerateSvgWrapper2 = styled.div`
    width: 400px;
    justify-self: flex-end;

    @media screen and (max-width: 768px) {
      width: 300px;
    }
`;

export const GenerateWrapper = styled.div`
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const GenerateTitle = styled.p`
    font-size: 2.5rem;
    font-weight: bold;
    margin: 30px 0;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 1.8rem;
    }
`;

export const TitleSpan = styled.span`
  color: #FA4D56;
`;

export const GenerateButtonWrapper = styled.div`
`;