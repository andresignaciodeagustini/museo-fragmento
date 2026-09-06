import { useLanguage } from "../context/LanguageContext.jsx";

// Recibe { es: "url", en: "url" } y reproduce el que corresponde
// al idioma activo. El <audio> se remonta al cambiar "src" para
// que el navegador cargue el archivo correcto.
export default function AudioPlayer({ audio }) {
  const { lang } = useLanguage();
  const src = audio[lang];

  return (
    <audio key={src} controls preload="none" className="audio-player">
      <source src={src} />
    </audio>
  );
}
