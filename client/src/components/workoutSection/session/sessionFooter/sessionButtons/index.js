import React from 'react';
import { PlayIcon, PauseIcon, SessionButtonWrapper } from "./SessionButtonsElements";

const SessionButtons = ({ start, setStart, pause, setPause, setShowFirstTimer }) => {
    const handlePlayClicked = (e) => {
        e.preventDefault();
        setStart(true);
        setShowFirstTimer(true);
    };

    const handlePauseClicked = (e) => {
        e.preventDefault();
        setPause(true);
    };

    const handleResumeClicked = (e) => {
        e.preventDefault();
        setPause(false);
    };

    return (
        <SessionButtonWrapper>
            {!start && <PlayIcon onClick={handlePlayClicked} />}
            {start && !pause && <PauseIcon onClick={handlePauseClicked} />}
            {start && pause && <PlayIcon onClick={handleResumeClicked} />}
        </SessionButtonWrapper>
    );
};

export default SessionButtons;
