import "./App.css";
import Header from "./components/Header/Header";
import Create from "./components/Create/Create";
import Filters from "./components/Filters/Filters";

function App() {
  return (
    <div className="content">
      <Header />
      <Create />
      <Filters/>
    </div>
  );
}

export default App;
