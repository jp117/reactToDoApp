import React from "react";
import { useState } from "react";

function Task(props) {
    const handleDelete = (e) => {
        props.onClick(props.task.id);
    };
    return (
        <div className='task' key={props.id} onClick={handleDelete}>
            {props.task.task}
            <button className='deleteBtn'>Delete Task</button>
        </div>
    );
}

export default Task;
