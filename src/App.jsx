import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Galeria from "./pages/Galeria.jsx";
import Visita from "./pages/Visita.jsx";
import Entradas from "./pages/Entradas.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Ruta propia para cuando la Galería deje de vivir embebida en el Home.
              El QR impreso apunta acá (vía link corto) y no cambia. */}
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/visita" element={<Visita />} />
          <Route path="/entradas" element={<Entradas />} />
        </Routes>
      </main>
    </>
  );
}
