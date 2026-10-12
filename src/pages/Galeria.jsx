import { useLanguage } from "../context/LanguageContext.jsx";
import piezas from "../data/galeria.js";
import PiezaCard from "../components/PiezaCard.jsx";

// Imagen del plano (ponerla en public/assets/mapa-audioguias.png)
const MAPA_IMG = "/assets/mapa-audioguias.png";

// Posición de cada punto sobre el plano, en % (x = izquierda, y = arriba).
// Si un punto queda corrido, se ajusta acá.
const MARCADORES = [
  { n: 1, x: 37.3, y: 91.6 },
  { n: 2, x: 26.8, y: 61.5 },
  { n: 3, x: 39.9, y: 49.8 },
  { n: 4, x: 65.5, y: 42.5 },
  { n: 5, x: 52.1, y: 51.3 },
  { n: 6, x: 48.2, y: 30.8 },
  { n: 7, x: 49.5, y: 45.8 },
  { n: 8, x: 46.9, y: 17.2 },
  { n: 9, x: 50.5, y: 14.3 },
  { n: 10, x: 50.7, y: 23.4 },
  { n: 11, x: 51.8, y: 39.2 },
  { n: 12, x: 51.8, y: 63.4 },
  { n: 13, x: 44.4, y: 82.4 },
];

const TEXTOS = {
  es: {
    puntos: "Puntos de escucha",
    titulo: "Audioguías",
    sub: "Buscá el número de cada punto de escucha y reproducí el audio correspondiente. Usá auriculares.",
  },
  en: {
    puntos: "Listening points",
    titulo: "Audio guides",
    sub: "Find the number of each listening point and play the matching audio. Use headphones.",
  },
};

function HeadphonesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5z" />
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z" />
    </svg>
  );
}

export default function Galeria() {
  const { lang } = useLanguage();
  const tx = TEXTOS[lang] || TEXTOS.es;

  // Al hacer clic en un punto del mapa, baja hasta su audio y lo resalta
  function irAlAudio(n) {
    const el = document.getElementById(`audio-${n}`);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    el.classList.add("is-flash");
    setTimeout(() => el.classList.remove("is-flash"), 1200);
  }

  return (
    <section className="audioguias">
      {/* ---------- Mapa ---------- */}
      <div className="audioguias__map">
        <img
          src={MAPA_IMG}
          alt=""
          className="audioguias__map-img"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
        <h2 className="audioguias__map-title">
          <HeadphonesIcon />
          {tx.puntos}
        </h2>

        {MARCADORES.map((m) => (
          <button
            key={m.n}
            type="button"
            className="audioguias__marker"
            style={{ left: `${m.x}%`, top: `${m.y}%` }}
            onClick={() => irAlAudio(m.n)}
            disabled={m.n > piezas.length}
            aria-label={`${tx.puntos} ${m.n}`}
          >
            {m.n}
          </button>
        ))}
      </div>

      {/* ---------- Título y audios ---------- */}
      <div className="audioguias__wrap">
        <div className="audioguias__head">
          <h1>{tx.titulo}</h1>
          <p>{tx.sub}</p>
        </div>

        <div className="audioguias__grid">
          {piezas.map((pieza, i) => (
            <PiezaCard key={pieza.id} pieza={pieza} numero={i + 1} />
          ))}
        </div>

        
      </div>
    </section>
  );
}