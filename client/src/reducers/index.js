import { combineReducers } from "redux";
import exercisesReducer from "./exercisesReducer";
import sessionsReducer from "./sessionsReducer";
import adminReducer from "./adminReducer";
import currentReducer from "./currentReducer";

export default combineReducers({
    exercises: exercisesReducer,
    sessions: sessionsReducer,
    currentInfo: currentReducer,
    admin: adminReducer
});