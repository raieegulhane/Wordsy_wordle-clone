import { useGameContext } from "../../contexts";
import "./keyboard.css";

export const Keyboard = () => {
    const { gameState: { currLetterIndex }, gameDispatch } = useGameContext();


    const qwertyLayout = [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L",],
        ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACKSPACE"]
    ];

    const addLetterHandler = (key) => {
        if (currLetterIndex === 5) {
            return(gameDispatch({ type: "GENERATE_MESSAGE", payload: "The guess already has 5 letters"}));
        }
        gameDispatch({ type: "ADD_LETTER", payload: key });
    }

    const enterHandler = () => {

    }

    const keyPressHandler = (key) => {
        if (key === "ENTER") {
            return enterHandler();
        }

        return addLetterHandler(key);
    }
    
    return(
        <div className="kb-wr u_fx-col u_fx-al-cn">
        {
            qwertyLayout.map((row, i) => {
                return(
                    <div key={i} className="kb-row u_fx-row">
                    {
                        row.map((kbKey, j) => {
                            return(
                                <button 
                                    key={j} 
                                    className="kb-key u_hov-scale"
                                    onClick={() => keyPressHandler(kbKey)}
                                >
                                {
                                    kbKey === "BACKSPACE" ?
                                    <span className="material-icons kb-key-backspace">backspace</span> :
                                    <span>{kbKey}</span>
                                }
                                </button>
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