import { createContext, useContext, useEffect, useState } from "react";
import es from "../i18n/es.json";
import en from "../i18n/en.json";

const STORAGE_KEY = "museo-fragmento:lang";
const dictionaries = { es, en };

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "en" || saved === "es" ? saved : "es";
  });

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  const t = dictionaries[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook de acceso: useLanguage().lang -> "es" | "en"
// useLanguage().t -> textos del sitio en el idioma activo
// useLanguage().toggleLang() -> cambia el idioma
export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
  }
  return ctx;
}
