// Imágenes en /public/assets/
// Audios en /public/assets/audio/es/ y /public/assets/audio/en/
// con formato "esp N.mp3" y "eng N.mp3".

const lista = [
  { n: 1,  img: "1.jpg",                                            es: "Cómo utilizar la audioguía",               en: "How to use the audio guide" },
  { n: 2,  img: "2- El parque y el arroyo.jpg",                     es: "El parque y el arroyo",                    en: "The park and the stream" },
  { n: 3,  img: "3- Una obra del movimiento moderno.jpg",           es: "Una obra del movimiento moderno",          en: "A work of the Modern Movement" },
  { n: 4,  img: "4- Proporción, materiales y paisaje.jpg",          es: "Proporción, materiales y paisaje",         en: "Proportion, materials and landscape" },
  { n: 5,  img: "5- El ingreso y la escalera.jfif",                 es: "El ingreso y la escalera",                 en: "The entrance and the staircase" },
  { n: 6,  img: "6- El área pública.JPG",                           es: "El área pública",                          en: "The public area" },
  { n: 7,  img: "7- El estudio de Alberto Williams.jfif",           es: "El estudio de Alberto Williams",           en: "Alberto Williams' studio" },
  { n: 8,  img: "8- El espacio de los fuegos.jfif",                 es: "El espacio de los fuegos",                 en: "The fireplace space" },
  { n: 9,  img: "9- El área privada.jfif",                          es: "El área privada",                          en: "The private area" },
  { n: 10, img: "10- Los dormitorios.png",                          es: "Los dormitorios",                          en: "The bedrooms" },
  { n: 11, img: "11- La cocina y el office.png",                    es: "La cocina y el office",                    en: "The kitchen and pantry" },
  { n: 12, img: "12- El pabellón de servicio.png",                  es: "El pabellón de servicio",                  en: "The service pavilion" },
  { n: 13, img: "13- La arquitectura del pabellón de servicio.png", es: "La arquitectura del pabellón de servicio", en: "The architecture of the service pavilion" },
];

const piezas = lista.map(({ n, img, es, en }) => {
  const num = String(n).padStart(2, "0");

  return {
    id: `pieza-${num}`,
    imagen: encodeURI(`/assets/${img}`),
    titulo: { es, en },
    descripcion: { es, en },
    audio: {
      es: `/assets/audio/es/esp ${n}.mp3`,
      en: `/assets/audio/en/eng ${n}.mp3`,
    },
  };
});

export default piezas;