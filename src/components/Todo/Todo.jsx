import "./todo.css";
import Cross from "/images/icon-cross.svg";
import Check from "/images/icon-check.svg";

export default function Todo({ todo, toggleTodo, removeTodo }) {
  return (
    <div className="todo">
      <div
        onClick={() => toggleTodo(todo.id)}
        className="circle"
        style={{
          backgroundImage: todo.completed
            ? `url(${Check}), linear-gradient(135deg, #5df, #c058f3)`
            : "",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      ></div>
      <p className={todo.completed ? "todo-text checked" : "todo-text"}>
        {todo.text}
      </p>
      <img
        onClick={() => removeTodo(todo.id)}
        className="cross"
        src={Cross}
        alt="icon cross"
      />
    </div>
  );
}

