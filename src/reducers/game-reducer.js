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
    currGuessIndex: 0,
    currLetterIndex: 0,
    inGameMessage: ""
}

const gameReducerFunction = (state, { type, payload }) => {
    const { guessesArray, currGuessIndex, currLetterIndex } = state;

    switch (type) {
        case "INIT_GAME":
            return({
                ...state,
                currWord: payload.toUpperCase()
            });

        case "ADD_LETTER": 
            return({
                ...state,
                guessesArray: [ ...guessesArray ].map(
                    (guess, i) => i === currGuessIndex ?
                    (guess.map((letterObj, j) => j === currLetterIndex ? { ...letterObj, letter: payload } : { ...letterObj })) : 
                    [ ...guess ]
                ),
                currLetterIndex: currLetterIndex < 5 ? currLetterIndex + 1 : 0
            })

        case "GENERATE_MESSAGE":
            return({
                ...state,
                inGameMessage: payload
            });

        default:
            return initialGameState;
    }
}

export { initialGameState, gameReducerFunction };