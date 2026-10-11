import { Children, useCallback, useEffect, useRef, useState } from "react";

function ArrowIcon({ dir }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {dir === "left" ? (
        <>
          <path d="M19 12H5" />
          <path d="M11 6l-6 6 6 6" />
        </>
      ) : (
        <>
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </>
      )}
    </svg>
  );
}

// Ancho de un paso = ancho de una tarjeta + separación entre tarjetas
function getStep(el) {
  const first = el.firstElementChild;
  if (!first) return 0;
  const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
  return first.offsetWidth + gap;
}

export default function Carousel({ children, label }) {
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(1);
  const total = Children.count(children);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const step = getStep(el);
    if (!step) return;
    const max = el.scrollWidth - el.clientWidth;
    const pages = max > 2 ? Math.round(max / step) + 1 : 1;
    setCount(pages);
    setIndex(Math.min(pages - 1, Math.round(el.scrollLeft / step)));
  }, []);

  useEffect(() => {
    update();

    // Recalcula cuando cambia el tamaño del carrusel (no solo de la ventana)
    const el = trackRef.current;
    let observer;
    if (el && typeof ResizeObserver !== "undefined") {
      observer = new ResizeObserver(update);
      observer.observe(el);
    }
    window.addEventListener("resize", update);

    return () => {
      if (observer) observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, [update, total]);

  function goTo(i) {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const left = Math.min(Math.max(i, 0) * getStep(el), max);
    el.scrollTo({ left, behavior: "smooth" });
  }

  return (
    <div className="carousel" role="region" aria-label={label}>
      <div className="carousel__stage">
        <button
          type="button"
          className="carousel__arrow carousel__arrow--prev"
          onClick={() => goTo(index - 1)}
          disabled={index <= 0}
          aria-label="Anterior"
        >
          <ArrowIcon dir="left" />
        </button>

        <div className="carousel__track" ref={trackRef} onScroll={update}>
          {children}
        </div>

        <button
          type="button"
          className="carousel__arrow carousel__arrow--next"
          onClick={() => goTo(index + 1)}
          disabled={index >= count - 1}
          aria-label="Siguiente"
        >
          <ArrowIcon dir="right" />
        </button>
      </div>

      <div className="carousel__dots">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            className={`carousel__dot ${i === index ? "is-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Ir a la posición ${i + 1}`}
            aria-current={i === index}
          />
        ))}
      </div>
    </div>
  );
}