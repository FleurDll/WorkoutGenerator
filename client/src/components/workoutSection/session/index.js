import React, { useState } from 'react';
import { connect } from "react-redux";
import * as actions from "../../../actions";
import createSession from "../../../hooks/createSession";
import createSuperset from "../../../hooks/createSuperset";
import createDurationList from "../../../hooks/createDurationList";
import createExercisesNameList from "../../../hooks/createExercisesNameList";
import { SessionContainer, ReloadIcon } from "./SessionElements";
import SessionBody from './sessionBody';
import SessionFooter from "./sessionFooter";

const Session = ({ currentSession, fetchCurrentSession, exercises }) => {
    const [start, setStart] = useState(false);
    const durationList = createDurationList(currentSession);
    const exercisesNameList = createExercisesNameList(currentSession);

    if (currentSession.length === 0) return <div>Sorry</div>;

    const totalDuration = durationList.reduce((a, b) => a + b);
    const supersetsList = createSuperset(currentSession, 2);

    const handleReloadClick = () => {
        fetchCurrentSession(createSession(exercises));
    };

    return (
        <SessionContainer>
            {!start && <ReloadIcon onClick={handleReloadClick} />}
            <SessionBody
                totalDuration={totalDuration}
                supersetsList={supersetsList}
                handleReloadClick={handleReloadClick}
                start={start}
            />
            <SessionFooter
                setStart={setStart}
                start={start}
                durationList={durationList}
                exercisesNameList={exercisesNameList}
            />
        </SessionContainer>
    );
};

const mapStateToProp = ({ currentInfo, exercises }) => {
    return { exercises, currentSession: currentInfo.currentSession };
};

export default connect(mapStateToProp, actions)(Session);
