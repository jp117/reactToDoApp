import React from "react";
import Task from "./Task";

const Tasks = (props) => {
    const tasks = props.tasks;
    return (
        <div className='tasks'>
            {(tasks || []).map((task) => (
                <Task key={task.id} task={task} onClick={props.onClick} />
            ))}
        </div>
    );
};

export default Tasks;
