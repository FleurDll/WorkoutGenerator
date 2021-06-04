import React from 'react';
import { connect } from "react-redux";
import * as actions from "../../../actions";
import createSession from "../../../hooks/createSession";
import Button from "../../button";
import { GenerateContainer, GenerateWrapper, GenerateTitle, TitleSpan, GenerateButtonWrapper, GenerateSvgWrapper1, GenerateSvgWrapper2 } from "./GenerateElements";

const Generate = ({ fetchCurrentSession, exercises }) => {
    const handleClickButton = () => {
        fetchCurrentSession(createSession(exercises));
    };

    return (
        <GenerateContainer>
            <GenerateSvgWrapper1>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FA4D56" d="M42.9,-58.9C56.3,-49.3,68.3,-37.7,73.2,-23.6C78,-9.5,75.7,7.2,71.7,24.5C67.7,41.8,62.2,59.8,49.9,69.7C37.7,79.6,18.9,81.3,4,75.8C-10.9,70.4,-21.8,57.7,-31.3,47C-40.8,36.2,-48.9,27.4,-57.2,15.4C-65.4,3.4,-73.9,-11.7,-72.8,-26.4C-71.8,-41.1,-61.3,-55.5,-47.6,-65.1C-33.9,-74.6,-16.9,-79.2,-1.1,-77.7C14.8,-76.2,29.5,-68.6,42.9,-58.9Z" transform="translate(100 100)" />
                </svg>
            </GenerateSvgWrapper1>
            <GenerateWrapper>
                <GenerateTitle>Generate a New <TitleSpan>Workout</TitleSpan></GenerateTitle>
                <GenerateButtonWrapper>
                    <Button handleOnClick={handleClickButton} text="Load" color="light" />
                </GenerateButtonWrapper>
            </GenerateWrapper>
            <GenerateSvgWrapper2>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" >
                    <path fill="#FFAD0A" d="M39.6,-57.6C51.5,-45.9,61.5,-34.6,65.6,-21.4C69.6,-8.3,67.8,6.6,62.5,19.5C57.2,32.5,48.5,43.6,37.5,48.8C26.5,53.9,13.3,53.1,-1.3,54.9C-15.8,56.7,-31.7,61,-40.7,55.3C-49.7,49.5,-51.9,33.5,-52.6,19.8C-53.4,6.1,-52.8,-5.4,-49.6,-16.5C-46.5,-27.5,-41,-38.1,-32.3,-50.9C-23.6,-63.7,-11.8,-78.7,1,-80.1C13.9,-81.5,27.7,-69.4,39.6,-57.6Z" transform="translate(100 100)" />
                </svg>
            </GenerateSvgWrapper2>
        </GenerateContainer>
    );
};

const mapStateToProp = ({ exercises }) => {
    return {
        exercises
    };
};

export default connect(mapStateToProp, actions)(Generate);
