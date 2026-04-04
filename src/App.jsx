import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Experiencia from './pages/Experiencia'
import Portafolio from './pages/Portafolio'
import Servicios from './pages/Servicios'

export default function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/portafolio" element={<Portafolio />} />
          <Route path="/servicios" element={<Servicios />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}