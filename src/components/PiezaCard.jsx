import { useLanguage } from "../context/LanguageContext.jsx";
import AudioPlayer from "./AudioPlayer.jsx";

export default function PiezaCard({ pieza }) {
  const { lang } = useLanguage();

  return (
    <article className="pieza-card">
      <img
        className="pieza-card__imagen"
        src={pieza.imagen}
        alt={pieza.titulo[lang]}
        loading="lazy"
      />
      <h3>{pieza.titulo[lang]}</h3>
      <p>{pieza.descripcion[lang]}</p>
      <AudioPlayer audio={pieza.audio} />
    </article>
  );
}
