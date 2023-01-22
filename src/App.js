import useLocalStorage from "use-local-storage";
import { useState, useEffect } from "react";
import "./styles/styles.css";
import { useGameContext } from "./contexts";
import { WordsGrid, Keyboard, Navbar, ModalTemplate, InfoModal, StatsModal } from "./components";

function App() {
  const [showModal, setShowModal] = useState({show: false, modal: ""});

  const browserDefaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage("wordle-theme", browserDefaultTheme ? "dark" : "light");

  const [gameStats, setGameStats] = useLocalStorage(
    "game-stats", 
    {
      gameNumber: 0, 
      gamesWon: 0, 
      lastGameStatus: "", 
      winStreak: 0
    }
  );

  const { gameState: { 
    gameOver,
    outcome
  } } = useGameContext();

  useEffect(() => {
    if (gameOver) {
        if (gameStats.lastGameStatus === "") {
            setGameStats({
                gameNumber: gameStats.gameNumber + 1,
                gamesWon: outcome === "WON" ? 1 : 0,
                lastGameStatus: outcome,
                winStreak: outcome === "WON" ? 1 : 0
            });
        } else {
            setGameStats({
                gameNumber: gameStats.gameNumber + 1,
                gamesWon: outcome === "WON" ? gameStats.gamesWon + 1 : gameStats.gamesWon,
                lastGameStatus: outcome,
                winStreak: outcome === "WON" ? gameStats.winStreak + 1 : 0
            });
        }
    }       
  }, [gameOver]);

  useEffect(() => {
    if (gameOver === true) {
      setTimeout(() => {
        setShowModal({ show: true, modal: "STAT"})
      }, 2000);
    }
  }, [gameOver]);

  return (
    <div className="App" data-theme={theme}>
      {
        showModal.show &&
        <ModalTemplate setShowModal={setShowModal}>
          { showModal.modal === "INFO" && <InfoModal /> } 
          { showModal.modal === "STAT" && <StatsModal gameStats={gameStats}/> }
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
