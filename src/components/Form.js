import React from "react";

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {text: inputText, done: false, id: Math.random() * 10000}
        ]);
    };
    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    return(
        <form>
            <input onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="done">Done</option>
                    <option value="notDone">Not done</option>
                </select>
            </div>
        </form>
    )
}

export default Form;