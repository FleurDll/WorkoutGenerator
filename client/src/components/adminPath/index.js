import React, { useState } from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import * as actions from "../../actions";
import { AdminContainer, AdminForm, AdminWrapper, AdminSvgWrapper1, AdminSvgWrapper2, AdminMsg, AdminMsgSpan, AdminMsgWrapper, AdminInput } from "./AdminPathElements";
import Modal from "../modal";
import Button from '../button';

const AdminPath = ({ isAdmin, admin }) => {
    const [input, setInput] = useState("");
    const [showModal, setShowModal] = useState(false);

    let history = useHistory();

    const handleClickButton = (e) => {
        e.preventDefault();
        isAdmin(input);
        setShowModal(true);
        setInput("");
    };

    return (
        <AdminContainer>
            <AdminSvgWrapper1>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FA4D56" d="M36.8,-31C53.2,-20.4,75.8,-10.2,74.8,-1.1C73.7,8.1,49,16.1,32.5,22.4C16.1,28.6,8.1,33.1,-3.1,36.1C-14.2,39.2,-28.4,40.9,-34.9,34.7C-41.3,28.4,-40.1,14.2,-43.2,-3.2C-46.4,-20.5,-54,-41.1,-47.5,-51.6C-41.1,-62.1,-20.5,-62.7,-5.2,-57.5C10.2,-52.4,20.4,-41.5,36.8,-31Z" transform="translate(100 100)" />
                </svg>
            </AdminSvgWrapper1>
            <AdminWrapper>
                <AdminMsgWrapper>
                    <AdminMsg>
                        To enable the management of sports sessions,
                </AdminMsg>
                    <AdminMsg>
                        Enter the<AdminMsgSpan>admin </AdminMsgSpan>password:
                </AdminMsg>
                </AdminMsgWrapper>
                <AdminForm>
                    <AdminInput
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        placeholder="password"
                        type="password"
                        autoComplete="new-password" />
                    <Button handleOnClick={handleClickButton} text="Submit" color="light" />
                </AdminForm>
            </AdminWrapper>
            <AdminSvgWrapper2>
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#FFAD0A" d="M27.4,-17.7C33,-6.1,33.3,6.6,27.9,23.2C22.4,39.7,11.2,60,-8.5,64.9C-28.2,69.8,-56.3,59.3,-62,42.6C-67.7,26,-50.9,3.1,-36.8,-13.3C-22.7,-29.8,-11.4,-39.9,-0.2,-39.7C10.9,-39.6,21.8,-29.2,27.4,-17.7Z" transform="translate(100 100)" />
                </svg>
            </AdminSvgWrapper2>
            <Modal
                title={admin ? "Great!" : "Oh no"}
                text={admin ? "You can now manage all the exercises." : "Looks like you are not the admin..."}
                onClose={() => setShowModal(false)}
                show={showModal}
                buttonText="Close"
                handeButtonClicked={() => history.push("/manage")}
            />
        </AdminContainer>
    );
};

const mapStateToProp = ({ admin }) => {
    return {
        admin
    };
};

export default connect(mapStateToProp, actions)(AdminPath);
