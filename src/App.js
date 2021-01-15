//import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import Form from "./components/Form/Form";
import {nanoid} from "nanoid";

function App(props) {
  const [task, setTask] = useState(props.tasks);

  function addTask(name) {
    const newTask = {
      id: `todo-${nanoid()}`,
      name: name,
      completed: false
    };
    setTask([...task, newTask]);
  }

  return (
    <div className="App">
      <Form addTask={addTask}/>
    </div>
  );
}

export default App;
