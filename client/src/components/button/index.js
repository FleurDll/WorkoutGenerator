import React from 'react';
import { StyledButton } from "./ButtonElements";

const Button = ({ text, color, handleOnClick }) => {

    let backroundColor, hoverColor;

    switch (color) {
        case "light":
            backroundColor = "#Fa4d56";
            hoverColor = "#121212";
            break;
        case "dark":
            backroundColor = "#121212";
            hoverColor = "#Fa4d56";
            break;
        case "disable":
            backroundColor = "grey";
            hoverColor = "grey";
            break;
        default:
            console.log("error color");
    }

    return (
        <StyledButton
            onClick={handleOnClick}
            backroundColor={backroundColor}
            hoverColor={hoverColor}
            color={color}
        >
            {text}
        </StyledButton>
    );
};

export default Button;
