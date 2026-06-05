import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavAdmin from "../components/NavAdmin";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Dashboardad.css";
import User from "../pages/Dashboarduser";

function DashboardAdmin() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [history, setHistory] = useState([]);

  const [productForm, setProductForm] = useState({
    title: "",
    category: "",
    price: "",
    stock: "",
  });

  const [userForm, setUserForm] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem("products")) || [
        {
          id: 1,
          title: "Vestido Verde Jade",
          category: "Gala",
          price: 180000,
          stock: 4,
        },
      ];

    const storedUsers =
      JSON.parse(localStorage.getItem("users")) || [
        {
          id: 1,
          name: "Alejandra Ramirez",
          email: "aleja@rentstyle.com",
        },
      ];

    const storedHistory =
      JSON.parse(localStorage.getItem("history")) || [];

    setProducts(storedProducts);
    setUsers(storedUsers);
    setHistory(storedHistory);
  }, []);

  const saveData = (newProducts, newUsers, newHistory) => {
    localStorage.setItem("products", JSON.stringify(newProducts));
    localStorage.setItem("users", JSON.stringify(newUsers));
    localStorage.setItem("history", JSON.stringify(newHistory));
  };

  const addProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Date.now(),
      title: productForm.title,
      category: productForm.category,
      price: Number(productForm.price),
      stock: Number(productForm.stock),
    };

    const updatedProducts = [...products, newProduct];

    const updatedHistory = [
      `Producto agregado: ${newProduct.title}`,
      ...history,
    ];

    setProducts(updatedProducts);
    setHistory(updatedHistory);

    saveData(updatedProducts, users, updatedHistory);

    setProductForm({
      title: "",
      category: "",
      price: "",
      stock: "",
    });
  };

  const addUser = (e) => {
    e.preventDefault();

    const newUser = {
      id: Date.now(),
      name: userForm.name,
      email: userForm.email,
    };

    const updatedUsers = [...users, newUser];

    const updatedHistory = [
      `Usuario agregado: ${newUser.name}`,
      ...history,
    ];

    setUsers(updatedUsers);
    setHistory(updatedHistory);

    saveData(products, updatedUsers, updatedHistory);

    setUserForm({
      name: "",
      email: "",
    });
  };

  const deleteProduct = (id) => {
    const updatedProducts = products.filter(
      (product) => product.id !== id
    );

    const updatedHistory = [
      "Producto eliminado",
      ...history,
    ];

    setProducts(updatedProducts);
    setHistory(updatedHistory);

    saveData(updatedProducts, users, updatedHistory);
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter(
      (user) => user.id !== id
    );

    const updatedHistory = [
      "Usuario eliminado",
      ...history,
    ];

    setUsers(updatedUsers);
    setHistory(updatedHistory);

    saveData(products, updatedUsers, updatedHistory);
  };

  const logout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
    localStorage.removeItem("currentUser");
    navigate("/login");
    window.location.href = "/login";
  };
  const navigate = useNavigate();
  
  const goToProfile = () => {
  navigate("/profile");
};

  return (
    <>
            <nav className="app-nav">
        <div className="nav-inner">
          <Link to="" className="brand">
            RentStyle
          </Link>

          <div className="nav-actions">
            
            <button
              className="profile-btn"
              onClick={goToProfile}
            >
              Mi Perfil
            </button>

            <button onClick={logout}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </nav>
    <div className="dashboard-container">
      <div className="dashboard-header">
          <h1>Dashboard Administrador</h1>
          <p>Bienvenido {localStorage.getItem("name")}</p>
      </div>

      <div className="stats-grid">
          <div className="stat-card">
            <h3>Productos</h3>
            <p>{products.length}</p>
          </div>

          <div className="stat-card">
            <h3>Usuarios</h3>
            <p>{users.length}</p>
          </div>

          <div className="stat-card">
            <h3>Historial</h3>
            <p>{history.length}</p>
          </div>
      </div>

      <div className="dashboard-card">
          <h2>Agregar Producto</h2>
          <form className="form-container" onSubmit={addProduct}>
              <input type="text" placeholder="Nombre" value={productForm.title} onChange={(e) => 
                  setProductForm({...productForm, title: e.target.value,})} required />

              <input type="text" placeholder="Categoría" value={productForm.category} onChange={(e) =>
                  setProductForm({...productForm, category: e.target.value,})} required />

              <input type="number" placeholder="Precio" value={productForm.price} onChange={(e) =>
                  setProductForm({...productForm, price: e.target.value, })} required />

              <input type="number" placeholder="Stock" value={productForm.stock} onChange={(e) =>
                  setProductForm({...productForm, stock: e.target.value, })} required />

              <button className="btn btn-primary" type="submit">Guardar Producto</button>
          </form>
      </div>

      <div className="dashboard-card">
        <h2>Inventario</h2>

        <table className="data-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>{product.category}</td>
                <td>
                  $
                  {product.price.toLocaleString()}
                </td>
                <td>{product.stock}</td>

                <td>
                  <button className="btn btn-primary" onClick={() => deleteProduct(product.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="dashboard-card">
        <h2>Agregar Usuario</h2>

        <form
          className="form-container"
          onSubmit={addUser}
        >
          <input
            type="text"
            placeholder="Nombre"
            value={userForm.name}
            onChange={(e) =>
              setUserForm({
                ...userForm,
                name: e.target.value,
              })
            }
            required
          />

          <input
            type="email"
            placeholder="Correo"
            value={userForm.email}
            onChange={(e) =>
              setUserForm({
                ...userForm,
                email: e.target.value,
              })
            }
            required
          />

          <button className="btn btn-primary" type="submit">
            Guardar Usuario
          </button>
        </form>
      </div>

      <div className="dashboard-card">
        <h2>Usuarios</h2>

        <table className="data-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td>
                  <button className="btn btn-primary" onClick={() => deleteUser(user.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="dashboard-card">
        <h2>Historial</h2>

        {history.length === 0 ? (
          <p>No hay registros.</p>
        ) : (
          history.map((item, index) => (
            <div
              className="history-item"
              key={index}
            >
              {item}

            </div>
          ))
        )}
      </div>
    </div>
   <Footer/>
    </>
  );
}

export default DashboardAdmin;