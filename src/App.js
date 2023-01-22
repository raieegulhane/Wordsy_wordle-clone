import useLocalStorage from "use-local-storage";
import { useState } from "react";
import "./styles/styles.css";
import { WordsGrid, Keyboard, Navbar, ModalTemplate, InfoModal, StatsModal } from "./components";



function App() {
  const browserDefaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage("wordle-theme", browserDefaultTheme ? "dark" : "light");

  const [showModal, setShowModal] = useState({show: false, modal: ""});

  return (
    <div className="App" data-theme={theme}>
      {
        showModal.show &&
        <ModalTemplate setShowModal={setShowModal}>
          { showModal.modal === "INFO" && <InfoModal /> } 
          { showModal.modal === "STAT" && <StatsModal /> }
        </ModalTemplate>
      }
      
      <Navbar 
        theme={theme}
        setTheme={setTheme}
        setShowModal={setShowModal}
      />
      <WordsGrid />
      <Keyboard />

      
    </div>
  );
}

export default App;
