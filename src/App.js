import useLocalStorage from "use-local-storage";
import { useState } from "react";
import "./styles/styles.css";
import { WordsGrid, Keyboard, Navbar } from "./components";
import { InfoModal } from "./components/modals";
import { ModalTemplate } from "./components/modals/template";

function App() {
  const browserDefaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage("wordle-theme", browserDefaultTheme ? "dark" : "light");

  const [showModal, setShowModal] = useState({show: false, modal: ""});

  return (
    <div className="App" data-theme={theme}>
      <ModalTemplate setShowModal={setShowModal}>
        <InfoModal />
      </ModalTemplate>

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
