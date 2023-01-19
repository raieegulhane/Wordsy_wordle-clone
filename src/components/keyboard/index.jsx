import { useEffect, useState } from "react";
import { useGameContext } from "../../contexts";
import { words } from "../../words";
import "./keyboard.css";

export const Keyboard = () => {
    const [greenKeysStr, setGreenKeysStr] = useState("");
    const [usedKeysStr, setUsedKeysStr] = useState("");
    const { 
        gameState: { 
            currWord, 
            guessesArray, 
            currGuess, 
            currGuessIndex, 
            currLetterIndex, 
            gameOver 
        }, 
    gameDispatch } = useGameContext();
    
    const qwertyLayout = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L",],
        ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"]
    ];

    const addLetterHandler = (key) => {
        if (currLetterIndex === 5) {
            return gameDispatch({ type: "GENERATE_MESSAGE", payload: "Guess can have 5 letters only"});
        }

        gameDispatch({ type: "ADD_LETTER", payload: key });
    }

    const removeLetterHandler = () => {
        if (currLetterIndex === 0) {
            return gameDispatch({ type: "GENERATE_MESSAGE", payload: "No letters"})
        }

        gameDispatch({ type: "REMOVE_LETTER" });
    } 

    const enterHandler = () => {
        if (currLetterIndex < 5) {
            return gameDispatch({ type: "GENERATE_MESSAGE", payload: "Not enough letters"});
        }

        if (!words.includes(currGuess.toLowerCase())) {
            return gameDispatch({ type: "GENERATE_MESSAGE", payload: "Not in word list"});
        }

        if (currGuess === currWord) {
            gameDispatch({ type: "RECORD_OUTCOME", payload: true })
        }

        if (currGuessIndex === 5) {
            gameDispatch({ type: "RECORD_OUTCOME", payload: false });
        }

        gameDispatch({ type: "ADD_GUESS" });
    }

    const keyPressHandler = (key) => {
        if (!gameOver) {
            if (key === "ENTER") {
                return enterHandler();
            }

            if (key === "BACKSPACE") {
                return removeLetterHandler();
            }
    
            return addLetterHandler(key);
        }
    }

    useEffect(() => {
        let greenKeys = "";
        let usedKeys = ""

        for (let i = 0; i < guessesArray.length; i++) {
            if (i < currGuessIndex) {
                for (let j = 0; j < guessesArray[i].length; j++) {
                    const {letter, color } = guessesArray[i][j];
                    if (color === "green") {
                        greenKeys += letter;
                    }
                    usedKeys += letter
                }
            }
        }

        setGreenKeysStr(greenKeys);
        setUsedKeysStr(usedKeys);
    }, [currGuessIndex]);

    return(
        <div className="kb-wr u_fx-col u_fx-al-cn">
        {
            qwertyLayout.map((row, i) => {
                return(
                    <div key={i} className="kb-row u_fx-row">
                    {
                        row.map((kbKey, j) => {
                            return(
                                <button 
                                    key={j} 
                                    className={`
                                        kb-key u_hov-scale 
                                        ${
                                            usedKeysStr.includes(kbKey) ? (
                                                currWord.includes(kbKey) ? (
                                                    greenKeysStr.includes(kbKey) ? "kb-key-green" : "kb-key-yellow"
                                                ) : "kb-key-used"
                                            ) : "kb-key-unused"
                                        }
                                    `}
                                    onClick={() => keyPressHandler(kbKey)}
                                >
                                {
                                    kbKey === "BACKSPACE" ?
                                    <span className="material-icons kb-key-backspace">backspace</span> :
                                    <span>{kbKey}</span>
                                }
                                </button>
                            );
                        })
                    }
                    </div>
                );
            })
        }
        </div>
    );
}