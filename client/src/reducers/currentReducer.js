/* eslint-disable import/no-anonymous-default-export */
import { CURRENT_EXERCISE, CURRENT_SESSION } from "../actions/types";

const INITIAL_STATE = {
    currentSession: [],
    currentExercise: null
};


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case CURRENT_EXERCISE:
            return { ...state, currentExercise: action.payload };
        case CURRENT_SESSION:
            return { ...state, currentSession: action.payload };
        default:
            return state;
    }
};