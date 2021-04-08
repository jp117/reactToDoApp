import React from "react";
import { useState } from "react";

function Task(props) {
    const handleDelete = (e) => {
        props.onClick(props.task.id);
    };
    return (
        <div className='task' key={props.id}>
            {props.task.task}
            <button className='deleteBtn' onClick={handleDelete}>
                Delete Task
            </button>
        </div>
    );
}

export default Task;
