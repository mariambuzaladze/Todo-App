import "./create.css";

export default function Create({userInput, setUserInput, addTodo,completed}) {
  const handleAddTodo = () => {
    if (userInput.trim() !== "") {
      addTodo(userInput,completed);
      setUserInput("");
    }
  };

  return (
    <div className="todoInput">
      <div onClick={handleAddTodo} className="circle"></div>
      <input
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
        type="text"
        placeholder="Create a new todo…"
      />
    </div>
  );
}
