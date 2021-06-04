import React, { useState } from 'react';
import { connect } from "react-redux";
import * as actions from "../../../actions";
import Button from '../../button';
import { InputField, FormContainer } from "./AddElements";

const Form = ({ admin, saveExercise, fetchExercises }) => {
    const [inputs, setInputs] = useState({
        name: "",
        duration: "",
        series: "",
        bodyPart: "",
        type: ""
    });

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            name: inputs.name,
            duration: inputs.duration,
            series: inputs.series,
            bodyPart: inputs.bodyPart,
            type: inputs.type,
        };

        admin && saveExercise(payload);
        resetInputs();
        fetchExercises();
    };

    const resetInputs = () => {
        setInputs({
            name: "",
            duration: "",
            series: "",
            bodyPart: "",
            type: ""
        });
    };

    const inputOptions = {
        autoComplete: "off",
        required: "required"
    };

    if (!admin) {
        inputOptions['disabled'] = 'disabled';
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
            <InputField
                type="text"
                name="name"
                placeholder="Name"
                value={inputs.name}
                onChange={handleChange}
                {...inputOptions}
            />
            <InputField
                type="number"
                name="duration"
                placeholder="Duration"
                value={inputs.duration}
                onChange={handleChange}
                {...inputOptions}
            />
            <InputField
                type="number"
                name="series"
                placeholder="Series"
                value={inputs.series}
                onChange={handleChange}
                {...inputOptions}
            />
            <InputField
                type="text"
                name="bodyPart"
                placeholder="Bodypart"
                value={inputs.bodyPart}
                onChange={handleChange}
                {...inputOptions}
            />
            <InputField
                type="text"
                name="type"
                placeholder="Type"
                value={inputs.type}
                onChange={handleChange}
                {...inputOptions}
            />
            <Button handleOnClick={handleSubmit} text="Submit" color={admin ? "dark" : "disable"} />
        </FormContainer>
    );
};

const mapStateToProp = ({ admin }) => {
    return { admin };
};


export default connect(mapStateToProp, actions)(Form);
