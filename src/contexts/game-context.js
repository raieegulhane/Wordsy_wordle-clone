import { createContext, useReducer, useContext, useEffect } from "react";
import { gameReducerFunction, initialGameState } from "../reducers/game-reducer";
import { words } from "../words";

const GameContext = createContext(initialGameState);

const GameProvider = ({ children }) => {
    useEffect(() => {
        gameDispatch({ type: "INIT_GAME"});
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