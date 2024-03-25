import "./App.css";
import Header from "./components/Header/Header";
import Create from "./components/Create/Create";
import Filters from "./components/Filters/Filters";
import Reorder from "./components/Reorder/Reorder";

function App() {
  return (
    <div className="content">
      <Header />
      <Create />
      <Filters/>
      <Reorder/>
    </div>
  );
}

export default App;
