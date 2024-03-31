import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary-React-EJS</header>
        <main>
          <Dictionary />
        </main>
      </div>
      <footer className="App-footer">
        <small>Coded by Emily Short</small>
      </footer>
    </div>
  );
}

export default App;
