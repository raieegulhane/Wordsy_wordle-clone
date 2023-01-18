import "./keyboard.css";

export const Keyboard = () => {
    const qwertyLayout = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L",],
        ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"]
    ];
    
    return(
        <div className="kb-wr u_fx-col u_fx-al-cn">
        {
            qwertyLayout.map((row, i) => {
                return(
                    <div className="kb-row u_fx-row">
                    {
                        row.map((kbKey, j) => {
                            return(
                                <div className="kb-key u_fx-col u_fx-js-cn u_fx-al-cn u_hov-scale">
                                {
                                    kbKey === "BACKSPACE" ?
                                    <span className="material-icons kb-key-backspace">backspace</span> :
                                    <span>{kbKey}</span>

                                }
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