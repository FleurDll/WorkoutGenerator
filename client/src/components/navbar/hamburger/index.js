import React, { useState, useEffect } from 'react';
import { HamburgerContainer, HamburgerLogo } from "./HamburgerElements";

const HamburgerDesktop = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 50 });

    useEffect(() => {
        document.addEventListener("mousemove", onMouseMove);
        return () => {
            document.removeEventListener("mousemove", onMouseMove);
        }
    }, []);

    const onMouseMove = (e) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    return (
        <HamburgerContainer>
            <HamburgerLogo style={{ top: `${mousePosition.y}px` }} />
        </HamburgerContainer>
    );
};

export default HamburgerDesktop;
