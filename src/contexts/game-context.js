import { createContext, useReducer, useContext } from "react";
import { gameReducerFunction, initialGameState } from "../reducers/game-reducer";

const GameContext = createContext(initialGameState);

const GameProvider = ({ children }) => {
    const [ gameState, gameDispatch ] = useReducer(gameReducerFunction, initialGameState);

    return (
        <GameContext.Provider value={{ gameState, gameDispatch }}>
            { children }
        </GameContext.Provider>
    )
}

const useGameContext = () => useContext(GameContext);

export { GameProvider, useGameContext };