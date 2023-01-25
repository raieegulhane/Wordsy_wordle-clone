import "./navbar.css";

export const Navbar = ({ theme, setTheme, setShowModal }) => {
    const toggleThemeHandler = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    
    return(
        <nav className="nav-wr u_fx-row u_fx-js-sb u_fx-al-cn">
            <h1 className="nav-logo">Wordle</h1>
            <section className="nav-pills-wr u_fx-row u_fx-al-cn">
                <button 
                    className="nav-pill u_hov-scale"
                    onClick={() => setShowModal({ show: true, modal: "INFO"})}
                >
                    <span className="material-icons nav-pill-icon">help</span>
                </button>
                <button 
                    className="nav-pill u_hov-scale"
                    onClick={() => setShowModal({ show: true, modal: "STAT"})}
                >
                    <span className="material-icons nav-pill-icon">leaderboard</span>
                </button>
                <button 
                    className="nav-pill"
                    onClick={toggleThemeHandler}
                >
                    {
                        theme === "dark" ? 
                        <span className="material-icons nav-pill-icon btn-theme">light_mode</span> :
                        <span className="material-icons nav-pill-icon btn-theme">dark_mode</span>
                    }
                </button>             
            </section>
        </nav>
    );
}