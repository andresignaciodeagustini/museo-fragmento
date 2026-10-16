import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext.jsx";
import cronologia from "../../data/cronologia.js";
import styles from "./Cronologia.module.css";

const LABELS = {
  es: { inicio: "Inicio", historia: "Historia" },
  en: { inicio: "Home", historia: "History" },
};

export default function Cronologia() {
  const { lang } = useLanguage();
  const labels = LABELS[lang] ?? LABELS.es;
  const { titulo, secciones, cierre } = cronologia;

  return (
    <article className={styles.page}>
      <div className={styles.wrap}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">{labels.inicio}</Link>
          <span aria-hidden="true">/</span>
          <Link to="/historia" aria-current="page">
            {labels.historia}
          </Link>
        </nav>

        <h1 className={styles.title}>{titulo[lang]}</h1>

        <div className={styles.secciones}>
          {secciones.map((s, i) => (
            <section key={i} className={styles.seccion}>
              <div className={styles.texto}>
                <h2>{s.titulo[lang]}</h2>
                {s.texto[lang].map((parrafo, j) => (
                  <p key={j}>{parrafo}</p>
                ))}
              </div>

              <div className={styles.imagenes}>
                {s.imagenes.map((img, k) => (
                  <figure
                    key={k}
                    className={`${styles.figura} ${
                      img.mitad ? styles.mitad : ""
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt?.[lang] ?? ""}
                      loading="lazy"
                      style={
                        img.proporcion
                          ? {
                              aspectRatio: img.proporcion,
                              objectFit: "cover",
                              objectPosition: img.posicion,
                            }
                          : undefined
                      }
                    />
                    {img.pie && (
                      <figcaption className={styles.pie}>
                        {img.pie[lang]}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          ))}

          <section className={styles.cierre}>
            <h2>{cierre.titulo[lang]}</h2>
            {cierre.texto[lang].map((parrafo, j) => (
              <p key={j}>{parrafo}</p>
            ))}
          </section>
        </div>
      </div>
    </article>
  );
}