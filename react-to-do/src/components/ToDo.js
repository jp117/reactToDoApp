import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";

const ToDo = (props) => {
    return (
        <div>
            <InputGroup>
                <Form.Control size='md' type='text' placeholder='Add new task' />
                <Button variant='outline-primary'>Add New Task</Button>{" "}
            </InputGroup>
        </div>
    );
};

export default ToDo;
