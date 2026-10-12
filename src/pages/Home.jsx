import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import personas from "../data/personas.js";
import Carousel from "../components/Carousel.jsx";

// TODO: reemplazar por la página real de "Sumate a la AACASA".
const SUMATE_PATH = "/asociacion/socios";

// Orden en que aparecen las personalidades dentro de "La Casa"
const ORDEN = ["alberto", "amancio", "delfina", "herman"];
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
  width: 36,
  height: 36,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

function PeopleIcon() {
  return (
    <svg {...icono}>
      <circle cx="12" cy="6.5" r="2.8" />
      <path d="M7.5 15.5c0-2.6 2-4.2 4.5-4.2s4.5 1.6 4.5 4.2" />
      <circle cx="5" cy="10.5" r="2.2" />
      <path d="M1.5 18c0-2 1.5-3.4 3.5-3.4" />
      <circle cx="19" cy="10.5" r="2.2" />
      <path d="M22.5 18c0-2-1.5-3.4-3.5-3.4" />
      <path d="M5 18.5h14" />
    </svg>
  );
}

// Botón circular blanco con flecha negra
function CircleArrow({ size = 32 }) {
  return (
    <span className="circle-arrow" style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 24 24"
        width={size * 0.5}
        height={size * 0.5}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </svg>
    </span>
  );
}

// Tarjeta de los carruseles: foto arriba y texto + flecha abajo
function Tile({ to, img, title, sub, text }) {
  return (
    <Link to={to} className="tile">
      <div className="tile__img">
        {img && <img src={img} alt="" />}
      </div>
      <div className="tile__body">
        <div className="tile__text">
          <strong>{title}</strong>
          {sub && <span>{sub}</span>}
          {text && <p>{text}</p>}
        </div>
        <CircleArrow size={text ? 28 : 32} />
      </div>
    </Link>
  );
}

export default function Home() {
  const { t } = useLanguage();
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
          <Link to="/historia/museo-de-sitio" className="welcome-card__btn">
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
        <h2 className="home-info__title">{t.info.titulo}</h2>
        <div className="home-info__actions">
          <Link to={SUMATE_PATH} className="home-info__action">
            <PeopleIcon />
            <span className="home-info__label">
              {t.info.sumate}
              <span aria-hidden="true">→</span>
            </span>
          </Link>
        </div>
      </section>

      {/* ---------- Audioguías ---------- */}
      <section className="home-wrap home-block">
        <h2 className="home-block__title">{t.audioguias.titulo}</h2>
        <Link to="/inmersiva/audioguias" className="audio-card">
          <div className="audio-card__text">
            <p>{t.audioguias.texto}</p>
            <span className="audio-card__btn">
              <span>{t.audioguias.boton}</span>
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
          <img src="/assets/home/audioguias.png" alt="" />
        </Link>
      </section>

      {/* ---------- La Casa ---------- */}
      <section className="home-wrap home-block">
        <h2 className="home-block__title">{t.casa.titulo}</h2>
        <Carousel label={t.casa.titulo}>
          <Tile
            to="/historia/cronologia"
            img="/assets/home/cronologia.png"
            title={t.casa.cronologia.titulo}
            sub={t.casa.cronologia.sub}
          />
          <Tile
            to="/historia/galeria"
            img="/assets/home/galeriacasaimagenes.jpg"
            title={t.casa.galeria.titulo}
            sub={t.casa.galeria.sub}
          />
          {lista.map((p) => (
            <Tile
              key={p.slug}
              to={`/historia/${p.slug}`}
              img={fotoDe(p)}
              title={p.nombre}
            />
          ))}
        </Carousel>
      </section>

      {/* ---------- La Asociación ---------- */}
      <section className="home-wrap home-block home-block--last">
        <h2 className="home-block__title">{t.asociacion.titulo}</h2>
        <Carousel label={t.asociacion.titulo}>
          <Tile
            to="/centro/laboratorio"
            img="/assets/centro.jpg"
            title={t.asociacion.centro.titulo}
            sub={t.asociacion.centro.sub}
            text={t.asociacion.centro.texto}
          />
          <Tile
            to="/inmersiva/audioguias"
            img="/assets/inmersiva.JPG"
            title={t.asociacion.inmersiva.titulo}
            text={t.asociacion.inmersiva.texto}
          />
          <Tile
            to="/agenda/eventos"
            img="/assets/agenda.jpg"
            title={t.asociacion.agenda.titulo}
            text={t.asociacion.agenda.texto}
          />
          <Tile
            to="/inmersiva/gemelo-digital"
            img="/assets/software.png"
            title={t.asociacion.software.titulo}
            text={t.asociacion.software.texto}
          />
        </Carousel>
      </section>
    </div>
  );
}