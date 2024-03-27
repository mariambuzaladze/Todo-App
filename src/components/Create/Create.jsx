import "./create.css";

export default function Create({theme,userInput, setUserInput, addTodo,completed}) {
  const handleAddTodo = () => {
    if (userInput.trim() !== "") {
      addTodo(userInput,completed);
      setUserInput("");
    }
  };

  return (
    <div className="todoInput" style={theme === "dark"? {backgroundColor:"#25273d"}:{}}>
      <div onClick={handleAddTodo} className="circle"></div>
      <input
        style={theme === "dark"? {backgroundColor:"#25273d"}:{}}
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
        onKeyPress={(event) => event.key === "Enter" ? handleAddTodo() : ""}
        type="text"
        placeholder="Create a new todo…"
      />
    </div>
  );
}
