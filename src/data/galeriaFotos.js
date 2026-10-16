// Contenido de la galería de fotos. El orden de la lista es el orden del carrusel y de la grilla.
//
// Cada foto: { src, titulo, miniatura, ajuste, posicion }
//   titulo    = { es, en } texto grande que aparece sobre la imagen principal
//   miniatura = { es, en } texto corto debajo de la miniatura (opcional; si no está, se usa el título)
//   ajuste    = "contain" muestra la foto entera sobre fondo negro (útil para planos o fotos verticales)
//               si no se pone, la foto llena el recuadro (recorte "cover")
//   posicion  = encuadre del recorte en modo cover ("center 40%")
export const galeriaFotos = {
  titulo: {
    es: "Galería de fotos",
    en: "Photo gallery",
  },
  subtitulo: {
    es: "Explorá la casa, sus espacios y el paisaje que la rodea. Seleccioná una imagen para verla en grande.",
    en: "Explore the house, its spaces and the landscape around it. Select an image to view it larger.",
  },

  fotos: [
    {
      src: "/assets/Galeria/1.jpg",
      titulo: {
        es: "La Casa sobre el Arroyo y su parque",
        en: "The House Over the Stream and its park",
      },
      miniatura: {
        es: "La casa y el parque",
        en: "The house and the park",
      },
    },
    {
      src: "/assets/Galeria/8.jpg",
      titulo: {
        es: "Vista exterior del conjunto",
        en: "Exterior view of the complex",
      },
    },
    {
      src: "/assets/Galeria/4.jpg",
      titulo: {
        es: "El arco y la vivienda",
        en: "The arch and the dwelling",
      },
    },
    {
      src: "/assets/Galeria/13.JPG",
      titulo: {
        es: "La casa al atardecer",
        en: "The house at dusk",
      },
    },
    {
      src: "/assets/Galeria/7.jpg",
      posicion: "center 40%",
      titulo: {
        es: "Arquitectura sobre el arroyo",
        en: "Architecture over the stream",
      },
    },
    {
      src: "/assets/Galeria/2.png",
      titulo: {
        es: "El puente del parque",
        en: "The park bridge",
      },
    },
    {
      src: "/assets/Galeria/0.jpg",
      ajuste: "contain",
      titulo: {
        es: "Planta y corte del proyecto",
        en: "Plan and section of the project",
      },
    },
    {
      src: "/assets/Galeria/3.jpg",
      titulo: {
        es: "Escalera vista desde el exterior",
        en: "Staircase seen from outside",
      },
    },
    {
      src: "/assets/Galeria/5.jpg",
      titulo: {
        es: "Escalera y espacio interior",
        en: "Staircase and interior space",
      },
    },
    {
      src: "/assets/Galeria/10.JPG",
      titulo: {
        es: "Espacio principal",
        en: "Main space",
      },
    },
    {
      src: "/assets/Galeria/11.JPG",
      titulo: {
        es: "La chimenea",
        en: "The fireplace",
      },
    },
    {
      src: "/assets/Galeria/12.JPG",
      titulo: {
        es: "El baño",
        en: "The bathroom",
      },
    },
    {
      src: "/assets/Galeria/9.JPG",
      titulo: {
        es: "Piano Blüthner",
        en: "Blüthner piano",
      },
    },
    {
      src: "/assets/Galeria/6.jpg",
      titulo: {
        es: "Pabellón de servicio",
        en: "Service pavilion",
      },
    },
  ],
};

export default galeriaFotos;