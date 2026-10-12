import { useLanguage } from "../context/LanguageContext.jsx";

// Página provisoria reutilizable: toma el título de t.nav[titleKey].
export default function PaginaProvisoria({ titleKey }) {
  const { t, lang } = useLanguage();

  return (
    <section className="placeholder-page">
      <h1>{t.nav[titleKey]}</h1>
      <p>{lang === "en" ? "Content coming soon." : "Contenido pendiente."}</p>
    </section>
  );
}