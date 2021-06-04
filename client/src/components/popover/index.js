import React from 'react';
import { PopoverContainer, PopoverText } from "./PopoverElements";

const Popover = ({ text }) => {
    return (
        <PopoverContainer>
            <PopoverText>
                {text}
            </PopoverText>
        </PopoverContainer>
    );
};

export default Popover;
