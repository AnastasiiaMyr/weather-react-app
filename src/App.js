import Weather from "./Weather";
import "./App.css";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {" "}
          <Weather defaultCity="Kyiv" />
        </div>
      </header>
    </div>
  );
}

export default App;
