/* eslint-disable import/no-anonymous-default-export */
import { FETCH_SESSIONS } from "../actions/types";

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_SESSIONS:
            return action.payload;
        default:
            return state;
    }
}