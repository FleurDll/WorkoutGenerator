/* eslint-disable import/no-anonymous-default-export */
import { FETCH_EXERCISES } from "../actions/types";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_EXERCISES:
            return action.payload;
        default:
            return state;
    }
};