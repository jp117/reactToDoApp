import Header from "./components/Header";
import "./App.css";
import ToDo from "./components/ToDo";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Tasks from "./components/Tasks";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/tasks")
            .then((res) => res.json())
            .then((result) => {
                setTasks(result);
            });
    }, [setTasks]);

    const newTask = (props) => {
        fetch("http://localhost:3001/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                task: props,
            }),
        }).then((res) =>
            res.json().then((result) => {
                setTasks([...tasks, { id: result.id, task: result.task }]);
            })
        );
    };

    const deleteTask = (props) => {
        fetch(`http://localhost:3001/tasks/${props}`, {
            method: "DELETE",
        });
        setTasks(
            [...tasks].filter((task) => {
                return task.id !== props;
            })
        );
    };

    return (
        <div className='App'>
            <Container>
                <Header />
                <ToDo onSubmit={newTask} />
                {tasks && <Tasks tasks={tasks} onClick={deleteTask} />}
            </Container>
        </div>
    );
}

export default App;
