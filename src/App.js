import React, {useEffect, useState} from "react";
import './App.css';

//Importing components
import Form from "./components/Form"
import ToDoList from "./components/ToDoList"

function App() {
  //states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //on initial load
  useEffect(() => {
    getDataLocal();
  }, []);

  //use effect
  useEffect(() => {
    filterHandler();
    saveDataLocal();
  }, [todos, status]);

  //functions
  const filterHandler = () => {
    switch(status){
      case 'done':
        setFilteredTodos(todos.filter(todo => todo.done === true));
        break;
      case 'notDone':
        setFilteredTodos(todos.filter(todo => todo.done === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  ///save data locally
  const saveDataLocal = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getDataLocal = () => {
    if(localStorage.getItem("todos") ===  null){
      localStorage.setItem("todos", JSON.stringify([]));
    }else{
      let localData = JSON.parse(localStorage.getItem("todos"));
      setTodos(localData);
    }
  }

  return (
    <div className="App">
      <header>
        <h1>To Do List</h1>
      </header>
      <Form 
            inputText={inputText} 
            todos={todos} 
            setTodos={setTodos} 
            setInputText={setInputText}
            setStatus={setStatus}      
      />
      <ToDoList 
            filteredTodos={filteredTodos} 
            setTodos={setTodos} 
            todos={todos}
      />
    </div>
  );
}

export default App;
