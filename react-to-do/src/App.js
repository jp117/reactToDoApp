import Header from "./components/Header"
import './App.css';
import ToDo from "./components/ToDo"
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

function App() {

  const [toDo, addToDo] = useState();

  return (
    <div className="App">
      <Container>
        <Header />
        <ToDo />
      </Container>
    </div>
  );
}

export default App;
