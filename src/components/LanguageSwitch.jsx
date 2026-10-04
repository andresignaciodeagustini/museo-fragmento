import { useLanguage } from "../context/LanguageContext.jsx";

export default function LanguageSwitch() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      className="lang-switch"
      onClick={toggleLang}
      aria-label="Cambiar idioma / Change language"
    >
      {lang === "es" ? "English" : "Español"}
    </button>
  );
}