// Contenido de las biografías, una entrada por persona (la clave es el slug de personas.js).
// Si una persona NO está acá, /historia/:slug sigue mostrando la página simple de siempre.
//
// Cada bloque: texto { es: [párrafos], en: [párrafos] } y, opcionalmente,
//   imagen:   { src, alt }                         → una imagen
//   imagenes: [{ src, alt, proporcion, posicion }] → varias imágenes apiladas
// En imágenes apiladas:
//   proporcion = ancho / alto del recuadro (más alto el número = recuadro más bajo)
//   posicion   = encuadre del recorte ("center 0%" arriba ... "center 100%" abajo)
// La columna de imágenes alterna de lado sola: derecha, izquierda, derecha...
const biografias = {
  "alberto-williams": {
    anios: "1862–1952",
    subtitulo: {
      es: "Música, enseñanza y una casa para escuchar el paisaje",
      en: "Music, teaching and a house for listening to the landscape",
    },
    hero: {
      src: "/assets/Alberto/4.jpg",
      alt: {
        es: "Alberto Williams tocando el piano en la Casa sobre el Arroyo",
        en: "Alberto Williams playing the piano at the House Over the Stream",
      },
    },
    bloques: [
      {
        texto: {
          es: [
            "Alberto Williams (Buenos Aires, 1862-1952) fue compositor, pianista, pedagogo, editor y gestor cultural, y una de las figuras decisivas en la formación de una tradición musical académica argentina. Becado para estudiar en París, recibió una sólida formación europea y, a su regreso en 1889, comenzó a investigar ritmos y formas vinculados con las músicas del país. De esa búsqueda surgió una producción extraordinariamente extensa: nueve sinfonías, poemas sinfónicos, música de cámara, obras corales, canciones y centenares de composiciones para piano.",
          ],
          en: [
            "Alberto Williams (Buenos Aires, 1862-1952) was a composer, pianist, teacher, editor and cultural organizer, and one of the decisive figures in the formation of an Argentine academic musical tradition. Awarded a scholarship to study in Paris, he received a solid European training and, on his return in 1889, began to research rhythms and forms linked to the country's music. That search produced an extraordinarily extensive body of work: nine symphonies, symphonic poems, chamber music, choral works, songs and hundreds of piano compositions.",
          ],
        },
        imagen: {
          src: "/assets/Alberto/1.png",
          alt: {
            es: "Retrato de Alberto Williams",
            en: "Portrait of Alberto Williams",
          },
        },
      },
      {
        texto: {
          es: [
            "Su influencia excedió ampliamente la composición. Fundó y dirigió durante décadas el Conservatorio de Música de Buenos Aires, escribió materiales teóricos y didácticos y formó a varias generaciones de intérpretes y compositores. Su obra suele asociarse con el desarrollo del nacionalismo musical argentino por la manera en que integró procedimientos de la tradición académica europea con materiales y ritmos locales. Entre sus páginas más conocidas se encuentran El rancho abandonado y los Aires de la Pampa.",
          ],
          en: [
            "His influence went far beyond composition. For decades he founded and directed the Buenos Aires Conservatory of Music, wrote theoretical and teaching materials, and trained several generations of performers and composers. His work is often associated with the development of Argentine musical nationalism because of the way he combined techniques from the European academic tradition with local materials and rhythms. Among his best-known pieces are El rancho abandonado and Aires de la Pampa.",
          ],
        },
        imagen: {
          src: "/assets/Alberto/2.jpg",
          alt: {
            es: "Alberto Williams caminando por el parque",
            en: "Alberto Williams walking through the park",
          },
        },
      },
      {
        texto: {
          es: [
            "La Casa sobre el Arroyo debe entenderse también desde esa sensibilidad musical. Alberto encargó a su hijo Amancio y a Delfina Gálvez Bunge una vivienda-estudio en un parque atravesado por el arroyo Las Chacras. La arquitectura reservó un espacio específico para su piano y construyó una relación singular entre concentración, sonidos y naturaleza. Herman Clinckspoor ha señalado que la elección del punto exacto sobre el arroyo preservaba los árboles y, al mismo tiempo, situaba al compositor en uno de los sectores de mayor riqueza sonora del predio.",
          ],
          en: [
            "The House Over the Stream must also be understood through this musical sensibility. Alberto commissioned his son Amancio and Delfina Gálvez Bunge to design a house-studio in a park crossed by the Las Chacras stream. The architecture set aside a specific space for his piano and built a singular relationship between concentration, sound and nature. Herman Clinckspoor has pointed out that the exact spot chosen over the stream preserved the trees and, at the same time, placed the composer in one of the sonically richest areas of the grounds.",
          ],
        },
        imagen: {
          src: "/assets/Alberto/3.jpg",
          alt: {
            es: "Estampilla argentina de 6 pesos con el retrato de Alberto Williams, 1969",
            en: "Argentine 6-peso stamp with a portrait of Alberto Williams, 1969",
          },
        },
      },
    ],
  },

  "amancio-williams": {
    anios: "1913–1989",
    subtitulo: {
      es: "Arquitectura como vínculo entre padre, paisaje y vida",
      en: "Architecture as a bond between father, landscape and life",
    },
    hero: {
      src: "/assets/Amancio/6.jpg",
      alt: {
        es: "La Casa sobre el Arroyo, vista exterior",
        en: "The House Over the Stream, exterior view",
      },
    },
    bloques: [
      {
        texto: {
          es: [
            "Amancio Williams (1913-1989) ocupa un lugar central en la arquitectura moderna argentina, pero para comprender la Casa sobre el Arroyo conviene acercarse a él desde una dimensión más íntima. La obra nació de un encargo de su padre, Alberto Williams, y fue proyectada junto con Delfina Gálvez Bunge como una vivienda y estudio para un músico ya consagrado. En este caso, la experimentación arquitectónica no aparece separada de la vida familiar: el proyecto debía responder a una persona concreta, a su manera de trabajar, a su edad, a su relación con el piano y al paisaje que había elegido para vivir.",
          ],
          en: [
            "Amancio Williams (1913-1989) holds a central place in Argentine modern architecture, but to understand the House Over the Stream it helps to approach him from a more intimate angle. The work began as a commission from his father, Alberto Williams, and was designed together with Delfina Gálvez Bunge as a home and studio for an established musician. Here, architectural experimentation is not separate from family life: the project had to respond to a specific person, to his way of working, to his age, to his relationship with the piano and to the landscape he had chosen to live in.",
          ],
        },
        imagen: {
          src: "/assets/Amancio/1.jpg",
          alt: {
            es: "Amancio Williams dibujando en su mesa de trabajo",
            en: "Amancio Williams drawing at his work table",
          },
        },
      },
      {
        texto: {
          es: [
            "La Casa puede leerse, entonces, como una obra de enorme radicalidad técnica y al mismo tiempo como un gesto de atención filial. La organización lineal, la relación entre espacios públicos, privados y de trabajo, el lugar destinado al piano, la continuidad visual del parque y el modo de atravesar el arroyo convierten la experiencia cotidiana de Alberto en parte del proyecto. Incluso la decisión de elevar la vivienda sobre el curso de agua evita sacrificar los árboles del sector y transforma los sonidos y la presencia del paisaje en componentes de la arquitectura.",
          ],
          en: [
            "The House can therefore be read as a work of enormous technical radicalism and, at the same time, as a gesture of filial care. The linear organization, the relationship between public, private and working spaces, the place set aside for the piano, the visual continuity of the park and the way the house crosses the stream turn Alberto's daily experience into part of the project. Even the decision to raise the house above the watercourse avoids sacrificing the trees in the area and turns the sounds and presence of the landscape into components of the architecture.",
          ],
        },
        imagen: {
          src: "/assets/Amancio/3.jpg",
          alt: {
            es: "Amancio Williams reclinado en una mecedora",
            en: "Amancio Williams reclining in a rocking chair",
          },
        },
      },
      {
        texto: {
          es: [
            "Este enfoque permite comprender que la modernidad de Williams no consistía solamente en utilizar hormigón armado o desarrollar una forma estructural novedosa. Su búsqueda aspiraba a una arquitectura capaz de integrar técnica, paisaje, proporción, mobiliario y vida humana. En la Casa sobre el Arroyo, esa aspiración adquiere además una dimensión afectiva: el arquitecto diseña para su padre, músico y formador, y convierte el encargo familiar en una de las obras más reconocidas de su trayectoria.",
          ],
          en: [
            "This approach helps us understand that Williams's modernity did not lie only in using reinforced concrete or developing a novel structural form. His aim was an architecture capable of integrating technology, landscape, proportion, furniture and human life. In the House Over the Stream, that aspiration also takes on an emotional dimension: the architect designs for his father, a musician and teacher, and turns the family commission into one of the most recognized works of his career.",
          ],
        },
        imagenes: [
          {
            src: "/assets/Amancio/2.jpg",
            proporcion: 1.12,
            posicion: "center 45%",
            alt: {
              es: "Retrato de Amancio Williams junto a una escultura",
              en: "Portrait of Amancio Williams next to a sculpture",
            },
          },
          {
            src: "/assets/Amancio/5.jpg",
            proporcion: 1.36,
            posicion: "center 10%",
            alt: {
              es: "Amancio Williams al aire libre",
              en: "Amancio Williams outdoors",
            },
          },
        ],
      },
    ],
  },
};

export default biografias;