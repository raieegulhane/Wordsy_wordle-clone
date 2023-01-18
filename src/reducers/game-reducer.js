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
}

const gameReducerFunction = (state, { type, payload }) => {
    switch (type) {
        case "INIT_GAME":
            return({
                ...state,
                currWord: payload.toUpperCase()
            });

        default:
            return initialGameState;
    }
}

export { initialGameState, gameReducerFunction };