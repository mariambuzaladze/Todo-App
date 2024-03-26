import "./App.css";
import Header from "./components/Header/Header";
import Create from "./components/Create/Create";
import Filters from "./components/Filters/Filters";
import Reorder from "./components/Reorder/Reorder";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <div className="content">
      <Header />
      <div className="container">
      <Create />
      <div className="todos">
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <Todo/>
        <div className="info">
          <p className="info-text">5 items left</p>
          <p className="info-text">Clear Completed</p>
        </div>
      </div>
      <Filters/>
      </div>
      <Reorder/>
    </div>
  );
}

export default App;
