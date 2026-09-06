// Mismo formato que va a devolver el backend el día de mañana:
// no cambia el componente que consume esto, solo cambia de dónde viene.
//
// Imágenes ubicadas en /public/assets/ (nombradas 1, 2, 3... según el número de obra).
// Audios ubicados en /public/assets/audio/es/ y /public/assets/audio/en/
// con formato "esp N.mp3" y "eng N.mp3".

// Extensión real de cada imagen (la mayoría son .jpg, salvo las excepciones abajo)
const extensiones = {
  2: "png",
  7: "png",
  11: "jfif",
  12: "jfif",
};

// Descripción de cada pieza (es / en)
const descripciones = {
  1: { es: "Contexto territorial", en: "Territorial context" },
  2: { es: "Relación arroyo-arquitectura (caja sobre arco)", en: "Stream-architecture relationship (box over arch)" },
  3: { es: "Apreciación de la simetría", en: "Appreciation of symmetry" },
  4: { es: "Leit motiv", en: "Leitmotif" },
  5: { es: "Espacio público", en: "Public space" },
  6: { es: "Estudio musical - comedor", en: "Music studio - dining room" },
  7: { es: "Área de fuegos", en: "Fireplace area" },
  8: { es: "Modulación y vanguardia baños", en: "Modulation and avant-garde bathrooms" },
  9: { es: "Dormitorios y lucarna", en: "Bedrooms and skylight" },
  10: { es: "Cocina", en: "Kitchen" },
  11: { es: "Pabellón de servicio", en: "Service pavilion" },
  12: { es: "Patio", en: "Patio / Courtyard" },
};

const piezas = Array.from({ length: 12 }, (_, i) => {
  const num = i + 1;
  const n = String(num).padStart(2, "0");
  const ext = extensiones[num] || "jpg";

  return {
    id: `pieza-${n}`,
    imagen: `/assets/${num}.${ext}`,
    titulo: {
      es: `Punto de escucha ${n}`,
      en: `Listening point ${n}`,
    },
    descripcion: descripciones[num],
    audio: {
      es: `/assets/audio/es/esp ${num}.mp3`,
      en: `/assets/audio/en/eng ${num}.mp3`,
    },
  };
});

export default piezas;