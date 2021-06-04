import React from 'react';
import { connect } from "react-redux";
import * as actions from "../../../actions";
import { ViewContainer, ExerciseWrapper, ExerciseName, ExerciseDelete } from "./ViewElements";

const View = ({ exercises, deleteExercise, fetchExercises, admin }) => {
    const handleOnDeleteClick = (id) => {
        admin && deleteExercise(id);

        setTimeout(() => {
            fetchExercises();
        }, 500);
    };

    if (!exercises) return <h1>Sorry</h1>;

    exercises.sort(() => 0.5 - Math.random());

    const renderExercises = exercises.map((exercise, index) => {
        return (
            <ExerciseWrapper
                key={index}
                borderColor={exercise.bodyPart}
            >
                <ExerciseName >{exercise.name}</ExerciseName>
                <ExerciseDelete onClick={() => handleOnDeleteClick(exercise._id)} admin={admin.toString()} />
            </ExerciseWrapper>
        );
    });

    return (
        <ViewContainer>
            {renderExercises}
        </ViewContainer>
    );
};

const mapStateToProp = ({ exercises, admin }) => {
    return { exercises, admin };
};

export default connect(mapStateToProp, actions)(View);
