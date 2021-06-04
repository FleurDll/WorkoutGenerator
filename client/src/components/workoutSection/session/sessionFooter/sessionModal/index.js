import React, { useState } from 'react';
import { connect } from "react-redux";
import * as actions from "../../../../../actions";
import { ModalInputWrapper, ModalText, ModalTextSpan, ModalInput, ModalLink } from "./SessionModalElements";
import Modal from "../../../../modal";

const SessionModal = ({ setShowModal, showModal, currentSession, saveSession }) => {
    const [input, setInput] = useState("");
    const [inputRequired, setInputRequired] = useState(false);
    const [sessionSaved, setSessionSaved] = useState(false);

    const handleCloseModal = () => {
        setShowModal(false);
        window.location.reload();
    };

    const handleSaveClicked = (e) => {
        e.preventDefault();

        if (input.length !== 0) {
            const date = new Date().toLocaleDateString();

            const payload = {
                date: date,
                title: input,
                exercices: currentSession
            };

            saveSession(payload);
            setSessionSaved(true);
        } else {
            setInputRequired(true);
        }
    };

    const renderedTextModal = () => {
        return (
            <ModalInputWrapper>
                <ModalText>Give it a title and <ModalTextSpan>save</ModalTextSpan> it!</ModalText>
                <ModalInput
                    inputRequired={inputRequired.toString()}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Title" />
            </ModalInputWrapper>
        );
    };

    const renderedValidation = () => {
        return (
            <ModalInputWrapper>
                <ModalText>You will fint it in the <ModalLink to="/saved">Saved Workouts</ModalLink> section.</ModalText>
            </ModalInputWrapper>
        );
    };

    return (
        <Modal
            title={sessionSaved ? "Perfect!" : "Want to save this session?"}
            text={sessionSaved ? renderedValidation() : renderedTextModal()}
            onClose={handleCloseModal}
            show={showModal}
            buttonText={sessionSaved ? "Close" : "Save Session"}
            handeButtonClicked={sessionSaved ? handleCloseModal : handleSaveClicked}
            showCross={true}
        />
    );
};

const mapStateToProp = ({ sessions }) => {
    return { currentSession: sessions.currentSession };
};

export default connect(mapStateToProp, actions)(SessionModal);
