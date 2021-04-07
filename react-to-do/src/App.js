import Header from "./components/Header";
import "./App.css";
import ToDo from "./components/ToDo";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Tasks from "./components/Tasks";

function App() {
    const [task, setTask] = useState(tasks);
    const newTask = (props) =>
        setTask(
            tasks.push({
                id: tasks.length + 1,
                task: props,
            })
        );
    return (
        <div className='App'>
            <Container>
                <Header />
                <ToDo onSubmit={newTask} />
                <Tasks tasks={tasks} />
            </Container>
        </div>
    );
}

const tasks = [
    {
        id: 1,
        task: "Add ability to delete tasks as they're completed",
    },
    {
        id: 2,
        task: "Configure to use JSon file or a DB",
    },
];

export default App;
