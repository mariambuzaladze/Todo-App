import React, { useState } from 'react';
import Header from "./components/Header/Header";
import Create from "./components/Create/Create";
import Filters from "./components/Filters/Filters";
import Reorder from "./components/Reorder/Reorder";
import Todo from "./components/Todo/Todo";
import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (todoText) => {
    setTodos([...todos, { id: Date.now(), text: todoText, completed: false }]);
  };

  const removeTodo = (todoId) => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const toggleTodo = (todoId) => {
    setTodos(todos.map(todo => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }));
  };

  const filterTodos = (todos) => {
    switch (filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  return (
    <div className="content">
      <Header />
      <div className="container">
        <Create userInput={userInput} setUserInput={setUserInput} addTodo={addTodo} />
        <div className="todos">
          {filterTodos(todos).map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          ))}
          <div className="info">
            <p className="info-text">{todos.filter(todo => !todo.completed).length} items left</p>
            <p className="info-text">Clear Completed</p>
          </div>
        </div>
        <Filters filter={filter} setFilter={setFilter} />
      </div>
      <Reorder />
    </div>
  );
}

export default App;
