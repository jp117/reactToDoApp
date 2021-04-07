import Header from "./components/Header";
import "./App.css";
import ToDo from "./components/ToDo";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Tasks from "./components/Tasks";

function App() {
    return (
        <div className='App'>
            <Container>
                <Header />
                <ToDo />
                <Tasks tasks={tasks} />
            </Container>
        </div>
    );
}

const tasks = [
    {
        id: 1,
        task: "Do this task",
    },
    {
        id: 2,
        task: "Do that task",
    },
];

export default App;
