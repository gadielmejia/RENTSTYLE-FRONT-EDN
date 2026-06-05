import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import vestidoverde from "../assets/vestidoverde.jpg";
import vestidonegro from "../assets/vestidonregro.jpg";
import "../styles/cart.css";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];

    updatedCart.splice(index, 1);

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const checkout = () => {
    alert("Pedido realizado exitosamente.");

    localStorage.removeItem("cart");

    setCart([]);
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const toggleTheme = () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <>
      <nav className="app-nav">
        <div className="nav-inner">
          <Link
            to="/dashboarduser"
            className="brand"
          >
            RentStyle
          </Link>

          <div className="nav-actions">
            <Link to="/dashboarduser">
              Catálogo
            </Link>

            <Link to="/profile">
              Perfil
            </Link>

            <button onClick={toggleTheme}>
              Tema
            </button>
          </div>
        </div>
      </nav>

      <section className="products-section">
        <div className="section-header">
          <h2>Mi Carrito</h2>

          <p>
            Revisa tus prendas seleccionadas antes
            de finalizar el pedido.
          </p>
        </div>

        <div className="products-grid">
          {cart.length === 0 ? (
            <div className="card">
              <h3>Tu carrito está vacío</h3>

              <p>
                Agrega prendas desde el catálogo.
              </p>
            </div>
          ) : (
            cart.map((item, index) => (
              <article
                key={index}
                className="product-card card"
              >
                <img
                  src={item.image}
                  alt={item.title}
                />

                <h3>{item.title}</h3>

                <p>
                  $
                  {item.price.toLocaleString()}
                </p>

                <button
                  onClick={() =>
                    removeFromCart(index)
                  }
                  className="btn btn-primary"
                >
                  Eliminar
                </button>
              </article>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div
            className="card"
            style={{ marginTop: "2rem" }}
          >
            <h2>
              Total: $
              {total.toLocaleString()}
            </h2>

            <button className="btn btn-primary" onClick={checkout}>
              Finalizar pedido
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default Cart;