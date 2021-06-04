import styled, { css } from "styled-components";

export const HamburgerContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
        display: none;
    }
`;

const styledBeforeAfter = css`
  content: '';
  position: absolute;
  width: 40px;
  height: 6px;
  background: #fff;
  border-radius: 5px;
  transition: all .5s ease-in-out;
`;

export const HamburgerLogo = styled.div`
  width: 40px;
  height: 6px;
  background: #fff;
  border-radius: 5px;
  position: fixed;
  transform: translate(-50%, -50%);
  z-index: 9999;

  &:before{
    ${styledBeforeAfter};
    transform: translateY(-16px);
  }

  &:after{
    ${styledBeforeAfter};
    transform: translateY(16px);
  } 
`;

////// SMARTPHONE

export const HamburgerSPContainer = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    right: 50px;
    top: 35px;
    }
`;

export const HamburgerLogoSP = styled.div`
  width: 40px;
  height: 6px;
  background: #fff;
  border-radius: 5px;
  position: fixed;
  transform: translate(-50%, -50%);
  z-index: 9999;

  &:before{
    ${styledBeforeAfter};
    transform: translateY(-16px);
  }

  &:after{
    ${styledBeforeAfter};
    transform: translateY(16px);
  } 
`;