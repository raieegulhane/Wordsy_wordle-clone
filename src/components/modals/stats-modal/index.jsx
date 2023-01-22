import "./stats-modal.css";
import { useGameContext } from "../../../contexts";

export const StatsModal = ({ gameStats, guessDist }) => {
    const { gameNumber, gamesWon, winStreak } = gameStats;
    const { gameState: { currGuessIndex, gameOver, outcome }} = useGameContext();

    return(
        <div className="stats-modal-wr">
            <div className="stats-curr-game">
                {
                    gameOver &&
                    <p className="stats-outcome">
                    {
                        outcome === "WON" ?
                        "YOU WON!!!" :
                        "Better luck next time!"
                    }
                    </p>
                }

                <div className="stats-guess-dist-wr">
                    <h3 className="stats-heading">GUESS DISTRIBUTION</h3>
                    
                    <div className="guess-dist u_fx-col">
                    {
                        [1, 2, 3, 4, 5, 6].map((item, i) => {
                            return(
                                <div key={i} className="guess-dist-row u_fx-row u_fx-al-cn">
                                    <p>{item}</p>
                                    {
                                        i < currGuessIndex ?
                                        <div className="guess-dist-bar u_fx-row">
                                        {
                                            guessDist[i]["green"] > 0 &&
                                            Array(guessDist[i]["green"]).fill(0).map((block, j) => {
                                                return(<span key={`green-${j}`} className="guess-dist-block guess-dist-block-green"></span>);
                                            })
                                        }
                                        {
                                            guessDist[i]["yellow"] > 0 &&
                                            Array(guessDist[i]["yellow"]).fill(0).map((block, j) => {
                                                return(<span key={`yellow-${j}`} className="guess-dist-block guess-dist-block-yellow"></span>);
                                            })
                                        }
                                        {
                                            guessDist[i]["grey"] > 0 &&
                                            Array(guessDist[i]["grey"]).fill(0).map((block, j) => {
                                                return(<span key={`grey-${j}`} className="guess-dist-block guess-dist-block-grey"></span>);
                                            })
                                        }
                                        </div> :
                                        <span className="guess-dist-block-empty guess-dist-block-grey">0</span>
                                    }
                                </div>
                            );
                        })
                    }
                    </div>
                </div>
            </div>
            <div className="stats-display-wr modal-sec">
                <h3 className="stats-heading">STATISTICS</h3>
                    
                <div className="stats-display u_fx-row u_fx-js-cn">
                    <section className="u_fx-col u_fx-al-cn">
                        <p className="stats-number">{gameNumber}</p>
                        <p className="stats-number-txt">Games Played</p>
                    </section>
                    <section className="u_fx-col u_fx-al-cn">
                        <p className="stats-number">{gamesWon}</p>
                        <p className="stats-number-txt">Win %</p>
                    </section>
                    <section className="u_fx-col u_fx-al-cn">
                        <p className="stats-number">{winStreak}</p>
                        <p className="stats-number-txt">Winning Streak</p>
                    </section>
                </div>
            </div>
        </div>
    );
}