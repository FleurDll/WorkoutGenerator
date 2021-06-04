import React, { useState, useEffect } from 'react';
import * as actions from "../../../../actions";
import { connect } from "react-redux";
import { SessionBottomWrapper } from "./SessionFooterElements";
import SessionButtons from "./sessionButtons";
import SessionCountdown from "./sessionCountdown";
import SessionModal from "./sessionModal";

const SessionFooter = ({ durationList, exercisesNameList, defineCurrentExercise, start, setStart }) => {

    const [pause, setPause] = useState(false);
    const [index, setIndex] = useState(0);

    const [currentTimer, setCurrentTimer] = useState(60);
    const [showFirstCount, setShowFirstTimer] = useState(false);
    const [showSecondCount, setShowSecondTimer] = useState(false);

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (!start) return;
        if (index === durationList.length) setShowModal(true);
        defineCurrentExercise(exercisesNameList[index]);
        setCurrentTimer(durationList[index]);
        setShowFirstTimer(!showFirstCount);
        setShowSecondTimer(!showSecondCount);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [index, start]);

    return (
        <SessionBottomWrapper>
            {index !== durationList.length &&
                <>
                    <SessionCountdown
                        pause={pause}
                        setIndex={setIndex}
                        index={index}
                        currentTimer={currentTimer}
                        showFirstCount={showFirstCount}
                        showSecondCount={showSecondCount}
                    />
                    <SessionButtons
                        start={start}
                        setStart={setStart}
                        pause={pause}
                        setPause={setPause}
                        setShowFirstTimer={setShowFirstTimer}
                    />
                </>
            }
            <SessionModal showModal={showModal} setShowModal={setShowModal} />
        </SessionBottomWrapper>
    );
};

export default connect(null, actions)(SessionFooter);
