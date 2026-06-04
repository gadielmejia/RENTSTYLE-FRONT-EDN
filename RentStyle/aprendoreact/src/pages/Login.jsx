import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/login.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [darkMode, setDarkMode] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email === "admin@rentstyle.com" && password === "1234") {
            localStorage.setItem("role", "admin");
            window.location.href = "dashboard-admin.html";
            return;
        }

        localStorage.setItem("role", "user");
        window.location.href = "dashboard-user.html";
    };

    return (
     <>
         <Header />
           <nav className="login-nav">
                <div className="login-nav-inner">

                <h2 className="login-logo">RentStyle</h2>

                <div className="login-nav-links">
                    <button className="theme-toggle-nav"onClick={() => setDarkMode(!darkMode)}>
                    <div className="theme-icon-nav"></div>
                        </button>
                        <a href="/">Inicio</a>
                        <a href="/registro">Registrarse</a>
                    </div>
                </div>
            </nav>
            <div className={`login-page ${darkMode ? "dark" : ""}`}>
                <div className="login-left">
                        <span className="welcome-text">BIENVENIDO A</span>
                        <h1>RentStyle</h1>
                        <p>
                        Alquila lo que necesitas, cuando lo necesitas.
                        Moda, tecnología y más sin el compromiso de comprar.
                        </p>
                        <ul>
                        <li>✦ Catálogo actualizado</li>
                        <li>✦ Reservas flexibles</li>
                        <li>✦ Cancelación sin cargos</li>
                        </ul>
                    </div>
                <div className="login-right">
                    <div className="form-container">
                        <h2>Iniciar sesión</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Correo electrónico</label>
                                <input
                                    type="email"placeholder="ejemplo@correo.com"requiredvalue={email}onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group">
                                <label>Contraseña</label>
                                <input
                                    type="password"placeholder="Ingresa tu contraseña" requiredvalue={password}onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <button className="login-btn"type="submit">Ingresar</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;