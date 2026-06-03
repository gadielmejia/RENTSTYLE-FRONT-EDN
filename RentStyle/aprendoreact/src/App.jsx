import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/Inicio';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Header from './components/Header';

function App() {
  return (
    <>
    <Nav />
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
  )
}

export default App
