import { useLanguage } from "../context/LanguageContext.jsx";

export default function LanguageSwitch() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="lang-switch" role="group" aria-label="Idioma / Language">
      <button
        type="button"
        className={`lang-switch__btn ${lang === "es" ? "is-active" : ""}`}
        onClick={() => setLang("es")}
        aria-pressed={lang === "es"}
      >
        Español
      </button>
      <span className="lang-switch__sep" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        className={`lang-switch__btn ${lang === "en" ? "is-active" : ""}`}
        onClick={() => setLang("en")}
        aria-pressed={lang === "en"}
      >
        English
      </button>
    </div>
  );
}