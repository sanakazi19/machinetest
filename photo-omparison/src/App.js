import "./App.css";
import List from "./components/List";
import Comparison from "./components/Comparison";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="header">
          <h3>Photo Listing</h3>
        </div>
        <div className="list">
          <List />
        </div>
        <div className="comparison">
          <Comparison />
        </div>
      </div>
    </div>
  );
}

export default App;
