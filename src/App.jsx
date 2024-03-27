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
  const [theme,setTheme] = useState("ligth")

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

  const clearCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };
  
  const changeTheme = ()=>{
    if(theme==="ligth"){
      setTheme("dark");
    }else{
      setTheme("ligth");
    }
  }

  return (
    <div className="content">
      <Header changeTheme={changeTheme} theme={theme}/>
      <div className="container">
        <Create theme={theme} userInput={userInput} setUserInput={setUserInput} addTodo={addTodo} />
        <div className="todos">
          {filterTodos(todos).map(todo => (
            <Todo
            theme={theme}
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              removeTodo={removeTodo}
            />
          ))}
          <div className="info" style={theme === "dark"? {backgroundColor:"#25273d"}:{}}>
            <p className="info-text">{todos.filter(todo => !todo.completed).length} items left</p>
            <p className="info-text" onClick={clearCompletedTodos}>Clear Completed</p>
          </div>
        </div>
        <Filters theme={theme} filter={filter} setFilter={setFilter} />
      </div>
      <Reorder />
    </div>
  );
}

export default App;
