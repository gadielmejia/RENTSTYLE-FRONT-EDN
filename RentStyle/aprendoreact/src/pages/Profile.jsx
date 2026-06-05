import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/profile.css";

function Profile() {
  const navigate = useNavigate();

  const defaultAvatar =
    "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: defaultAvatar,
    role: "Usuario",
  });

  useEffect(() => {
    let currentUser =
      JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
      currentUser = {
        name: "Usuario RentStyle",
        email: "usuario@rentstyle.com",
        avatar: defaultAvatar,
        role: "Usuario",
      };

      localStorage.setItem(
        "currentUser",
        JSON.stringify(currentUser)
      );
    }

    setUser(currentUser);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (event) => {
      const updatedUser = {
        ...user,
        avatar: event.target.result,
      };

      setUser(updatedUser);

      localStorage.setItem(
        "currentUser",
        JSON.stringify(updatedUser)
      );
    };

    reader.readAsDataURL(file);
  };

  const saveProfile = () => {
    localStorage.setItem(
      "currentUser",
      JSON.stringify(user)
    );

    alert("Perfil actualizado");
  };

  const logout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <>
      <nav className="app-nav">
        <div className="nav-inner">
          <Link to="/" className="brand">
            RentStyle
          </Link>

          <div className="nav-actions">
            <Link to="/dashboarduser">
              Dashboard
            </Link>

            <button onClick={logout}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>

      <section className="profile-page">
        <div className="profile-card">
          <div className="profile-image-container">
            <img
              src={user.avatar}
              alt="Perfil"
            />
          </div>

          <input
            type="file"
            accept="image/*"
            id="avatarInput"
            onChange={handleImageChange}
          />

          <h2>{user.name}</h2>

          <p>{user.email}</p>

          <p>{user.role}</p>

          <div className="profile-form">
            <label>Nombre</label>

            <input
              type="text"
              value={user.name}
              onChange={(e) =>
                setUser({
                  ...user,
                  name: e.target.value,
                })
              }
            />

            <label>Correo</label>

            <input
              type="email"
              value={user.email}
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
            />

            <button onClick={saveProfile}>
              Guardar Cambios
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;