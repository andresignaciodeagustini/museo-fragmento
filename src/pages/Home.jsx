import { useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";
import Galeria from "./Galeria.jsx";

export default function Home() {
  const { t } = useLanguage();
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);

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
    <>
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
          <a href="#galeria" className="welcome-card__btn">
            <span>{t.bienvenida.boton}</span>
            <span className="welcome-card__arrow">→</span>
          </a>
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

      <Galeria embedded />
    </>
  );
}