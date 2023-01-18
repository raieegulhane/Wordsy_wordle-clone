import "./words-grid.css";
import { useGameContext } from "../../contexts";

export const WordsGrid = () => {
    const { gameState: { currWord, guessesArray } } = useGameContext();

    return(
        <div className="wg-wr u_fx-col u_fx-al-cn">
            <p>Current word: {currWord}</p>
        {
            guessesArray.map((guess, i) => {
                return(
                    <div className="wg-row u_fx-row">
                    {
                        guess.map(({ letter, color }, j) => {
                            return(
                                <div className="wg-block u_fx-col u_fx-js-cn u_fx-al-cn">
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