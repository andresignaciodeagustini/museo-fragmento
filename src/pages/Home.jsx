import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import personas from "../data/personas.js";

// Orden en que aparecen las personalidades en el Home
const ORDEN = ["amancio", "delfina", "alberto", "herman"];
const FOTOS = {
  amancio: "/assets/home/amancio.jpg",
  delfina: "/assets/home/delfina.jfif",
  alberto: "/assets/home/alberto.png",
  herman: "/assets/home/herman.png",
};
function fotoDe(p) {
  const clave = ORDEN.find((o) => p.nombre.toLowerCase().includes(o));
  return FOTOS[clave] || p.foto;
}
function posicion(p) {
  const i = ORDEN.findIndex((o) => p.nombre.toLowerCase().includes(o));
  return i === -1 ? 99 : i;
}

const icono = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export default function Home() {
  const { t, lang } = useLanguage();
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

  const lista = [...personas].sort((a, b) => posicion(a) - posicion(b));

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <div className="home">
      {/* ---------- Hero ---------- */}
      <section className="hero-full">
        <video
          ref={videoRef}
          className="hero-full__img"
          src="/assets/video-home.mp4"
          poster="/assets/1.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="hero-full__overlay" />

        <div className="welcome-card">
          <h2>{t.bienvenida.titulo}</h2>
          <p>{t.bienvenida.texto}</p>
          <Link to="/galeria" className="welcome-card__btn">
            <span>{t.bienvenida.boton}</span>
            <span className="welcome-card__arrow">→</span>
          </Link>
        </div>

        <div className="hero-controls">
          <button
            type="button"
            className="hero-btn"
            onClick={togglePlay}
            aria-label={playing ? "Pausar video" : "Reproducir video"}
            title={playing ? "Pausar video" : "Reproducir video"}
          >
            {playing ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="7 4 20 12 7 20 7 4" />
              </svg>
            )}
          </button>

          <button
            type="button"
            className="hero-btn"
            onClick={toggleSound}
            aria-label={muted ? "Activar sonido" : "Silenciar"}
            title={muted ? "Activar sonido" : "Silenciar"}
          >
            {muted ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.5 8.5a5 5 0 0 1 0 7" />
                <path d="M19 5a10 10 0 0 1 0 14" />
              </svg>
            )}
          </button>
        </div>
      </section>

      {/* ---------- Franja de información ---------- */}
      <section className="home-wrap home-info">
        <h2 className="home-info__title">
          Descubre la Casa
          <br />
          sobre el Arroyo
        </h2>
        <ul className="home-info__list">
          <li>
            <svg {...icono}>
              <path d="M3 9a2 2 0 0 0 0 6v3h18v-3a2 2 0 0 1 0-6V6H3z" />
              <line x1="13" y1="6" x2="13" y2="18" strokeDasharray="2 3" />
            </svg>
            Entrada gratuita
          </li>
          <li>
            <svg {...icono}>
              <rect x="3" y="5" width="18" height="16" rx="2" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <line x1="8" y1="3" x2="8" y2="7" />
              <line x1="16" y1="3" x2="16" y2="7" />
            </svg>
            Parque: lunes a viernes
          </li>
          <li>
            <svg {...icono}>
              <circle cx="12" cy="12" r="9" />
              <polyline points="12 7 12 12 15 14" />
            </svg>
            De 8:30 a 14:30 h
          </li>
        </ul>
      </section>

      {/* ---------- Audioguías ---------- */}
      <section className="home-wrap home-block">
        <h2 className="home-block__title">Audioguías</h2>
        <Link to="/galeria" className="home-card home-card--audio">
          <div className="home-card__text">
            <h3>
              Haz clic para escuchar
              <br />
              las audioguías
            </h3>
          </div>
          <img src="/assets/home/audioguias.png" alt="" />
        </Link>
      </section>

      {/* ---------- Historia y galería de fotos ---------- */}
      <section className="home-wrap home-block">
        <h2 className="home-block__title">Historia y galería de fotos</h2>
        <div className="home-grid-2">
          <Link to="/historia/cronologia" className="home-card">
            <div className="home-card__text">
              <h3>
                Cronología
                <br />
                de la Casa
                <br />
                sobre el Arroyo
              </h3>
              <div className="home-card__foot">
                <div>
                  <strong>Historia de la casa</strong>
                  <p>Recorre los momentos clave de su historia</p>
                </div>
                <span className="home-card__btn">Abrir</span>
              </div>
            </div>
            <img src="/assets/home/cronologia.png" alt="" />
          </Link>

          <Link to="/galeria" className="home-card">
            <div className="home-card__text">
              <h3>
                Galería
                <br />
                La casa en
                <br />
                imágenes
              </h3>
              <div className="home-card__foot">
                <div>
                  <strong>Galería de fotos</strong>
                  <p>Explora su arquitectura, sus interiores y el parque</p>
                </div>
                <span className="home-card__btn">Abrir</span>
              </div>
            </div>
            <img src="/assets/home/galeriacasaimagenes.jpg" alt="" />
          </Link>
        </div>
      </section>

      {/* ---------- Personalidades ---------- */}
      <section className="home-wrap home-block home-block--last">
        <h2 className="home-block__title">Personalidades</h2>
        <div className="home-grid-4">
          {lista.map((p) => (
            <Link key={p.slug} to={`/historia/${p.slug}`} className="persona-card">
              {fotoDe(p) && <img src={fotoDe(p)} alt={p.nombre} />}
              <div className="persona-card__body">
                <h3>{p.nombre}</h3>
                <p>{p.texto?.[lang]}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
