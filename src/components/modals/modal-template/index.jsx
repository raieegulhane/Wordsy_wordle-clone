import { useGameContext } from "../../../contexts";
import "./modal-template.css";

export const ModalTemplate = ({ children, setShowModal }) => {
    const { gameDispatch } = useGameContext();

    const closeModalHandler = () => {
        setShowModal({ show: false, modal: "" });
    }

    const startNewGameHandler = () => {
        gameDispatch({ type: "INIT_GAME"});
        setShowModal({ show: false, modal: ""});
    }

    return(
        <div 
            className="modal-wr u_fx-col u_fx-js-cn u_fx-al-cn"
            onClick={closeModalHandler}
        >
            <div className="modal-cn" onClick={(e) => e.stopPropagation()}>
                <button 
                    className="btn-modal-close"
                    onClick={closeModalHandler}
                >
                    <span class="material-icons">close</span>
                </button>
                
                <div>{children}</div>

                <div className="modal-sec u_fx-col u_fx-al-cn">
                    <button 
                        className="modal-btn"
                        onClick={startNewGameHandler}
                    >
                        Start New Game
                    </button>
                </div>

                <footer className="modal-footer modal-sec u_fx-col u_fx-al-cn">
                    <section className="u_fx-row u_fx-al-cn">
                        <span class="material-icons code-icon">code</span>
                        <p>View <a className="modal-footer-link" href="https://github.com/raieegulhane/Wordle-clone.git" target="_blank">source code</a> on GitHub</p>
                    </section>
                    <p className="modal-footer-txt">Made with &lt;/&gt; by Raiee</p>
                </footer>
            </div>
        </div>
    );
}