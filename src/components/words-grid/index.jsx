import "./words-grid.css";
import { useGameContext } from "../../contexts";

export const WordsGrid = () => {
    const { gameState: { 
        guessesArray, 
        currGuessIndex, 
        currLetterIndex
    } } = useGameContext();

    return(
        <div className="wg-wr u_fx-col u_fx-al-cn">
        {
            guessesArray.map((guess, i) => {
                return(
                    <div key={i} className="wg-row u_fx-row">
                    {
                        guess.map(({ letter, color }, j) => {
                            return(
                                <div 
                                    key={j} 
                                    className={`
                                        wg-block u_fx-col u_fx-js-cn u_fx-al-cn 
                                        ${i === currGuessIndex && (j === currLetterIndex - 1 && currLetterIndex !== 0) ? "wg-block-current" : null}
                                        ${"wg-block-" + color}
                                    `}
                                >
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