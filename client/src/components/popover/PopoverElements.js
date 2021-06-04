import styled from "styled-components";

export const PopoverContainer = styled.div`
    position: absolute;
    top: 44vh;
    min-width: 230px;
    max-width: 350px;
    padding: 30px 20px;
    z-index: 2;
    background: rgba( 18, 18, 18, 0.8 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 3px );
    -webkit-backdrop-filter: blur( 3px  );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

export const PopoverText = styled.p`
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: #fff;
`;