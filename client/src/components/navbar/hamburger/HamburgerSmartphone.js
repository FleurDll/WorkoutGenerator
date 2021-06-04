import React from 'react';
import { HamburgerSPContainer, HamburgerLogoSP } from "./HamburgerElements";

const HamburgerSmartphone = ({ toggle }) => {
    return (
        <HamburgerSPContainer onClick={toggle}>
            <HamburgerLogoSP />
        </HamburgerSPContainer>
    );
};

export default HamburgerSmartphone;
