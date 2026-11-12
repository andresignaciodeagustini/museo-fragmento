import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext.jsx";
import styles from "./PaginaContenido.module.css";

// Plantilla para páginas institucionales (Quiénes somos, Comisión Directiva,
// Museo de Sitio, Investigaciones...). Todo el contenido viene de
// src/data/paginas.js, en español e inglés.
//
// Imágenes: si "src" está vacío se muestra un recuadro gris de "Foto pendiente".
// Para cargar la foto real alcanza con completar "src" en paginas.js.

const PENDIENTE = { es: "Foto pendiente", en: "Photo pending" };
const INICIO = { es: "Inicio", en: "Home" };

// img.entera = true: la foto se ve completa, sin recorte (retratos).
// Se pega al borde exterior según el lado del bloque.
function Imagen({ img, lang, className, lado }) {
  if (img?.src) {
    const posicion =
      img.posicion ?? (img.entera ? (lado === "izquierda" ? "left top" : "right top") : undefined);
    return (
      <figure
        className={`${styles.imagen} ${img.entera ? styles.entera : ""} ${className ?? ""}`}
      >
        <img
          src={img.src}
          alt={img.alt?.[lang] ?? ""}
          loading="lazy"
          style={posicion ? { objectPosition: posicion } : undefined}
        />
        {img.pie && <figcaption className={styles.pie}>{img.pie[lang]}</figcaption>}
      </figure>
    );
  }
  return (
    <div
      className={`${styles.imagen} ${styles.pendiente} ${className ?? ""}`}
      role="img"
      aria-label={img?.alt?.[lang] ?? PENDIENTE[lang]}
    >
      <span>{PENDIENTE[lang]}</span>
    </div>
  );
}

function Listas({ listas, lang }) {
  return (
    <div className={styles.listas}>
      {listas.map((lista, i) => (
        <div key={i} className={styles.lista}>
          <h3>{lista.titulo[lang]}</h3>
          <ul>
            {lista.items.map((item, j) => (
              <li key={j}>
                {item.rol && <strong>{item.rol[lang]}: </strong>}
                {item.nombre}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function Bloque({ bloque, lang }) {
  const tieneImagen = Boolean(bloque.imagen);
  const clases = [
    styles.bloque,
    tieneImagen ? "" : styles.soloTexto,
    bloque.lado === "izquierda" ? styles.imagenIzquierda : "",
  ].join(" ");

  return (
    <div className={clases}>
      <div className={styles.texto}>
        {bloque.texto?.[lang]?.map((p, i) => <p key={i}>{p}</p>)}
        {bloque.listas && <Listas listas={bloque.listas} lang={lang} />}
        {bloque.destacado && (
          <p className={styles.destacado}>{bloque.destacado[lang]}</p>
        )}
      </div>
      {tieneImagen && <Imagen img={bloque.imagen} lang={lang} lado={bloque.lado} />}
    </div>
  );
}

export default function PaginaContenido({ pagina }) {
  const { lang } = useLanguage();

  return (
    <article className={styles.page}>
      {pagina.hero?.src && pagina.hero.fondo === "difuminado" ? (
        // Foto entera al centro; los costados se rellenan con la misma
        // foto desenfocada, así la cabecera ocupa todo el ancho sin recortar.
        <div className={styles.heroMarco}>
          <img className={styles.heroDifuminado} src={pagina.hero.src} alt="" aria-hidden="true" />
          <img
            className={styles.heroEntera}
            src={pagina.hero.src}
            alt={pagina.hero.alt?.[lang] ?? ""}
          />
        </div>
      ) : pagina.hero?.src ? (
        <img
          className={`${styles.hero} ${pagina.hero.completa ? styles.heroCompleta : ""}`}
          src={pagina.hero.src}
          alt={pagina.hero.alt?.[lang] ?? ""}
          style={{
            ...(pagina.hero.posicion && { objectPosition: pagina.hero.posicion }),
            ...(pagina.hero.fondo && { background: pagina.hero.fondo }),
          }}
        />
      ) : (
        <div className={styles.heroPendiente} role="img" aria-label={PENDIENTE[lang]}>
          <span>{PENDIENTE[lang]}</span>
        </div>
      )}

      <div className={styles.wrap}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link to="/">{INICIO[lang]}</Link>
          {pagina.migas?.map((m) => (
            <span key={m.to} className={styles.miga}>
              <span aria-hidden="true">/</span>
              <Link to={m.to}>{m.label[lang]}</Link>
            </span>
          ))}
          <span aria-hidden="true">/</span>
          <span className={styles.current} aria-current="page">
            {pagina.titulo[lang]}
          </span>
        </nav>

        <header className={styles.header}>
          <h1 className={styles.titulo}>{pagina.titulo[lang]}</h1>
          {pagina.subtitulo && (
            <p className={styles.subtitulo}>{pagina.subtitulo[lang]}</p>
          )}
        </header>

        {pagina.secciones.map((seccion, i) => (
          <section
            key={i}
            className={`${styles.seccion} ${seccion.separar ? styles.separada : ""}`}
          >
            {seccion.titulo && <h2 className={styles.h2}>{seccion.titulo[lang]}</h2>}
            {seccion.nota && <p className={styles.nota}>{seccion.nota[lang]}</p>}
            {seccion.bloques.map((b, j) => (
              <Bloque key={j} bloque={b} lang={lang} />
            ))}
          </section>
        ))}
      </div>
    </article>
  );
}
