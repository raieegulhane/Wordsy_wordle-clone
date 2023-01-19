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
    inGameMessage: "",
    gameOver: false
}

const gameReducerFunction = (state, { type, payload }) => {
    const { currWord, guessesArray, currGuess, currGuessIndex, currLetterIndex } = state;

    switch (type) {
        case "INIT_GAME":
            return({
                ...state,
                currWord: payload.toUpperCase()
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
                guessesArray: guessesArray.map(
                    (guess, i) => i === currGuessIndex ?
                    (guess.map((letterObj, j) => {
                        if (currWord.includes(letterObj.letter)) {
                            if (currWord[j] === currGuess[j]) {
                                return { ...letterObj, color: "green" }
                            }
                            return { ...letterObj, color: "yellow" }
                        }
                        return { ...letterObj, color: "grey"}
                    })) : 
                    [ ...guess ]
                ),
                currGuess: "",
                currGuessIndex: currGuessIndex + 1,
                currLetterIndex: 0,
            });

        case "GENERATE_MESSAGE":
            return({
                ...state,
                inGameMessage: payload
            });

        case "RECORD_OUTCOME": 
            return(
                payload ? {
                    ...state,
                    inGameMessage: "YOU WON!!",
                    gameOver: true
                } : {
                    ...state,
                    inGameMessage: "Better luck next time",
                    gameOver: true
                }
            );

        default:
            return initialGameState;
    }
}

export { initialGameState, gameReducerFunction };