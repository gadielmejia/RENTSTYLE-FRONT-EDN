import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Register from './pages/register';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Nav />
            <Inicio />
            <Footer />
          </>
        } />
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<h1>Admin</h1>} />
        <Route path="/user" element={<h1>User</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;