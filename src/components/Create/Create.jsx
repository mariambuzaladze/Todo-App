import "./create.css";

export default function Create() {
  return (
    <div className="todoInput">
      <div className="circle"></div>
      <input type="text" placeholder="Create a new todo…" />
    </div>
  );
}
