/* eslint-disable import/no-anonymous-default-export */
import { IS_ADMIN } from "../actions/types";

export default function (state = false, action) {
    switch (action.type) {
        case IS_ADMIN:
            return action.payload;
        default:
            return state;
    }
}