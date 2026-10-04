import { Link, useParams } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import personas from "../data/personas.js";

export default function Persona() {
  const { slug } = useParams();
  const { lang, t } = useLanguage();

  const persona = personas.find((p) => p.slug === slug);

  if (!persona) {
    return (
      <section className="placeholder-page">
        <h1>404</h1>
        <p>
          <Link to="/historia">{t.nav.casaArroyo}</Link>
        </p>
      </section>
    );
  }

  const otras = personas.filter((p) => p.slug !== slug);

  return (
    <section className="persona-page">
      <Link to="/historia" className="persona-page__back">
        ← {t.nav.casaArroyo}
      </Link>

      <h1>{persona.nombre}</h1>
      {persona.años && <p className="persona-page__anios">{persona.años}</p>}
      {persona.foto && (
        <img
          src={persona.foto}
          alt={persona.nombre}
          className="persona-page__foto"
        />
      )}
      <p className="persona-page__rol">{persona.rol[lang]}</p>
      <p>{persona.texto[lang]}</p>

      <nav className="persona-page__otras">
        {otras.map((p) => (
          <Link key={p.slug} to={`/historia/${p.slug}`}>
            {p.nombre}
          </Link>
        ))}
      </nav>
    </section>
  );
}