import { words } from "../words";

const initialGameState = {
    currWord: "",
    guessesArray: [
        [{letter: "", color: ""}, {letter: "", color: ""}, {letter: "", color: ""}, {letter: "", color: ""}, {letter: "", color: ""}],
        [{letter: "", color: ""}, {letter: "", color: ""}, {letter: "", color: ""}, {letter: "", color: ""}, {letter: "", color: ""}],
        [{letter: "", color: ""}, {letter: "", color: ""}, {letter: "", color: ""}, {letter: "", color: ""}, {letter: "", color: ""}],
        [{letter: "", color: ""}, {letter: "", color: ""}, {letter: "", color: ""}, {letter: "", color: ""}, {letter: "", color: ""}],
        [{letter: "", color: ""}, {letter: "", color: ""}, {letter: "", color: ""}, {letter: "", color: ""}, {letter: "", color: ""}],
        [{letter: "", color: ""}, {letter: "", color: ""}, {letter: "", color: ""}, {letter: "", color: ""}, {letter: "", color: ""}]
    ],
    currGuess: "",
    currGuessIndex: 0,
    currLetterIndex: 0,
    gameOver: false,
    outcome: ""
}

const gameReducerFunction = (state, { type, payload }) => {
    const { currWord, guessesArray, currGuess, currGuessIndex, currLetterIndex } = state;

    switch (type) {
        case "INIT_GAME":
            const newWord = words[Math.floor(Math.random()*words.length)];
            console.log("IN_CASE_YOU_ARE_FRUSTRATED: ", newWord);
            
            return({
                currWord: newWord.toUpperCase(),
                guessesArray: initialGameState.guessesArray,
                currGuess: "",
                currGuessIndex: 0,
                currLetterIndex: 0,
                gameOver: false,
                outcome: ""
            });


        case "ADD_LETTER": 
            return({
                ...state,
                guessesArray: guessesArray.map(
                    (guess, i) => i === currGuessIndex ?
                    (guess.map((letterObj, j) => j === currLetterIndex ? { ...letterObj, letter: payload } : { ...letterObj })) : 
                    [ ...guess ]
                ),
                currGuess: currGuess + payload,
                currLetterIndex: currLetterIndex + 1
            });


        case "REMOVE_LETTER":
            return({
                ...state,
                guessesArray: guessesArray.map(
                    (guess, i) => i === currGuessIndex ?
                    (guess.map((letterObj, j) => j === currLetterIndex - 1 ? { letter: "", color: "" } : { ...letterObj })) :
                    [ ...guess ]
                ),
                currGuess: currGuess.slice(0, currGuess.length - 1),
                currLetterIndex: currLetterIndex - 1,
            });


        case "ADD_GUESS":
            return({
                ...state,
                guessesArray: guessesArray.map((guess, i) => {
                    if (i === currGuessIndex) {
                        const tempCurrWord = currWord.split("");
                        const tempCurrGuess = currGuess.split("");

                        const greenLetters = tempCurrGuess.map((letter, i) => {
                            if (tempCurrGuess[i] === tempCurrWord[i]) {
                                tempCurrWord.splice(i, 1, "_")
                                tempCurrGuess.splice(i, 1, "_");
                                return(true);
                            }
                            return(false);
                        })

                        const tempCurrWordNew = [...tempCurrWord];
                        const tempCurrGuessNew = [...tempCurrGuess];

                        const yellowLetters = tempCurrGuessNew.map((letter, i) => {
                            if (tempCurrGuessNew !== "_" && tempCurrWordNew.includes(letter)) {
                                const tempIndex = tempCurrWordNew.findIndex((item) => item === letter);
                                tempCurrWordNew.splice(tempIndex, 1, "_");
                                tempCurrGuessNew.splice(i, 1, "_");
                                return(true);
                            }
                            return(false);
                        })

                        return (guess.map((letterObj, j) => {
                            if (greenLetters[j]) {
                                return { ...letterObj, color: "green" }
                            }

                            if (yellowLetters[j]) {
                                return { ...letterObj, color: "yellow" }
                            }
                            
                            return { ...letterObj, color: "grey" }
                        }))
                    }  
                     
                    return [ ...guess ]
                }),
                currGuess: "",
                currGuessIndex: currGuessIndex + 1,
                currLetterIndex: 0,
            });

            
        case "RECORD_OUTCOME": 
            return(
                payload ? {
                    ...state,
                    gameOver: true,
                    outcome: "WON"
                } : {
                    ...state,
                    gameOver: true,
                    outcome: "LOST"
                }
            );


        default:
            return initialGameState;
    }
}

export { initialGameState, gameReducerFunction };