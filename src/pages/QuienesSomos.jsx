import { useLanguage } from "../context/LanguageContext.jsx";

export default function QuienesSomos() {
  const { t } = useLanguage();

  return (
    <section className="placeholder-page">
      <h1>{t.nav.quienesSomos}</h1>
      <p>Contenido pendiente.</p>
    </section>
  );
}