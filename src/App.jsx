import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import PaginaProvisoria from "./components/PaginaProvisoria.jsx";
import Home from "./pages/Home.jsx";
import Galeria from "./pages/Galeria.jsx";
import Visita from "./pages/Visita.jsx";
import Entradas from "./pages/Entradas.jsx";
import QuienesSomos from "./pages/QuienesSomos.jsx";
import Historia from "./pages/Historia.jsx";
import Cronologia from "./pages/Cronologia/Cronologia.jsx";
import GaleriaFotos from "./pages/GaleriaFotos/GaleriaFotos.jsx";
import Persona from "./pages/Persona/Persona.jsx";

// Páginas nuevas todavía sin contenido: [ruta, clave en t.nav]
const provisorias = [
  ["/asociacion/comision-directiva", "comision"],
  ["/asociacion/socios", "socios"],
  ["/asociacion/padrinazgos", "padrinazgos"],
  ["/historia/museo-de-sitio", "museoSitio"],
  ["/historia/investigaciones", "investigaciones"],
  ["/centro/laboratorio", "laboratorio"],
  ["/centro/talleres", "talleres"],
  ["/centro/visitas", "visitas"],
  ["/inmersiva/gemelo-digital", "gemelo"],
  ["/inmersiva/accesibilidad", "accesibilidad"],
  ["/agenda/eventos", "eventos"],
  ["/agenda/noticias", "noticias"],
  ["/contacto/escribinos", "escribinos"],
  ["/contacto/experiencia", "experiencia"],
  ["/contacto/redes", "redes"],
];

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Audioguías: nueva ruta. /galeria redirige para que el QR impreso siga andando. */}
          <Route path="/inmersiva/audioguias" element={<Galeria />} />
          <Route path="/galeria" element={<Navigate to="/inmersiva/audioguias" replace />} />

          <Route path="/visita" element={<Visita />} />
          <Route path="/entradas" element={<Entradas />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/historia/cronologia" element={<Cronologia />} />
          <Route path="/historia/galeria" element={<GaleriaFotos />} />

          {/* Secciones padre: redirigen a su primera subpágina */}
          <Route path="/centro" element={<Navigate to="/centro/laboratorio" replace />} />
          <Route path="/inmersiva" element={<Navigate to="/inmersiva/audioguias" replace />} />
          <Route path="/agenda" element={<Navigate to="/agenda/eventos" replace />} />
          <Route path="/contacto" element={<Navigate to="/contacto/escribinos" replace />} />

          {/* Páginas provisorias */}
          {provisorias.map(([path, key]) => (
            <Route key={path} path={path} element={<PaginaProvisoria titleKey={key} />} />
          ))}

          {/* Va al final: las rutas fijas de /historia/... tienen prioridad */}
          <Route path="/historia/:slug" element={<Persona />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}