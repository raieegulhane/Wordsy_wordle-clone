import "./words-grid.css";
import { useGameContext } from "../../contexts";

export const WordsGrid = () => {
    const { gameState: { currWord, guessesArray, currGuessIndex, currLetterIndex, inGameMessage} } = useGameContext();

    // console.log(guessesArray)
    return(
        <div className="wg-wr u_fx-col u_fx-al-cn">
            <p>Message: {inGameMessage}</p>
            <p>Current word: {currWord}</p>
            <p>Current Guess Index: {currGuessIndex}</p>
            <p>Current Letter Index: {currLetterIndex}</p>
        {
            guessesArray.map((guess, i) => {
                return(
                    <div key={i} className="wg-row u_fx-row">
                    {
                        guess.map(({ letter, color }, j) => {
                            return(
                                <div key={j} className="wg-block u_fx-col u_fx-js-cn u_fx-al-cn">
                                    {letter}
                                </div>
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