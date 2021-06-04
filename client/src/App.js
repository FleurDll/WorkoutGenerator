import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";
import Navbar from "./components/navbar";
import UpdateExercisesSection from "./components/updateExercisesSection";
import Home from "./components/home";
import Workout from "./components/workoutSection";
import SavedWorkouts from "./components/savedWorkouts";
import AdminPath from "./components/adminPath";
import Sidebar from './components/sidebar';

const App = ({ fetchExercises }) => {
    const [isOpen, setIsOpen] = useState(false);

    const screenWidth = window.screen.width;

    useEffect(() => {
        fetchExercises();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <BrowserRouter>
                <Sidebar isOpen={isOpen} toggle={toggle} />
                <Navbar toggle={toggle} />
                <div style={{ marginLeft: screenWidth > 768 ? "75px" : "0", marginTop: screenWidth > 768 ? "0" : "80px" }}>
                    <Route path="/" component={Home} exact />
                    <Route path="/generate" component={Workout} />
                    <Route path="/saved" component={SavedWorkouts} />
                    <Route path="/manage" component={UpdateExercisesSection} />
                    <Route path="/admin" component={AdminPath} />
                </div>
            </BrowserRouter>
        </div>
    );

};


export default connect(null, actions)(App);