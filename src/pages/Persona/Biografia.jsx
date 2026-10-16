import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext.jsx";
import styles from "./Biografia.module.css";

const LABELS = {
  es: { inicio: "Inicio", personalidades: "Personalidades" },
  en: { inicio: "Home", personalidades: "People" },
};

export default function Biografia({ persona, bio }) {
  const { lang } = useLanguage();
  const labels = LABELS[lang] ?? LABELS.es;

  return (
    <article className={styles.page}>
      {bio.hero && (
        <img
          className={styles.hero}
          src={bio.hero.src}
          alt={bio.hero.alt?.[lang] ?? persona.nombre}
        />
      )}

      <div className={styles.wrap}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">{labels.inicio}</Link>
          <span aria-hidden="true">/</span>
          <Link to="/historia">{labels.personalidades}</Link>
          <span aria-hidden="true">/</span>
          <span className={styles.current} aria-current="page">
            {persona.nombre}
          </span>
        </nav>

        <header className={styles.header}>
          <h1 className={styles.name}>{persona.nombre}</h1>
          {bio.anios && <p className={styles.years}>{bio.anios}</p>}
          {bio.subtitulo && (
            <p className={styles.subtitle}>{bio.subtitulo[lang]}</p>
          )}
        </header>

        <div className={styles.bloques}>
          {bio.bloques.map((b, i) => {
            // Acepta una sola imagen (imagen) o varias (imagenes)
            const imagenes = b.imagenes ?? (b.imagen ? [b.imagen] : []);
            const apiladas = imagenes.length > 1;
            const clases = [
              styles.bloque,
              imagenes.length === 0 ? styles.soloTexto : "",
              apiladas ? styles.variasImagenes : "",
            ].join(" ");

            return (
              <section key={i} className={clases}>
                <div className={styles.texto}>
                  {b.texto[lang].map((parrafo, j) => (
                    <p key={j}>{parrafo}</p>
                  ))}
                </div>

                {imagenes.length > 0 && (
                  <div className={styles.imagenes}>
                    {imagenes.map((img, k) => (
                      <figure key={k} className={styles.imagen}>
                        <img
                          src={img.src}
                          alt={img.alt?.[lang] ?? ""}
                          loading="lazy"
                          style={
                            apiladas
                              ? {
                                  aspectRatio: img.proporcion,
                                  objectPosition: img.posicion,
                                }
                              : undefined
                          }
                        />
                      </figure>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </article>
  );
}