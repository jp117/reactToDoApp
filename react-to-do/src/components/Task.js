import React from "react";
import DeleteButton from "./DeleteButton";

function Task(props) {
    return (
        <div className='task' key={props.id}>
            {props.task}
            <DeleteButton value='Delete Task' />
        </div>
    );
}

export default Task;
