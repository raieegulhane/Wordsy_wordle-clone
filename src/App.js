import { useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import { ToastContainer } from "react-toastify";
import { useGameContext } from "./contexts";
import { WordsGrid, Keyboard, Navbar, ModalTemplate, InfoModal, StatsModal } from "./components";
import "./styles/styles.css";

function App() {
  const [showModal, setShowModal] = useState({show: false, modal: ""});
  const [guessDist, setGuessDist] = useState([]);

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
    guessesArray,
    currGuessIndex,
    gameOver,
    outcome
  } } = useGameContext();

  useEffect(() => {
    setShowModal({ show: true, modal: "INFO"});
  }, []);

  useEffect(() => {
    const guessDistributionArr = [];

    for (let i = 0; i < guessesArray.length; i++) {
        let correctGuess = 0;
        let misplacedGuess = 0;
        let wrongGuess = 0
        for (let j = 0; j < guessesArray[i].length; j++) {
            if (guessesArray[i][j].color === "green") {
                correctGuess++;
            }
            if (guessesArray[i][j].color === "yellow") {
                misplacedGuess++;
            }
            if (guessesArray[i][j].color === "grey") {
                wrongGuess++;
            }
        }
        guessDistributionArr.push({ green: correctGuess, yellow: misplacedGuess, grey: wrongGuess });
    }

    setGuessDist(guessDistributionArr);
  }, [currGuessIndex]);

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
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="colored"
      />

      {
        showModal.show &&
        <ModalTemplate setShowModal={setShowModal}>
          { showModal.modal === "INFO" && <InfoModal /> } 
          { showModal.modal === "STAT" && <StatsModal gameStats={gameStats} guessDist={guessDist}/> }
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
