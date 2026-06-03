import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Register from './pages/register';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;