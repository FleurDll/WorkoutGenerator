import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from "react-redux";
import * as actions from "../../actions";
import { SavedContainer, SavedTitle, PlayIcon, DeleteIconWrapper, PlayIconWrapper, DeleteIcon, BodyModalWrapper, BorderAnimation, SavedItemsWrapper, SavedItem, ItemTitle, ItemDate, SvgWrapper } from "./SavedElements";
import Modal from "../modal";

const SavedWorkouts = ({ fetchSessions, fetchCurrentSession, deleteSession, sessions }) => {
    const [sessionState, setSessionState] = useState({
        isClicked: false,
        session: null
    });

    useEffect(() => {
        fetchSessions();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (!sessions) return <div>Sorry</div>;

    const renderedSessions = sessions.map(session => {
        return (
            <SavedItemsWrapper key={uuidv4()}>
                <SavedItem
                    onClick={() => {
                        setSessionState({
                            isClicked: true,
                            session
                        });
                    }}
                >
                    <ItemTitle>{session.title}</ItemTitle>
                    <ItemDate>{session.date}</ItemDate>
                </SavedItem>
                <BorderAnimation></BorderAnimation>
            </SavedItemsWrapper>
        );
    });

    const handlePlayClicked = () => {
        fetchCurrentSession(sessionState.session.exercices);
    };

    const handleDeleteClicked = () => {
        deleteSession(sessionState.session._id);
        window.location.reload();
    };

    const renderedTextModal = () => {
        return (
            <BodyModalWrapper>
                <PlayIconWrapper to="/generate">
                    Load<PlayIcon onClick={handlePlayClicked} />
                </PlayIconWrapper>
                <DeleteIconWrapper>
                    Delete<DeleteIcon onClick={handleDeleteClicked} />
                </DeleteIconWrapper>
            </BodyModalWrapper>
        );
    };

    return (
        <SavedContainer>
            <SavedTitle>Saved Workouts</SavedTitle>
            <SavedItemsWrapper>
                {renderedSessions}
            </SavedItemsWrapper>

            <SvgWrapper position="right">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFAD0A" d="M43.7,-59.1C54.7,-52.2,60.5,-36.8,61.1,-22.7C61.8,-8.6,57.4,4.3,51.5,15C45.6,25.6,38.2,34,29.3,42.9C20.5,51.8,10.2,61.2,-2.1,64.1C-14.4,66.9,-28.7,63.1,-44.3,56.4C-59.8,49.7,-76.5,40,-83.3,25.6C-90.1,11.1,-86.9,-8,-76.4,-20C-65.9,-32.1,-48.1,-36.9,-34.2,-42.9C-20.2,-48.8,-10.1,-55.9,3.1,-60.2C16.3,-64.5,32.7,-66,43.7,-59.1Z" transform="translate(100 100)" />
                </svg>
            </SvgWrapper>

            <Modal
                title="What are you up to?"
                text={renderedTextModal()}
                onClose={() => setSessionState({ isClicked: false })}
                show={sessionState.isClicked}
                buttonText="Close"
                handeButtonClicked={() => setSessionState({ isClicked: false })}
            />

        </SavedContainer>
    );
};

const mapStateToProp = ({ sessions }) => {
    return {
        sessions
    };
};

export default connect(mapStateToProp, actions)(SavedWorkouts);
