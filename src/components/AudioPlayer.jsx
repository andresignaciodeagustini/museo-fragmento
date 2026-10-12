import { useRef, useState } from "react";
import { useLanguage } from "../context/LanguageContext.jsx";

function fmt(s) {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${String(sec).padStart(2, "0")}`;
}

function Player({ src }) {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [muted, setMuted] = useState(false);

  const pct = duration ? (current / duration) * 100 : 0;

  function togglePlay() {
    const el = audioRef.current;
    if (!el) return;
    if (el.paused) el.play();
    else el.pause();
  }

  // Un solo audio a la vez: al reproducir uno se pausan los demás
  function handlePlay() {
    const el = audioRef.current;
    document.querySelectorAll("audio").forEach((a) => {
      if (a !== el) a.pause();
    });
    setPlaying(true);
  }

  function handleSeek(e) {
    const el = audioRef.current;
    if (!el) return;
    el.currentTime = Number(e.target.value);
    setCurrent(el.currentTime);
  }

  function toggleMute() {
    const el = audioRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
  }

  return (
    <div className="audio-player2">
      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setCurrent(e.currentTarget.currentTime)}
        onPlay={handlePlay}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
      />

      <button
        type="button"
        className="audio-player2__play"
        onClick={togglePlay}
        aria-label={playing ? "Pausar" : "Reproducir"}
      >
        {playing ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="7 4 20 12 7 20 7 4" />
          </svg>
        )}
      </button>

      <span className="audio-player2__time">{fmt(current)}</span>

      <input
        type="range"
        className="audio-player2__bar"
        min="0"
        max={duration || 0}
        step="0.1"
        value={current}
        onChange={handleSeek}
        style={{ "--pct": `${pct}%` }}
        aria-label="Progreso"
      />

      <button
        type="button"
        className="audio-player2__vol"
        onClick={toggleMute}
        aria-label={muted ? "Activar sonido" : "Silenciar"}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          {muted ? (
            <>
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </>
          ) : (
            <>
              <path d="M15.5 8.5a5 5 0 0 1 0 7" />
              <path d="M19 5a10 10 0 0 1 0 14" />
            </>
          )}
        </svg>
      </button>
    </div>
  );
}

// Recibe { es: "url", en: "url" } y reproduce el que corresponde al idioma
// activo. El reproductor se remonta al cambiar "src" para cargar el archivo
// correcto y reiniciar el tiempo.
export default function AudioPlayer({ audio }) {
  const { lang } = useLanguage();
  const src = audio[lang];

  return <Player key={src} src={src} />;
}