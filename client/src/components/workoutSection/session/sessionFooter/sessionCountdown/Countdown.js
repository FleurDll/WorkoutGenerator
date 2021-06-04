import React, { useRef, useState, useEffect } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import useSound from 'use-sound';
import countdownSound from "../../../../../sounds/countdown.mp3";

const Countdown = ({ duration, pause, handleComplete }) => {
    let volume;
    pause ? volume = 0 : volume = 0.5;

    const [playCountdownSound] = useSound(countdownSound, {
        volume
    });

    const countdownOptions = {
        isPlaying: true
    };

    if (pause) {
        countdownOptions["isPlaying"] = false
    }

    const RenderTime = ({ remainingTime }) => {

        useEffect(() => {
            remainingTime === 3 && playCountdownSound();
        }, [remainingTime]);

        const currentTime = useRef(remainingTime);
        const prevTime = useRef(null);
        const isNewTimeFirstTick = useRef(false);
        const [, setOneLastRerender] = useState(0);

        if (currentTime.current !== remainingTime) {
            isNewTimeFirstTick.current = true;
            prevTime.current = currentTime.current;
            currentTime.current = remainingTime;
        } else {
            isNewTimeFirstTick.current = false;
        }

        // force one last re-render when the time is over to tirgger the last animation
        if (remainingTime === 0) {
            setTimeout(() => {
                setOneLastRerender(val => val + 1);
            }, 20);
        }

        const isTimeUp = isNewTimeFirstTick.current;

        return (
            <div className="time-wrapper">
                <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
                    {remainingTime}
                </div>
                {prevTime.current !== null && (
                    <div
                        key={prevTime.current}
                        className={`time ${!isTimeUp ? "down" : ""}`}
                    >
                        {prevTime.current}
                    </div>
                )}
            </div>
        );
    };

    return (
        <CountdownCircleTimer
            {...countdownOptions}
            onComplete={handleComplete}
            duration={duration}
            strokeWidth="15"
            colors={[
                ['#FFAD0A', 0.33],
                ['#FABE4D', 0.33],
                ['#Fa4d56', 0.33],
            ]}
        >
            {RenderTime}
        </CountdownCircleTimer>
    );
};

export default Countdown;
