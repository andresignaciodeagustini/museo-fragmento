// Contenido de las biografías, una entrada por persona (la clave es el slug de personas.js).
// Si una persona NO está acá, /historia/:slug sigue mostrando la página simple de siempre.
//
// hero: { src, alt, posicion, ajuste }
//   posicion = encuadre del recorte ("center 20%"), solo en modo normal
//   ajuste   = "contain" muestra la foto ENTERA (sin recortar) con fondo borroso a los costados
//
// Cada bloque: texto { es: [párrafos], en: [párrafos] } y, opcionalmente,
//   imagen:   { src, alt, pie, ancho }             → una imagen
//   imagenes: [{ src, alt, proporcion, posicion }] → varias imágenes apiladas
// En una imagen simple:
//   pie   = { es, en } texto chico debajo de la imagen (opcional)
//   ancho = ancho de la imagen dentro de su columna, ej. "62%" (opcional)
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

  "delfina-galvez-bunge": {
    anios: "1913–2014",
    subtitulo: {
      es: "Recuperar una autoría",
      en: "Recovering an authorship",
    },
    hero: {
      src: "/assets/Delfina/1.png",
      posicion: "center 45%",
      alt: {
        es: "Retrato de Delfina Gálvez Bunge",
        en: "Portrait of Delfina Gálvez Bunge",
      },
    },
    bloques: [
      {
        texto: {
          es: [
            "Delfina Gálvez Bunge (1913-2014) fue arquitecta y una de las mujeres pioneras de la arquitectura moderna argentina. Ingresó a la Facultad de Arquitectura de la Universidad de Buenos Aires en 1931 y allí conoció a Amancio Williams, con quien se casó en 1941. Durante los primeros años de su vida profesional trabajaron conjuntamente en diversos proyectos y desarrollaron una práctica en la que arquitectura, equipamiento y paisaje eran pensados de manera integrada.",
          ],
          en: [
            "Delfina Gálvez Bunge (1913-2014) was an architect and one of the pioneering women of Argentine modern architecture. She entered the Faculty of Architecture of the University of Buenos Aires in 1931, where she met Amancio Williams, whom she married in 1941. During the early years of her professional life they worked together on several projects and developed a practice in which architecture, furnishings and landscape were conceived as a whole.",
          ],
        },
        imagen: {
          src: "/assets/Delfina/3.jpg",
          alt: {
            es: "Delfina Gálvez Bunge junto a Amancio Williams",
            en: "Delfina Gálvez Bunge with Amancio Williams",
          },
        },
      },
      {
        texto: {
          es: [
            "Durante décadas, buena parte de la historiografía presentó la Casa sobre el Arroyo casi exclusivamente bajo el nombre de Amancio Williams. Sin embargo, investigaciones recientes han revisado esa lectura. La Encyclopédie de l'architecture nouvelle de Alberto Sartoris, publicada en 1948, registró distintos proyectos bajo la autoría conjunta «Amancio Williams et Delfina G. de Williams». Estudios académicos contemporáneos consideran a Delfina coautora de la Casa y han analizado precisamente el proceso por el cual su nombre fue omitido y luego reincorporado a la valoración patrimonial de la obra.",
          ],
          en: [
            "For decades, much of the historiography presented the House Over the Stream almost exclusively under the name of Amancio Williams. Recent research, however, has revised that reading. Alberto Sartoris's Encyclopédie de l'architecture nouvelle, published in 1948, recorded several projects under the joint authorship «Amancio Williams et Delfina G. de Williams». Contemporary academic studies regard Delfina as a co-author of the House and have analyzed precisely the process by which her name was omitted and later reincorporated into the heritage appraisal of the work.",
          ],
        },
        imagen: {
          src: "/assets/Delfina/4.jfif",
          alt: {
            es: "Delfina entre los andamios durante la construcción de la Casa",
            en: "Delfina among the scaffolding during the construction of the House",
          },
        },
      },
      {
        texto: {
          es: [
            "La cuestión requiere, al mismo tiempo, cierta delicadeza histórica: la propia Delfina tendió en entrevistas posteriores a minimizar su participación en varias obras de Amancio y, en el caso de la Casa, se atribuyó principalmente intervenciones relacionadas con el mobiliario y el jardín. Esa tensión entre su propio relato y la documentación contemporánea vuelve su figura especialmente interesante. Reconocerla hoy no significa inventar una autoría, sino volver sobre documentos que permiten comprender de manera más completa cómo se produjo la obra.",
          ],
          en: [
            "The question also calls for a certain historical delicacy: in later interviews Delfina herself tended to downplay her participation in several of Amancio's works and, in the case of the House, attributed to herself mainly interventions related to the furniture and the garden. That tension between her own account and the contemporary documentation makes her figure especially interesting. Recognizing her today does not mean inventing an authorship, but returning to documents that allow a fuller understanding of how the work came about.",
          ],
        },
        imagen: {
          src: "/assets/Delfina/5.png",
          ancho: "62%",
          alt: {
            es: "Tapa del libro «Delfina Bunge. Diarios íntimos de una época brillante», de Lucía Gálvez",
            en: "Cover of «Delfina Bunge. Diarios íntimos de una época brillante» by Lucía Gálvez",
          },
          pie: {
            es: "Delfina Bunge, madre de la arquitecta. Libro de Lucía Gálvez.",
            en: "Delfina Bunge, the architect's mother. Book by Lucía Gálvez.",
          },
        },
      },
    ],
  },

  "herman-clinckspoor": {
    subtitulo: {
      es: "Estudiar para poder preservar",
      en: "Studying in order to preserve",
    },
    hero: {
      src: "/assets/home/herman.png",
      posicion: "center 30%",
      alt: {
        es: "Herman Clinckspoor en el parque de la Casa sobre el Arroyo",
        en: "Herman Clinckspoor in the park of the House Over the Stream",
      },
    },
    bloques: [
      {
        texto: {
          es: [
            "La historia de la preservación de la Casa sobre el Arroyo no se explica únicamente a través de decretos, compras o restauraciones. También depende de personas que, mucho antes de que la recuperación fuera una política pública consolidada, comprendieron el valor excepcional del conjunto y dedicaron años a estudiarlo, registrarlo y defenderlo. Dentro de esa historia, la Asociación considera imprescindible recuperar la figura de Herman Clinckspoor y el trabajo sostenido que desarrolló junto con Graciela Di Iorio y otros especialistas vinculados con la conservación patrimonial.",
          ],
          en: [
            "The history of the preservation of the House Over the Stream cannot be explained only through decrees, purchases or restorations. It also depends on people who, long before recovery became a consolidated public policy, understood the exceptional value of the site and spent years studying, documenting and defending it. Within that history, the Association considers it essential to recover the figure of Herman Clinckspoor and the sustained work he carried out together with Graciela Di Iorio and other specialists in heritage conservation.",
          ],
        },
        imagen: {
          src: "/assets/Herman/1.png",
          alt: {
            es: "Retrato de Herman Clinckspoor",
            en: "Portrait of Herman Clinckspoor",
          },
        },
      },
      {
        texto: {
          es: [
            "Según la memoria y la documentación reunida por quienes trabajaron con él, Clinckspoor realizó durante décadas un estudio minucioso de la Casa: sus proporciones, geometrías, relaciones matemáticas, implantación, estructura, paisaje y lógica proyectual. Ese conocimiento acumulado permitió leer aspectos de la obra que no resultaban evidentes a simple vista y constituyó una base para pensar su conservación con fidelidad. Su aporte no debería presentarse solamente como el de un defensor apasionado del edificio, sino también como el de un investigador que produjo herramientas para comprenderlo.",
          ],
          en: [
            "According to the memory and documentation gathered by those who worked with him, Clinckspoor carried out a meticulous study of the House over several decades: its proportions, geometries, mathematical relationships, siting, structure, landscape and design logic. That accumulated knowledge made it possible to read aspects of the work that were not obvious at first sight and became a basis for thinking about its faithful conservation. His contribution should not be presented only as that of a passionate defender of the building, but also as that of a researcher who produced tools for understanding it.",
          ],
        },
        imagen: {
          src: "/assets/Herman/4.jpg",
          alt: {
            es: "Herman Clinckspoor en el campus",
            en: "Herman Clinckspoor on the campus",
          },
        },
      },
      {
        texto: {
          es: [
            "Su compromiso se extendió a la defensa de la integridad territorial y ambiental del conjunto. La Casa sobre el Arroyo no puede separarse del parque, del cauce del arroyo, del pabellón de servicio ni de las visuales y recorridos que construyen su experiencia. La preservación de esa unidad fue una batalla sostenida durante años frente al deterioro, el riesgo de fragmentación del terreno y la posibilidad de que el valor inmobiliario terminara imponiéndose sobre el patrimonial. En ese contexto, la acción de Clinckspoor adquiere una dimensión cívica: preservar significaba evitar que una obra irreemplazable terminara reducida a parcelas y recuerdos.",
          ],
          en: [
            "His commitment extended to defending the territorial and environmental integrity of the site. The House Over the Stream cannot be separated from the park, the course of the stream, the service pavilion or the views and routes that shape its experience. Preserving that unity was a battle fought for years against deterioration, the risk of the land being fragmented and the possibility that real estate value would end up prevailing over heritage value. In that context, Clinckspoor's action takes on a civic dimension: to preserve meant preventing an irreplaceable work from being reduced to lots and memories.",
          ],
        },
        imagen: {
          src: "/assets/Herman/6.png",
          alt: {
            es: "Herman Clinckspoor junto a un grupo de visitantes en el parque",
            en: "Herman Clinckspoor with a group of visitors in the park",
          },
        },
      },
    ],
  },
};

export default biografias;