import { useLanguage } from "../context/LanguageContext.jsx";
import AudioPlayer from "./AudioPlayer.jsx";

// numero: posición de la pieza (1 a 12), para mostrar "Audio N" y para
// que los puntos del mapa puedan llevar a esta tarjeta (id="audio-N").
export default function PiezaCard({ pieza, numero }) {
  const { lang } = useLanguage();

  return (
    <article id={`audio-${numero}`} className="audio-card2">
      <img
        className="audio-card2__img"
        src={pieza.imagen}
        alt={pieza.titulo[lang]}
        loading="lazy"
      />
      <div className="audio-card2__body">
        <h3 className="audio-card2__title">Audio {numero}</h3>
        <p className="audio-card2__desc">{pieza.descripcion[lang]}</p>
        <AudioPlayer audio={pieza.audio} />
      </div>
    </article>
  );
}