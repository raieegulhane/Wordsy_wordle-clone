import { createContext, useReducer, useContext, useEffect } from "react";
import { gameReducerFunction, initialGameState } from "../reducers/game-reducer";
import { words } from "../words";

const GameContext = createContext(initialGameState);

const GameProvider = ({ children }) => {
    useEffect(() => {
        const currentWord = words[Math.floor(Math.random()*words.length)]
        gameDispatch({ type: "INIT_GAME", payload: currentWord });
        console.log(`IN_CASE_YOU_ARE_FURSTRATED: "${currentWord}"`);
    }, []);
    
    const [ gameState, gameDispatch ] = useReducer(gameReducerFunction, initialGameState);

    return (
        <GameContext.Provider value={{ gameState, gameDispatch }}>
            { children }
        </GameContext.Provider>
    )
}

const useGameContext = () => useContext(GameContext);

export { GameProvider, useGameContext };