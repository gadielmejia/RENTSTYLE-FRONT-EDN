import { Link } from 'react-router-dom';
import Header from "./Header";

function NavAdmin() {
  return (
    <nav className="app-nav">
      <div className="nav-inner">
        <Link to="/" className="brand">
          <Header />
        </Link>
        <div className="nav-actions">
          <button onClick={() => {}}>Tema</button>

        </div>
      </div>
    </nav>
  );
}

export default NavAdmin;