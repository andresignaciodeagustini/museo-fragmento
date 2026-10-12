// Mismo formato que va a devolver el backend el día de mañana:
// no cambia el componente que consume esto, solo cambia de dónde viene.
//
// Imágenes en /public/assets/ (nombradas por número de archivo).
// Audios en /public/assets/audio/es/ y /public/assets/audio/en/
// con formato "esp N.mp3" y "eng N.mp3".

// Extensión real de cada imagen (la mayoría son .jpg, salvo estas)
const extensiones = {
  2: "png",
  7: "png",
  11: "jfif",
  12: "jfif",
};

// n: número de audio (el que se muestra y el del mapa)
// img: número de archivo de imagen en /public/assets/
const lista = [
  { n: 1,  img: 1,  es: "Cómo utilizar la audioguía",                en: "How to use the audio guide" },            // ⚠️ imagen provisoria
  { n: 2,  img: 1,  es: "El parque y el arroyo",                     en: "The park and the stream" },
  { n: 3,  img: 2,  es: "Una obra del movimiento moderno",           en: "A work of the Modern Movement" },
  { n: 4,  img: 3,  es: "Proporción, materiales y paisaje",          en: "Proportion, materials and landscape" },
  { n: 5,  img: 4,  es: "El ingreso y la escalera",                  en: "The entrance and the staircase" },
  { n: 6,  img: 5,  es: "El área pública",                           en: "The public area" },
  { n: 7,  img: 6,  es: "El estudio de Alberto Williams",            en: "Alberto Williams' studio" },
  { n: 8,  img: 7,  es: "El espacio de los fuegos",                  en: "The fireplace space" },
  { n: 9,  img: 8,  es: "El área privada",                           en: "The private area" },                     // ⚠️ imagen provisoria
  { n: 10, img: 9,  es: "Los dormitorios",                           en: "The bedrooms" },
  { n: 11, img: 10, es: "La cocina y el office",                     en: "The kitchen and pantry" },
  { n: 12, img: 11, es: "El pabellón de servicio",                   en: "The service pavilion" },
  { n: 13, img: 12, es: "La arquitectura del pabellón de servicio",  en: "The architecture of the service pavilion" },
];

const piezas = lista.map(({ n, img, es, en }) => {
  const num = String(n).padStart(2, "0");
  const ext = extensiones[img] || "jpg";

  return {
    id: `pieza-${num}`,
    imagen: `/assets/${img}.${ext}`,
    titulo: { es, en },
    descripcion: { es, en },
    audio: {
      es: `/assets/audio/es/esp ${n}.mp3`,
      en: `/assets/audio/en/eng ${n}.mp3`,
    },
  };
});

export default piezas;