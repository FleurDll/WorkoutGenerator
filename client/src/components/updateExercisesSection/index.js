import React from 'react';
import Add from "./add";
import ViewAllExercises from './viewAllExercise';
import { UpdateContainer, UpdateWrapper } from "./UpdateElements";

const UpdateExercisesSection = () => {
    return (
        <UpdateContainer>
            <UpdateWrapper>
                <Add />
                <ViewAllExercises />
            </UpdateWrapper>
        </UpdateContainer>
    );
};

export default UpdateExercisesSection;
