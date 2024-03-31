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
        <small>
          <a href="https://github.com/emijsho/sc-react-dictionary">
            Open Source Code
          </a>{" "}
          by Emily Short. Hosted by{" "}
          <a href="https://dictionary-react-ejs.netlify.app/">Netlify.</a>
        </small>
      </footer>
    </div>
  );
}

export default App;
