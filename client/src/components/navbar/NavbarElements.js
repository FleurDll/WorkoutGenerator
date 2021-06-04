import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    height: 100vh;
    position: fixed;
    background-color: #121212;
    width: 450px;
    transition: 1000ms all cubic-bezier(0.19, 1, 0.22, 1);
    transform: translateX(-100%);
    left: 75px;
    z-index: 999;

    &:hover{
        transform: translateX(0%);
        left: 0px;
    }

    @media screen and (max-width: 768px) {
        position: fixed;
        top:0;
        width: 100vw;
        height: 80px;
        left: 100vw;
    }
`;

export const NavContainer = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 100%;
    transition: 1000ms margin-right cubic-bezier(0.19, 1, 0.22, 1);
    margin-right: 80px ;
`;

export const NavLogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 35px;

    @media screen and (max-width: 768px) {
        margin: 10px 15px;
    }
`;

export const NavLogo = styled(Link)`
    color: #fff;
    cursor: pointer;
    font-size: 1.8rem;
    font-weight: bold;
    text-decoration: none;

    &:hover {
        transform: scale(1.05)
    }

    &:before{
        content: "[ ";
        color: #FA4D56;
        font-size: 2.3rem;
    }

    &:after{
        content: " ]";
        color: #FA4D56;
        font-size: 2.3rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const NavMenuWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 60px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavMenu = styled.ul`
    margin-top: 90px;
    list-style: none;
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    font-size: 1.4rem;
    height: 100%;
    cursor: pointer;
    font-weight: bold;
    padding: 5px;

    &:hover {
        border-bottom: 0.2rem solid #FA4D56;
    }
`;

export const NavLinkAdmin = styled(Link)`
    color: ${prop => prop.showHamburger === "true" ? "#121212" : "#fff"};
    text-decoration: none;
    font-size: 1.4rem;
    height: 100%;
    cursor: pointer;
    font-weight: bold;
    padding: 5px;

    &:hover {
        border-bottom: 0.2rem solid #FA4D56;
    }
`;

export const NavItemAdmin = styled.div`
    height: 80px;
`;

export const NavSvgWrapper = styled.div`
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const ManageLinkSpan = styled.div`
    background: #FA4D56;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    display: inline-block;
    margin-left: 10px;
`;