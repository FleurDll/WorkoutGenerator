import axios from "axios";
import { FETCH_EXERCISES, FETCH_SESSIONS, CURRENT_SESSION, IS_ADMIN, CURRENT_EXERCISE } from "./types";

export const isAdmin = (input) => async dispatch => {
    const { data } = await axios.get("/api/admin-verification");

    let admin = false;
    data[0].password === input ? admin = true : admin = false;

    dispatch({ type: IS_ADMIN, payload: admin });
};

export const fetchExercises = () => async dispatch => {
    const res = await axios.get("/api/exercises");
    dispatch({ type: FETCH_EXERCISES, payload: res.data });
};

export const fetchSessions = () => async dispatch => {
    const res = await axios.get("/api/sessions");
    dispatch({ type: FETCH_SESSIONS, payload: res.data });
};

export const fetchCurrentSession = session => {
    return {
        type: CURRENT_SESSION,
        payload: session
    };
};

export const defineCurrentExercise = exercise => {
    return {
        type: CURRENT_EXERCISE,
        payload: exercise
    };
};

export const saveSession = payload => async dispatch => {
    console.log(payload);
    const res = await axios({
        url: '/api/sessions/save',
        method: 'POST',
        data: payload
    });
    console.log(res.status);
};

export const saveExercise = payload => async dispatch => {
    const res = await axios({
        url: '/api/exercises/save',
        method: 'POST',
        data: payload
    });
    console.log(res.status);
};

export const deleteExercise = id => async dispatch => {
    const res = await axios({
        url: '/api/exercises/delete',
        method: 'POST',
        data: id
    });
    console.log(res.status);
};

export const deleteSession = id => async dispatch => {
    const res = await axios({
        url: "api/sessions/delete",
        method: "POST",
        data: id
    });
    console.log(res.status);
};