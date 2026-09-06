import { useLanguage } from "../context/LanguageContext.jsx";
import piezas from "../data/galeria.js";
import PiezaCard from "../components/PiezaCard.jsx";

// embedded=true: se usa dentro del Home (sin recargar layout propio).
// embedded=false: se usa como página independiente en /galeria.
export default function Galeria({ embedded = false }) {
  const { t } = useLanguage();

  return (
    <section id="galeria" className="galeria-section">
      <img
        src="/assets/imagen-audios2.jpg"
        alt=""
        className="galeria-section__bg"
      />
      <div className="galeria-section__overlay" />

      <div className="galeria-section__inner">
        <div className="galeria-section__head">
          <h2>{t.galeria.titulo}</h2>
          <p>{t.galeria.subtitulo}</p>
        </div>
        <div className="galeria-section__grid">
          {piezas.map((pieza) => (
            <PiezaCard key={pieza.id} pieza={pieza} />
          ))}
        </div>

        <div className="galeria-section__videos">
          <div className="video-embed">
            <iframe
              src="https://www.youtube.com/embed/W0ZaGIa4YOg"
              title="Video 1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="video-embed">
            <iframe
              src="https://www.youtube.com/embed/4-p-I25pvyM"
              title="Video 2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}