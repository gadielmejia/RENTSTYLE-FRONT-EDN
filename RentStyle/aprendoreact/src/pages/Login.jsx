import { useState } from "react";

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const toggleTheme = () => {
    console.log("Toggle theme");
};

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

    <div>

        <div className="form-container">
        <h2>Iniciar sesión</h2>

        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Correo</label>
            <input
                type="email"
                placeholder="Correo electrónico"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div className="form-group">
            <label>Contraseña</label>
            <input
                type="password"
                placeholder="Contraseña"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
        </div>

        <div className="form-footer">
            <button type="submit">Ingresar</button>
        </div>
        </form>

        <p id="loginMessage"></p>
    </div>
    </div>
);
}

export default Login