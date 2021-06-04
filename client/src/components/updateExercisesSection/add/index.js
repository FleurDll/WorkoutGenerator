import React, { useState } from 'react';
import { connect } from "react-redux";
import * as actions from "../../../actions";
import { AddContainer, FormWrapper, AddTitle, TitleSpan, AddSvgWrapper } from "./AddElements";
import Form from "./Form";
import Popover from "../../popover";

const Add = ({ admin }) => {
    const [showPopover, setShowPopover] = useState(false);

    const handleMouseEnter = (e) => {
        e.preventDefault();
        setShowPopover(true);

        setTimeout(() => {
            setShowPopover(false);
        }, 1000 * 5);
    };

    return (
        <AddContainer className="app">
            <AddSvgWrapper viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#FFAD0A" d="M32.4,-17.3C36.3,-12,29.8,0.7,22.6,12.3C15.5,23.8,7.7,34.2,-8,38.9C-23.8,43.5,-47.7,42.4,-59,28.4C-70.3,14.4,-69.1,-12.4,-57.2,-22.3C-45.3,-32.3,-22.6,-25.3,-4.2,-22.9C14.3,-20.5,28.6,-22.6,32.4,-17.3Z" transform="translate(100 100)" />
            </AddSvgWrapper>
            <FormWrapper onMouseEnter={handleMouseEnter}>
                <AddTitle>Add a <TitleSpan>new</TitleSpan> exercise</AddTitle>
                <Form />
            </FormWrapper>
            {showPopover && !admin && <Popover text="Sorry, you don't have access to this section." />}
        </AddContainer>
    );
};

const mapStateToProp = ({ admin }) => {
    return { admin };
};

export default connect(mapStateToProp, actions)(Add);
