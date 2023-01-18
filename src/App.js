import "./styles/styles.css";
import { WordsGrid, Keyboard, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <WordsGrid />
      <Keyboard />
    </div>
  );
}

export default App;
