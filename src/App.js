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
    </div>
  );
}

export default App;
