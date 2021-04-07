import React from "react";
import { useState } from "react";

const ToDo = (props) => {
    const [task, setTask] = useState("");

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(task);
        setTask("");
    };
    return (
        <form action='' onSubmit={handleSubmit}>
            <input type='text' onChange={handleChange} value={task} required />
            <button>Add task</button>
        </form>
    );
};

export default ToDo;
