import React from 'react';
import { connect } from "react-redux";
import HamburgerDesktop from './hamburger';
import HamburgerSmartphone from "./hamburger/HamburgerSmartphone";
import { Nav, NavContainer, NavSvgWrapper, NavLogo, NavLogoWrapper, ManageLinkSpan, NavMenuWrapper, NavMenu, NavItem, NavLink, NavLinkAdmin, NavItemAdmin } from "./NavbarElements";

const Navbar = ({ toggle, admin }) => {
    return (
        <Nav >
            <HamburgerDesktop />
            <HamburgerSmartphone toggle={toggle} />
            <NavContainer>
                <NavLogoWrapper >
                    <NavLogo to="/">Workout Generator</NavLogo>
                </NavLogoWrapper>
                <NavMenuWrapper>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="/generate">Let's Go</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/saved">Saved Workouts</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink to="/manage">Manage Exercises</NavLink>{admin && <ManageLinkSpan></ManageLinkSpan>}
                        </NavItem>
                    </NavMenu>
                    <NavSvgWrapper>
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#FA4D56" d="M47.2,-43.9C58.6,-35.8,63.6,-17.9,59,-4.6C54.5,8.8,40.4,17.5,29,32C17.5,46.4,8.8,66.6,-6.5,73.1C-21.8,79.6,-43.6,72.5,-48.2,58.1C-52.7,43.6,-40,21.8,-32.1,7.9C-24.1,-5.9,-21,-11.9,-16.4,-20C-11.9,-28.1,-5.9,-38.3,6,-44.3C17.9,-50.3,35.8,-52,47.2,-43.9Z" transform="translate(100 100)" />
                        </svg>
                    </NavSvgWrapper>
                    <NavItemAdmin>
                        <NavLinkAdmin to="/admin">Admin section</NavLinkAdmin>
                    </NavItemAdmin>
                </NavMenuWrapper>
            </NavContainer>
        </Nav>
    );
};

const mapStateToProp = ({ navbarIsOpen, admin }) => {
    return { navbarIsOpen, admin };
};


export default connect(mapStateToProp, null)(Navbar);
