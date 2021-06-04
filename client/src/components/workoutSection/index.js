import React from 'react';
import { connect } from "react-redux";
import * as actions from "../../actions";
import Generate from './generate';
import Session from "./session";

const Workout = ({ currentSession }) => {
    if (!currentSession) return <div>Sorry</div>;

    return (
        <>
            {currentSession.length === 0 ?
                <Generate />
                :
                <Session />
            }
        </>
    );
};

const mapStateToProp = ({ currentInfo }) => {
    return {
        currentSession: currentInfo.currentSession
    };
};

export default connect(mapStateToProp, actions)(Workout);