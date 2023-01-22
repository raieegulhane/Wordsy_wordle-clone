import "./modal.css";
import { ModalTemplate } from "./template";

export const InfoModal = () => {
    return(
        <div className="info-modal-wr">
            <header className="modal-header">
                <h1>How To Play</h1>
                <p>Guess the Wordle in 6 tries.</p>
            </header>

            <div className="modal-sec">
                <ul className="info-txt">
                    <li >Each guess must be a valid 5-letter word.</li>
                    <li >The color of the tiles will change to show how close your guess was to the word.</li>
                </ul>
            </div>

            <div className="modal-sec info-ex u_fx-col">
                <h3>Examples:</h3>
                <div className="info-ex-row u_fx-col">
                    <section className="info-ex-row-blocks u_fx-row">
                    {
                        ["W", "A", "T", "E", "R"].map((letter, i) => {
                            return(
                                <div 
                                    key={i}
                                    className={`wg-block info-ex-block u_fx-col u_fx-js-cn u_fx-al-cn ${i === 0 && "wg-block-green"}`}
                                >
                                    {letter}
                                </div>
                            )
                        })
                    }
                    </section>
                    <p><strong>W</strong> is in the word and in the correct spot.</p>
                </div>
                <div className="info-ex-row u_fx-col">
                    <section className="info-ex-row-blocks u_fx-row">
                    {
                        ["A", "P", "P", "L", "E"].map((letter, i) => {
                            return(
                                <div 
                                    key={i}
                                    className={`wg-block info-ex-block u_fx-col u_fx-js-cn u_fx-al-cn ${i === 3 && "wg-block-yellow"}`}
                                >
                                    {letter}
                                </div>
                            )
                        })
                    }
                    </section>
                    <p><strong>L</strong> is in the word but in the wrong spot.</p>
                </div>
                <div className="info-ex-row u_fx-col">
                    <section className="info-ex-blocks u_fx-row">
                    {
                        ["U", "A", "L", "U", "E"].map((letter, i) => {
                            return(
                                <div 
                                    key={i}
                                    className={`wg-block info-ex-block u_fx-col u_fx-js-cn u_fx-al-cn ${i === 1 && "wg-block-grey"}`}
                                >
                                    {letter}
                                </div>
                            )
                        })
                    }
                    </section>
                    <p><strong>A</strong> is not in the word in any spot.</p>
                </div>
            </div>
        </div>
    );
}