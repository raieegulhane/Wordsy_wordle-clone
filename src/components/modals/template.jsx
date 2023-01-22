import "./modal.css";

export const ModalTemplate = ({ children }) => {
    return(
        <div className="modal-wr u_fx-col u_fx-js-cn u_fx-al-cn">
            <div className="modal-cn">
                <button className="btn-modal-close">
                    <span class="material-icons">close</span>
                </button>
                
                <div>{children}</div>

                <div className="modal-sec u_fx-col u_fx-al-cn">
                    <button className="modal-btn">Start New Game</button>
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