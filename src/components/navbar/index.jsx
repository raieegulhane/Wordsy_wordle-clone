import "./navbar.css";

export const Navbar = ({ theme, setTheme }) => {
    const toggleThemeHandler = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }
    return(
        <nav className="nav-wr u_fx-row u_fx-js-sb">
            <h1 className="nav-logo">Wordle</h1>
            <section className="nav-pills-wr u_fx-row">
                <button className="nav-pill u_hov-scale">
                    <span className="material-icons">help</span>
                </button>
                <button className="nav-pill u_hov-scale">
                    <span className="material-icons">leaderboard</span>
                </button>
                <button 
                    className="nav-pill u_hov-scale"
                    onClick={toggleThemeHandler}
                >
                    {
                        theme === "dark" ? 
                        <span className="material-icons">light_mode</span> :
                        <span className="material-icons">dark_mode</span>
                    }
                </button>
            </section>
        </nav>
    );
}