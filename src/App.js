import useLocalStorage from "use-local-storage";
import "./styles/styles.css";
import { WordsGrid, Keyboard, Navbar } from "./components";

function App() {
  const browserDefaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage("wordle-theme", browserDefaultTheme ? "dark" : "light");

  return (
    <div className="App" data-theme={theme}>
      <Navbar 
        theme={theme}
        setTheme={setTheme}
      />
      <WordsGrid />
      <Keyboard />

      <footer className="footer">
        <p>Made with &lt;/&gt; by Raiee</p>
        <p>View <a className="footer-link" href="https://github.com/raieegulhane/Wordle-clone.git" target="_blank">source code</a></p>
      </footer>
    </div>
  );
}

export default App;
