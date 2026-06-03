import Header from "./Header";

function Nav () {
    return (
            <nav className="app-nav">
        <div className="nav-inner">

        <a href="/" className="brand">
                <Header />

        </a>

        <div className="nav-actions">

            <button onclick="toggleTheme()">
                Tema
            </button>

            <a href="login.html">
            Iniciar sesión
            </a>

            <a href="register.html">
            Registrarse
            </a>

        </div>

        </div>
    </nav>
    );
}
export default Nav;