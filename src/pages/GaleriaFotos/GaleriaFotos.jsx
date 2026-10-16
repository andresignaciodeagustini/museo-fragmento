import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext.jsx";
import galeriaFotos from "../../data/galeriaFotos.js";
import styles from "./GaleriaFotos.module.css";

const LABELS = {
  es: {
    inicio: "Inicio",
    galeria: "Galería",
    anterior: "Foto anterior",
    siguiente: "Foto siguiente",
    pausar: "Pausar presentación",
    reproducir: "Reproducir presentación",
  },
  en: {
    inicio: "Home",
    galeria: "Gallery",
    anterior: "Previous photo",
    siguiente: "Next photo",
    pausar: "Pause slideshow",
    reproducir: "Play slideshow",
  },
};

const INTERVALO = 5000; // milisegundos entre fotos

function Chevron({ dir }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {dir === "left" ? <path d="M15 5l-7 7 7 7" /> : <path d="M9 5l7 7-7 7" />}
    </svg>
  );
}

export default function GaleriaFotos() {
  const { lang } = useLanguage();
  const labels = LABELS[lang] ?? LABELS.es;
  const { titulo, subtitulo, fotos } = galeriaFotos;
  const total = fotos.length;

  const [index, setIndex] = useState(0);
  // Si la persona prefiere menos movimiento, la presentación arranca pausada
  const [playing, setPlaying] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  // Avanza sola cada tanto. Al cambiar de foto a mano, el contador se reinicia.
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), INTERVALO);
    return () => clearInterval(id);
  }, [playing, index, total]);

  const anterior = () => setIndex((i) => (i - 1 + total) % total);
  const siguiente = () => setIndex((i) => (i + 1) % total);

  function elegir(i) {
    setIndex(i);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const actual = fotos[index];

  return (
    <article className={styles.page}>
      {/* ---------- Imagen principal ---------- */}
      <section className={styles.hero} aria-roledescription="carousel">
        <img
          key={actual.src}
          className={styles.heroImg}
          src={actual.src}
          alt={actual.titulo[lang]}
          style={{
            objectFit: actual.ajuste === "contain" ? "contain" : "cover",
            objectPosition: actual.posicion ?? "center",
          }}
        />
        <div className={styles.heroShade} />

        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowPrev}`}
          onClick={anterior}
          aria-label={labels.anterior}
        >
          <Chevron dir="left" />
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.arrowNext}`}
          onClick={siguiente}
          aria-label={labels.siguiente}
        >
          <Chevron dir="right" />
        </button>

        <div className={styles.heroBar}>
          <p className={styles.heroCaption} aria-live="polite">
            {actual.titulo[lang]}
          </p>
          <div className={styles.heroTools}>
            <span className={styles.counter}>
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <button
              type="button"
              className={styles.playBtn}
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? labels.pausar : labels.reproducir}
              title={playing ? labels.pausar : labels.reproducir}
            >
              {playing ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <polygon points="7 4 20 12 7 20 7 4" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </section>

      <div className={styles.wrap}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">{labels.inicio}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{labels.galeria}</span>
        </nav>

        <header className={styles.header}>
          <h1 className={styles.title}>{titulo[lang]}</h1>
          <p className={styles.subtitle}>{subtitulo[lang]}</p>
        </header>

        {/* ---------- Grilla de miniaturas ---------- */}
        <ul className={styles.grid}>
          {fotos.map((f, i) => (
            <li key={f.src}>
              <button
                type="button"
                className={`${styles.thumb} ${i === index ? styles.thumbActive : ""}`}
                onClick={() => elegir(i)}
                aria-current={i === index}
              >
                <img src={f.src} alt={f.titulo[lang]} loading="lazy" />
              </button>
              <p className={styles.thumbCaption}>
                {(f.miniatura ?? f.titulo)[lang]}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}