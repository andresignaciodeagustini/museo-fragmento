import { useLanguage } from "../context/LanguageContext.jsx";

export default function LanguageSwitch() {
  const { lang, toggleLang } = useLanguage();

  return (
    <button
      className="lang-switch"
      onClick={toggleLang}
      aria-label="Cambiar idioma / Change language"
    >
      <span className={lang === "es" ? "is-active" : ""}>ES</span>
      <span className="divider">/</span>
      <span className={lang === "en" ? "is-active" : ""}>EN</span>
    </button>
  );
}
