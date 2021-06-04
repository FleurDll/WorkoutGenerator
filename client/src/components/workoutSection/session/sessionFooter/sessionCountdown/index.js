import React from 'react';
import { SessionCountdownWrapper } from "./SessionCountdownElements";
import Countdown from "./Countdown";

const SessionCountdown = ({ setIndex, index, pause, currentTimer, showFirstCount, showSecondCount }) => {
    const handleComplete = () => {
        setIndex(index + 1);
    };

    return (
        <SessionCountdownWrapper>
            {showFirstCount &&
                <Countdown
                    handleComplete={handleComplete}
                    duration={currentTimer}
                    pause={pause}
                />
            }
            {showSecondCount &&
                <Countdown
                    handleComplete={handleComplete}
                    duration={currentTimer}
                    pause={pause}
                />
            }
        </SessionCountdownWrapper>
    );
};

export default SessionCountdown;
