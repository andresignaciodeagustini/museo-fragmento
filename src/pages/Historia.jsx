import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import personas from "../data/personas.js";
import styles from "./Historia.module.css";

// Página "Historia" (menú La Casa → Personajes Clave).
// Cabecera con foto + tarjetas con foto de Cronología y de cada personaje.

const HERO = "/assets/paginas/museo-hero-casa.jpg";

const SUBTITULO = {
  es: "Personas, ideas y contextos que dieron origen a la Casa sobre el Arroyo y explican su valor hasta hoy.",
  en: "People, ideas and contexts that gave rise to the House over the Stream and explain its value today.",
};

// Foto de cada tarjeta (las mismas que usa la home).
const FOTOS = {
  "amancio-williams": "/assets/home/amancio.jpg",
  "delfina-galvez-bunge": "/assets/home/delfina.jfif",
  "alberto-williams": "/assets/home/alberto.png",
};

// Orden de las tarjetas, como en la referencia.
const ORDEN = ["amancio-williams", "delfina-galvez-bunge", "alberto-williams"];
const posicion = (p) => {
  const i = ORDEN.indexOf(p.slug);
  return i === -1 ? 99 : i;
};

function Flecha() {
  return (
    <svg className={styles.flecha} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 12h8m-3.5-3.5L16 12l-3.5 3.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Tarjeta({ to, img, titulo, sub }) {
  return (
    <Link to={to} className={styles.tarjeta}>
      <img className={styles.foto} src={img || undefined} alt="" loading="lazy" />
      <div className={styles.banda}>
        <div>
          <h2 className={styles.tarjetaTitulo}>{titulo}</h2>
          {sub && <p className={styles.tarjetaSub}>{sub}</p>}
        </div>
        <Flecha />
      </div>
    </Link>
  );
}

export default function Historia() {
  const { lang, t } = useLanguage();
  const lista = [...personas].sort((a, b) => posicion(a) - posicion(b));

  return (
    <div className={styles.page}>
      <header className={styles.hero}>
        <img className={styles.heroFoto} src={HERO} alt="" />
        <div className={styles.heroTexto}>
          <h1 className={styles.titulo}>{t.nav.casaArroyo}</h1>
          <span className={styles.linea} aria-hidden="true" />
          <p className={styles.subtitulo}>{SUBTITULO[lang]}</p>
        </div>
      </header>

      <section className={styles.grilla}>
        <Tarjeta
          to="/historia/cronologia"
          img="/assets/home/cronologia.png"
          titulo={t.nav.cronologia}
        />
        {lista.map((p) => (
          <Tarjeta
            key={p.slug}
            to={`/historia/${p.slug}`}
            img={FOTOS[p.slug] || p.foto}
            titulo={p.nombre}
            sub={p.rol[lang].replace(". ", " · ")}
          />
        ))}
      </section>
    </div>
  );
}
