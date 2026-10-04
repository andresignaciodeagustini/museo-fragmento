import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import personas from "../data/personas.js";

export default function Historia() {
  const { lang, t } = useLanguage();

  return (
    <section className="historia-page">
      <h1>{t.nav.casaArroyo}</h1>

      <div className="historia-page__grid">
        <Link to="/historia/cronologia" className="historia-card">
          <h2>{t.nav.cronologia}</h2>
        </Link>

        {personas.map((p) => (
          <Link
            key={p.slug}
            to={`/historia/${p.slug}`}
            className="historia-card"
          >
            <h2>{p.nombre}</h2>
            <p>{p.rol[lang]}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}