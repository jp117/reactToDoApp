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
        task: "Add functionality to add tasks with form",
    },
    {
        id: 2,
        task: "Add ability to delete tasks as they're completed",
    },
    {
        id: 3,
        task: "Configure to use JSon file or a DB",
    },
];

export default App;
