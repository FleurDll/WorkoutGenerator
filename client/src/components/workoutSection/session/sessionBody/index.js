import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from "react-redux";
import { SessionTitle, SessionInfo, RecoverySpan, TotalDuration, DurationSpan, Column, SessionSupersetWrapper, Superset, SupersetHeader, SupersetBody, SupersetText, Exercise, ExerciseName, ExerciseDuration, RecoveryDuration, RecoveryExample } from "./SessionBodyElements";

const SessionBody = ({ supersetsList, totalDuration, currentExercise }) => {
    const totalMinutes = Math.floor(totalDuration / 60);

    const renderedSupersets = supersetsList.map((superset, index) => {
        return (
            <Superset key={uuidv4()}>
                <SupersetHeader>
                    <SupersetText>superset {index + 1}</SupersetText>
                    <SupersetText>x3</SupersetText>
                </SupersetHeader>
                <SupersetBody>
                    <Exercise>
                        <ExerciseName style={{ color: currentExercise === superset[0].name && "#Fa4d56" }}>{superset[0].name}</ExerciseName>
                        <ExerciseDuration>{superset[0].duration}sec {superset[0].series === 2 && "x2"}</ExerciseDuration>
                    </Exercise>
                    <Exercise>
                        <ExerciseName style={{ color: currentExercise === superset[1].name && "#Fa4d56" }}>{superset[1].name}</ExerciseName>
                        <ExerciseDuration>{superset[1].duration}sec {superset[1].series === 2 && "x2"}</ExerciseDuration>
                    </Exercise>
                </SupersetBody>
            </Superset>
        );
    });

    return (
        <>
            <SessionTitle>Let's Go!</SessionTitle>
            <SessionInfo>
                <Column>
                    <RecoveryDuration>
                        <RecoverySpan>15sec</RecoverySpan> recovery time between each exercise.
                </RecoveryDuration>
                    <RecoveryExample>
                        Example: 60sec - 15sec - 60sec - 15sec ...
                </RecoveryExample>
                </Column>
                <Column>
                    <TotalDuration>{totalMinutes} <DurationSpan>minutes</DurationSpan></TotalDuration>
                </Column>
            </SessionInfo>
            <SessionSupersetWrapper>
                {renderedSupersets}
            </SessionSupersetWrapper>
        </>
    );
};

const mapStateToProp = ({ currentInfo }) => {
    return { currentExercise: currentInfo.currentExercise };
};

export default connect(mapStateToProp, null)(SessionBody);
