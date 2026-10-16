// Contenido de la cronología. Cada sección tiene título, texto (es/en) e imágenes.
//
// Cada imagen: { src, alt, pie, mitad, proporcion, posicion }
//   pie        = { es, en } texto chico debajo de la imagen
//   mitad      = true → la imagen ocupa la mitad del ancho (dos imágenes seguidas quedan lado a lado)
//   proporcion = ancho / alto del recuadro (opcional; si no se pone, se ve la imagen completa)
//   posicion   = encuadre del recorte cuando hay proporción ("center 30%")
//
// La última entrada (cierre) es un bloque de solo texto, sin imágenes.
export const cronologia = {
  titulo: {
    es: "Cronología de la Casa sobre el Arroyo",
    en: "Timeline of the House Over the Stream",
  },

  secciones: [
    {
      titulo: {
        es: "1942–1946 · El paisaje y la construcción",
        en: "1942–1946 · The landscape and the construction",
      },
      texto: {
        es: [
          "La historia de la Casa sobre el Arroyo comienza antes de su construcción. El predio, atravesado por el arroyo Las Chacras —curso de agua ligado a los orígenes de Mar del Plata—, formó parte de una extensa chacra que a comienzos del siglo XX fue transformada en un parque arbolado. En 1942 la familia Williams adquirió una primera hectárea y, algunos años después, incorporó una segunda. Sobre ese paisaje, Alberto Williams, compositor, pianista y pedagogo, encargó a su hijo Amancio Williams y a su nuera, la arquitecta Delfina Gálvez Bunge, una vivienda-estudio. El proyecto se desarrolló desde 1943 y la obra quedó terminada hacia 1945-1946. En lugar de corregir el terreno o eliminar el arroyo, los proyectistas convirtieron esas condiciones en el principio mismo de la arquitectura: la casa se elevó sobre un gran arco de hormigón, preservando la continuidad del suelo y del parque.",
        ],
        en: [
          "The history of the House Over the Stream begins before its construction. The grounds, crossed by the Las Chacras stream —a watercourse tied to the origins of Mar del Plata— were part of a large farm that in the early twentieth century was transformed into a wooded park. In 1942 the Williams family acquired a first hectare and, some years later, a second one. On that landscape, Alberto Williams, a composer, pianist and teacher, commissioned his son Amancio Williams and his daughter-in-law, the architect Delfina Gálvez Bunge, to design a house-studio. The project was developed from 1943 and the work was completed around 1945-1946. Instead of correcting the terrain or eliminating the stream, the designers turned those conditions into the very principle of the architecture: the house was raised on a great concrete arch, preserving the continuity of the ground and the park.",
        ],
      },
      imagenes: [
        {
          src: "/assets/Cronologia/1.jfif",
          mitad: true,
          proporcion: 1,
          alt: {
            es: "Cartel de obra con los nombres de Amancio Williams y Delfina G. Williams",
            en: "Construction sign with the names of Amancio Williams and Delfina G. Williams",
          },
          pie: {
            es: "Cartel de obra. Amancio Williams y Delfina G. Williams.",
            en: "Construction sign. Amancio Williams and Delfina G. Williams.",
          },
        },
        {
          src: "/assets/Cronologia/2.jpg",
          mitad: true,
          proporcion: 1,
          posicion: "center 40%",
          alt: {
            es: "Amancio Williams durante la construcción de la losa",
            en: "Amancio Williams during the construction of the slab",
          },
          pie: {
            es: "Amancio Williams durante la construcción de la losa.",
            en: "Amancio Williams during the construction of the slab.",
          },
        },
        {
          src: "/assets/Cronologia/3.jpg",
          proporcion: 1.6,
          posicion: "center 40%",
          alt: {
            es: "Excavación de los cimientos de la Casa",
            en: "Excavation of the foundations of the House",
          },
          pie: {
            es: "Excavación de cimientos.",
            en: "Excavation of the foundations.",
          },
        },
      ],
    },

    {
      titulo: {
        es: "1946–1977 · La casa habitada",
        en: "1946–1977 · The lived-in house",
      },
      texto: {
        es: [
          "Durante sus primeros años la Casa fue vivienda y espacio de trabajo de la familia Williams. Alberto pudo habitarla en la etapa final de su vida y utilizar allí su estudio musical. Tras su muerte, en 1952, la propiedad permaneció en la familia hasta su venta a Héctor Lago Beitía en 1968. A comienzos de la década de 1970 se instaló allí la emisora LU9 Radio Mar del Plata. Ese uso introdujo modificaciones funcionales y también dejó una huella decisiva en la memoria popular: el eslogan de la emisora, «desde la Casa del Puente, un puente hasta su casa», contribuyó a instalar el nombre con el que generaciones de marplatenses todavía la identifican, aunque Amancio Williams insistía en la denominación original: Casa sobre el Arroyo.",
        ],
        en: [
          "During its first years the House was the home and workspace of the Williams family. Alberto was able to live in it during the final stage of his life and use his music studio there. After his death in 1952, the property remained in the family until it was sold to Héctor Lago Beitía in 1968. In the early 1970s the radio station LU9 Radio Mar del Plata moved in. That use brought functional changes and also left a decisive mark on popular memory: the station's slogan, «from the Bridge House, a bridge to your home», helped establish the name by which generations of locals still know it, although Amancio Williams insisted on the original name: House Over the Stream.",
        ],
      },
      imagenes: [
        {
          src: "/assets/Cronologia/4.png",
          alt: {
            es: "Interior de la casa con el estudio musical y el comedor",
            en: "Interior of the house with the music studio and the dining room",
          },
          pie: {
            es: "Interior de la casa, con el estudio musical y el comedor.",
            en: "Interior of the house, with the music studio and the dining room.",
          },
        },
        {
          src: "/assets/Cronologia/5.png",
          alt: {
            es: "Terraza de la cubierta de la casa",
            en: "Terrace on the roof of the house",
          },
          pie: {
            es: "Terraza de la cubierta.",
            en: "Roof terrace.",
          },
        },
      ],
    },

    {
      titulo: {
        es: "1991–2004 · Deterioro y defensa patrimonial",
        en: "1991–2004 · Deterioration and heritage defense",
      },
      texto: {
        es: [
          "Después del cierre de la radio en 1977, la propiedad continuó siendo mantenida mientras vivió Lago Beitía. Su fallecimiento, en 1991, dio inicio a un largo proceso sucesorio. Durante esos años la Casa quedó expuesta al abandono, al vandalismo y a dos incendios; el segundo, ocurrido en 2004, destruyó buena parte de sus carpinterías. La supervivencia material del conjunto se volvió entonces inseparable de una larga lucha patrimonial. Investigadores, arquitectos, vecinos e instituciones insistieron en que no se trataba únicamente de conservar un edificio aislado: Casa, pabellón de servicio, arroyo, arbolado y extensión del terreno formaban una unidad.",
        ],
        en: [
          "After the radio station closed in 1977, the property continued to be maintained while Lago Beitía was alive. His death, in 1991, started a long probate process. During those years the House was exposed to neglect, vandalism and two fires; the second, in 2004, destroyed much of its woodwork. The material survival of the site then became inseparable from a long heritage struggle. Researchers, architects, neighbors and institutions insisted that it was not only a matter of preserving an isolated building: the House, the service pavilion, the stream, the trees and the extent of the land formed a single whole.",
        ],
      },
      imagenes: [
        {
          src: "/assets/Cronologia/6.jfif",
          alt: {
            es: "Interior de la casa tras el incendio de 2004",
            en: "Interior of the house after the 2004 fire",
          },
          pie: {
            es: "Interior tras el incendio de 2004.",
            en: "Interior after the 2004 fire.",
          },
        },
        {
          src: "/assets/Cronologia/7.jfif",
          alt: {
            es: "Ingreso de la casa vandalizado",
            en: "Vandalized entrance of the house",
          },
          pie: {
            es: "Ingreso vandalizado.",
            en: "Vandalized entrance.",
          },
        },
      ],
    },

    {
      titulo: {
        es: "2005–2023 · Recuperación y reapertura",
        en: "2005–2023 · Recovery and reopening",
      },
      texto: {
        es: [
          "En 2005 la Municipalidad de General Pueyrredón asumió mediante convenio tareas de tutela, seguridad y saneamiento. El proceso público avanzó en los años siguientes y, en diciembre de 2012, el municipio adquirió la fracción que contenía la vivienda-estudio y el pabellón de servicio, equivalente al 60 % de las dos hectáreas del conjunto, y creó el Museo Casa sobre el Arroyo. Durante 2013 y 2014 continuaron las gestiones destinadas a incorporar el sector restante. A partir de allí se sucedieron tareas de documentación, conservación y puesta en valor, hasta la restauración integral financiada por el Estado nacional, iniciada en 2021 y culminada con la reapertura pública de la Casa en abril de 2023.",
        ],
        en: [
          "In 2005 the Municipality of General Pueyrredón took on, through an agreement, tasks of guardianship, security and cleanup. The public process advanced in the following years and, in December 2012, the municipality acquired the portion containing the house-studio and the service pavilion, equivalent to 60% of the two hectares of the site, and created the House Over the Stream Museum. During 2013 and 2014, efforts continued to incorporate the remaining sector. From then on came documentation, conservation and enhancement work, up to the full restoration funded by the national government, begun in 2021 and completed with the public reopening of the House in April 2023.",
        ],
      },
      imagenes: [
        {
          src: "/assets/Cronologia/8.jfif",
          alt: {
            es: "Firma de un convenio frente a la Casa sobre el Arroyo",
            en: "Signing of an agreement in front of the House Over the Stream",
          },
          pie: {
            es: "Gestiones para la recuperación patrimonial.",
            en: "Efforts for the recovery of the heritage site.",
          },
        },
      ],
    },
  ],

  cierre: {
    titulo: {
      es: "Una historia de preservación colectiva",
      en: "A history of collective preservation",
    },
    texto: {
      es: [
        "La recuperación, sin embargo, no puede comprenderse únicamente como la historia de una obra pública reciente. Detrás de ella existe una continuidad de décadas de estudio, registro, militancia patrimonial y transmisión de conocimiento. En ese proceso resultan centrales figuras como Herman Clinckspoor y Graciela Di Iorio, junto con numerosos profesionales, vecinos e instituciones que sostuvieron la necesidad de preservar el conjunto y produjeron conocimiento indispensable para interpretarlo. La historia de la Casa es, por eso, también la historia de quienes evitaron que el deterioro y la fragmentación borraran una de las obras fundamentales de la arquitectura moderna argentina.",
      ],
      en: [
        "The recovery, however, cannot be understood only as the story of a recent public works project. Behind it lies a continuity of decades of study, documentation, heritage activism and transmission of knowledge. Central to that process are figures such as Herman Clinckspoor and Graciela Di Iorio, together with many professionals, neighbors and institutions who upheld the need to preserve the site and produced knowledge essential to interpret it. The history of the House is, for that reason, also the history of those who prevented deterioration and fragmentation from erasing one of the fundamental works of Argentine modern architecture.",
      ],
    },
  },
};

export default cronologia;