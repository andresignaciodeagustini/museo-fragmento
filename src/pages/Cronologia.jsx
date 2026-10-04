import { useLanguage } from "../context/LanguageContext.jsx";

export default function Cronologia() {
  const { t } = useLanguage();

  return (
    <section className="placeholder-page">
      <h1>{t.nav.cronologia}</h1>
      <p>Contenido pendiente.</p>
    </section>
  );
}