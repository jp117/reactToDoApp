import React from "react";

function Task(props) {
    return (
        <div className='task' key={props.id}>
            {props.task}
        </div>
    );
}

export default Task;
