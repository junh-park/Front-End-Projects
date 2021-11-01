import React, { useState, useEffect } from 'react';
import "./App.css";
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    useEffect(() => {
        loadLocalTodos();
    }, []);

    useEffect(() => {
        filterHandler();
        saveLocalTodos();
    }, [todos, status]);

    const filterHandler = () => {
        switch (status) {
            case "completed": setFilteredTodos(todos.filter(todo => todo.completed === true)); break;
            case "uncompleted": setFilteredTodos(todos.filter(todo => todo.completed === false)); break;
            default: setFilteredTodos(todos); break;
        }
    }

    const saveLocalTodos = () => {
        localStorage.setItem("todos", JSON.stringify(todos));
    };

    const loadLocalTodos = () => {
        if(localStorage.getItem("todos") === null) {
            localStorage.setItem("todos", JSON.stringify(todos));
        } else {
            setTodos(JSON.parse(localStorage.getItem("todos")));
        }
    }
    return (
        <div className='App'>
            <header>
                <h1>Todo list</h1>
            </header>
            <Form
                inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
                setStatus={setStatus}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
            />
        </div>
    );
}

export default App;

