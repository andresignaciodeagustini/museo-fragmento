// Contenido de las páginas institucionales, en español e inglés.
// Lo usa src/components/PaginaContenido/PaginaContenido.jsx.
//
// Para cargar una foto: completar "src" (por ejemplo "/assets/paginas/comision-1.jpg").
// Mientras "src" esté vacío se ve un recuadro gris de "Foto pendiente".
//
// Estructura de cada página:
//   hero        foto grande de arriba
//   migas       secciones intermedias del breadcrumb (Inicio / ... / título)
//   titulo, subtitulo
//   secciones   [{ titulo?, nota?, separar?, bloques: [...] }]
//   bloque      { texto: {es:[párrafos], en:[párrafos]}, imagen?, lado?: "izquierda",
//                 listas?, destacado? (párrafo final en negrita) }

const foto = (es, en) => ({ src: "", alt: { es, en } });

const LA_CASA = { to: "/historia", label: { es: "La Casa", en: "The House" } };
const QUIENES = {
  to: "/quienes-somos",
  label: { es: "Quiénes somos", en: "About us" },
};

/* =====================================================================
   QUIÉNES SOMOS
   ===================================================================== */
const quienesSomos = {
  hero: foto("Integrantes de AACASA en la Casa sobre el Arroyo", "AACASA members at the House over the Stream"),
  migas: [],
  titulo: { es: "Quiénes somos", en: "About us" },
  subtitulo: {
    es: "Asociación Amigos Casa sobre el Arroyo (AACASA)",
    en: "Friends of the House over the Stream Association (AACASA)",
  },
  secciones: [
    {
      bloques: [
        {
          texto: {
            es: [
              "La Asociación Amigos Casa sobre el Arroyo (AACASA) es una asociación civil sin fines de lucro, integrada por ciudadanos comprometidos con la preservación, valorización y difusión de uno de los conjuntos arquitectónicos y paisajísticos más significativos de la Argentina. Nos une la convicción de que la Casa sobre el Arroyo constituye un patrimonio excepcional, cuya importancia trasciende los límites de Mar del Plata y forma parte del legado cultural de la arquitectura moderna internacional.",
            ],
            en: [
              "The Friends of the House over the Stream Association (AACASA) is a non-profit civil association made up of citizens committed to the preservation, enhancement and promotion of one of the most significant architectural and landscape ensembles in Argentina. We are united by the conviction that the House over the Stream is an exceptional heritage site, whose importance goes beyond the limits of Mar del Plata and forms part of the cultural legacy of international modern architecture.",
            ],
          },
          imagen: foto("Visita guiada en el parque de la Casa", "Guided tour in the park of the House"),
        },
      ],
    },
    {
      separar: true,
      bloques: [
        {
          texto: {
            es: [
              "Nuestra Asociación se constituyó en 2012, en coincidencia con la adquisición del inmueble por parte de la Municipalidad de General Pueyrredon y la creación del Museo Casa del Puente. Desde entonces, acompañamos el proceso de recuperación y puesta en valor de este conjunto, promoviendo una participación ciudadana activa en su protección. Entendemos que conservar el patrimonio no significa únicamente preservar un edificio, sino también reconocer su historia, comprender su significado y garantizar que sus valores puedan transmitirse a las futuras generaciones.",
            ],
            en: [
              "Our Association was founded in 2012, at the same time as the Municipality of General Pueyrredon acquired the property and the Casa del Puente Museum was created. Since then, we have supported the recovery and enhancement of this ensemble, encouraging active public participation in its protection. We believe that conserving heritage does not only mean preserving a building, but also recognizing its history, understanding its meaning and ensuring that its values can be passed on to future generations.",
            ],
          },
          imagen: foto("Visitantes en el interior de la Casa", "Visitors inside the House"),
        },
      ],
    },
    {
      separar: true,
      bloques: [
        {
          texto: {
            es: [
              "La Casa sobre el Arroyo, proyectada por Amancio Williams y Delfina Gálvez Bunge y construida entre 1943 y 1945, representa una síntesis extraordinaria entre arquitectura, innovación técnica y naturaleza. Su estructura de hormigón armado, su implantación sobre el arroyo Las Chacras y su integración con el parque conforman una unidad inseparable. Desde AACASA defendemos una mirada integral de este patrimonio, que contempla tanto sus valores arquitectónicos e históricos como su dimensión ambiental, cultural y social.",
            ],
            en: [
              "The House over the Stream, designed by Amancio Williams and Delfina Gálvez Bunge and built between 1943 and 1945, is an extraordinary synthesis of architecture, technical innovation and nature. Its reinforced concrete structure, its placement over the Las Chacras stream and its integration with the park form an inseparable whole. At AACASA we defend a comprehensive view of this heritage, one that embraces both its architectural and historical values and its environmental, cultural and social dimensions.",
            ],
          },
          imagen: foto("Encuentro de la Asociación en el parque", "Association gathering in the park"),
        },
      ],
    },
    {
      separar: true,
      bloques: [
        {
          texto: {
            es: [
              "Somos un equipo multidisciplinario de personas que, desde el compromiso voluntario, aportamos conocimientos, experiencias y capacidades para fortalecer el vínculo entre la Casa y la comunidad. Acompañamos al Museo Casa sobre el Arroyo mediante iniciativas culturales y educativas, acciones de difusión, actividades de sensibilización patrimonial y proyectos que promueven nuevas formas de acercamiento al conjunto. También impulsamos la construcción de alianzas con instituciones, profesionales, empresas y organizaciones que comparten nuestro propósito de contribuir a su conservación y proyección.",
              "Creemos que el patrimonio adquiere su verdadero sentido cuando es conocido, comprendido y compartido. Por eso, nuestra tarea no se limita a acompañar la preservación material de la Casa: buscamos mantener viva su presencia en la memoria colectiva, estimular la investigación, favorecer el acceso al conocimiento y generar espacios de encuentro entre la arquitectura, la cultura, la educación y la ciudadanía. Aspiramos a que este lugar continúe siendo una fuente de inspiración, aprendizaje e identidad para Mar del Plata y para quienes lo descubren desde otras partes del mundo.",
            ],
            en: [
              "We are a multidisciplinary team of volunteers who contribute knowledge, experience and skills to strengthen the bond between the House and the community. We support the House over the Stream Museum through cultural and educational initiatives, outreach, heritage awareness activities and projects that promote new ways of engaging with the ensemble. We also build partnerships with institutions, professionals, companies and organizations that share our goal of contributing to its conservation and future.",
              "We believe heritage takes on its true meaning when it is known, understood and shared. That is why our work goes beyond supporting the physical preservation of the House: we seek to keep it alive in collective memory, encourage research, broaden access to knowledge and create meeting points between architecture, culture, education and citizens. We hope this place will continue to be a source of inspiration, learning and identity for Mar del Plata and for those who discover it from other parts of the world.",
            ],
          },
          destacado: {
            es: "Desde AACASA elegimos custodiar este legado con responsabilidad, respeto y compromiso colectivo. Porque la Casa sobre el Arroyo es parte de nuestra historia, pertenece a la comunidad y su futuro es una responsabilidad compartida.",
            en: "At AACASA we choose to safeguard this legacy with responsibility, respect and collective commitment. Because the House over the Stream is part of our history, it belongs to the community, and its future is a shared responsibility.",
          },
        },
      ],
    },
  ],
};

/* =====================================================================
   COMISIÓN DIRECTIVA
   ===================================================================== */
const comisionDirectiva = {
  hero: foto("Maqueta del conjunto Casa sobre el Arroyo", "Model of the House over the Stream ensemble"),
  migas: [QUIENES],
  titulo: { es: "Comisión Directiva", en: "Board of Directors" },
  subtitulo: {
    es: "Organización y autoridades de AACASA",
    en: "AACASA's organization and officers",
  },
  secciones: [
    {
      bloques: [
        {
          texto: {
            es: [
              "La Asociación Amigos Casa sobre el Arroyo (AACASA) está organizada como una asociación civil sin fines de lucro, cuya actividad se sostiene mediante el compromiso voluntario de sus integrantes. Su Comisión Directiva reúne a personas de distintas trayectorias profesionales y culturales que comparten el propósito de acompañar la preservación, investigación, valorización y difusión de la Casa sobre el Arroyo y su entorno natural.",
            ],
            en: [
              "The Friends of the House over the Stream Association (AACASA) is organized as a non-profit civil association whose activity is sustained by the volunteer commitment of its members. Its Board of Directors brings together people with different professional and cultural backgrounds who share the goal of supporting the preservation, research, enhancement and promotion of the House over the Stream and its natural surroundings.",
            ],
          },
          imagen: foto("Recorrido por el exterior de la Casa", "Tour of the exterior of the House"),
        },
        {
          texto: {
            es: [
              "La Comisión Directiva constituye el espacio de conducción institucional de la Asociación. Desde allí se coordinan iniciativas, se promueve la participación de los socios y se impulsan vínculos con organismos públicos, instituciones educativas, entidades culturales, profesionales y organizaciones de la sociedad civil. Esta tarea colectiva permite acompañar al Museo Casa sobre el Arroyo y desarrollar acciones destinadas a fortalecer su presencia en la vida cultural y comunitaria de Mar del Plata.",
              "La organización de AACASA se fundamenta en el trabajo colaborativo, la participación ciudadana y el compromiso con la conservación patrimonial. Sus integrantes aportan conocimientos, experiencias y tiempo para contribuir al desarrollo de proyectos culturales, educativos y de difusión, así como a la construcción de alianzas que favorezcan la continuidad y proyección de la Asociación.",
            ],
            en: [
              "The Board of Directors is the Association's governing body. From there, initiatives are coordinated, member participation is encouraged and ties are built with public agencies, educational institutions, cultural organizations, professionals and civil society groups. This collective work makes it possible to support the House over the Stream Museum and carry out actions that strengthen its presence in the cultural and community life of Mar del Plata.",
              "AACASA's organization is founded on collaborative work, citizen participation and a commitment to heritage conservation. Its members contribute knowledge, experience and time to develop cultural, educational and outreach projects, and to build partnerships that support the Association's continuity and growth.",
            ],
          },
        },
      ],
    },
    {
      separar: true,
      titulo: { es: "Autoridades y miembros", en: "Officers and members" },
      nota: {
        es: "Composición institucional consignada en el brochure AACASA 2025.",
        en: "Composition as listed in the AACASA 2025 brochure.",
      },
      bloques: [
        {
          listas: [
            {
              titulo: { es: "Autoridades", en: "Officers" },
              items: [
                { rol: { es: "Presidenta", en: "President" }, nombre: "Ana María Biasone" },
                { rol: { es: "Vicepresidenta", en: "Vice President" }, nombre: "Graciela Di Iorio" },
                { rol: { es: "Secretaria", en: "Secretary" }, nombre: "Cecilia Pallante" },
                { rol: { es: "Tesorero", en: "Treasurer" }, nombre: "Norberto Crotti" },
              ],
            },
            {
              titulo: { es: "Integrantes de la Comisión Directiva", en: "Board members" },
              items: [
                { nombre: "Rafael Felipe Oteriño" },
                { nombre: "Oscar Cañadas" },
                { nombre: "Florencia Panasci" },
                { nombre: "Jorge López Domaica" },
                { nombre: "Patricia Aleman" },
                { nombre: "Greta Clinckspoor" },
                { nombre: "Bárbara Taverna" },
              ],
            },
            {
              titulo: { es: "Socios honorarios", en: "Honorary members" },
              items: [
                { nombre: "María Haydeé Pérez Maraviglia" },
                { nombre: "Carlos Alberto Mantecón Maciel" },
              ],
            },
          ],
          imagen: foto("Galería vidriada del interior de la Casa", "Glazed gallery inside the House"),
        },
      ],
    },
    {
      separar: true,
      titulo: { es: "Un compromiso compartido", en: "A shared commitment" },
      bloques: [
        {
          texto: {
            es: [
              "Más allá de las responsabilidades institucionales, la Comisión Directiva representa el espíritu colectivo que dio origen a AACASA: la voluntad de ciudadanos que reconocen en la Casa sobre el Arroyo un patrimonio irreemplazable y asumen el compromiso de contribuir a su protección.",
              "Su labor busca fortalecer una Asociación abierta a la participación, al intercambio de conocimientos y a la construcción de proyectos compartidos, convencida de que la preservación del patrimonio requiere continuidad, cooperación y compromiso entre generaciones.",
            ],
            en: [
              "Beyond its institutional responsibilities, the Board of Directors embodies the collective spirit that gave rise to AACASA: the will of citizens who see the House over the Stream as an irreplaceable heritage site and commit to helping protect it.",
              "Its work seeks to strengthen an Association open to participation, to the exchange of knowledge and to shared projects, in the conviction that preserving heritage requires continuity, cooperation and commitment across generations.",
            ],
          },
          destacado: {
            es: "AACASA trabaja para que la Casa sobre el Arroyo siga siendo un patrimonio vivo, reconocido, accesible y valorado por toda la comunidad.",
            en: "AACASA works so that the House over the Stream remains a living heritage site, recognized, accessible and valued by the whole community.",
          },
        },
      ],
    },
  ],
};

/* =====================================================================
   ¿QUÉ ES UN MUSEO DE SITIO?
   ===================================================================== */
const museoSitio = {
  hero: foto("La Casa sobre el Arroyo y su bóveda sobre el arroyo", "The House over the Stream and its arch over the stream"),
  migas: [LA_CASA],
  titulo: { es: "¿Qué es un Museo de Sitio?", en: "What Is a Site Museum?" },
  subtitulo: {
    es: "Un patrimonio que se comprende desde su propio lugar",
    en: "Heritage understood from its own place",
  },
  secciones: [
    {
      bloques: [
        {
          texto: {
            es: [
              "Un Museo de Sitio es un espacio dedicado a la preservación, investigación, interpretación y difusión de un patrimonio cultural en el mismo lugar donde se originó o desarrolló su historia. A diferencia de los museos tradicionales, que suelen reunir colecciones y objetos procedentes de distintos lugares, un Museo de Sitio tiene como principal valor el vínculo entre el patrimonio y su entorno original. El edificio, el paisaje, los espacios, los objetos y las huellas del tiempo forman parte de una experiencia que permite comprender la historia desde el lugar donde ocurrió.",
            ],
            en: [
              "A site museum is a space devoted to the preservation, research, interpretation and promotion of cultural heritage in the very place where its history began or unfolded. Unlike traditional museums, which usually bring together collections and objects from different places, a site museum's main value lies in the bond between the heritage and its original setting. The building, the landscape, the spaces, the objects and the marks of time are all part of an experience that lets visitors understand history from the place where it happened.",
            ],
          },
          imagen: foto("Galería vidriada del interior de la Casa", "Glazed gallery inside the House"),
        },
        {
          texto: {
            es: [
              "Esta concepción del museo propone una relación directa entre el visitante y el patrimonio. No se trata solamente de observar una construcción o conocer acontecimientos históricos, sino de interpretar las relaciones que existen entre la arquitectura, las personas, la naturaleza y las transformaciones culturales de una sociedad. Cada elemento del conjunto contribuye a construir un relato que permite comprender su significado y reconocer los valores que justifican su conservación.",
              "Los Museos de Sitio cumplen, además, una función fundamental en la transmisión de la memoria colectiva. A través de la investigación, la documentación, las actividades educativas y las experiencias de interpretación, permiten que el conocimiento especializado se transforme en una experiencia accesible para toda la comunidad. Su misión no consiste únicamente en conservar aquello que ha llegado hasta el presente, sino también en generar conciencia sobre la importancia de protegerlo para las generaciones futuras.",
            ],
            en: [
              "This idea of the museum proposes a direct relationship between visitors and heritage. It is not only about looking at a building or learning about historical events, but about interpreting the relationships between architecture, people, nature and the cultural transformations of a society. Each element of the ensemble helps build a narrative that reveals its meaning and the values that justify its conservation.",
              "Site museums also play a key role in passing on collective memory. Through research, documentation, educational activities and interpretive experiences, they turn specialized knowledge into an experience accessible to the whole community. Their mission is not only to conserve what has survived to the present, but also to raise awareness of the importance of protecting it for future generations.",
            ],
          },
        },
      ],
    },
    {
      separar: true,
      titulo: {
        es: "La Casa sobre el Arroyo como Museo de Sitio",
        en: "The House over the Stream as a Site Museum",
      },
      bloques: [
        {
          lado: "izquierda",
          texto: {
            es: [
              "La Casa sobre el Arroyo, también conocida como Casa del Puente, constituye un ejemplo singular de esta concepción museológica. Ubicada en Mar del Plata, fue proyectada por los arquitectos Amancio Williams y Delfina Gálvez Bunge y construida entre 1943 y 1945 como vivienda-estudio para el compositor Alberto Williams y su esposa, Irma Paats. Considerada una de las obras más relevantes de la arquitectura moderna argentina, representa una propuesta innovadora que integra arquitectura, estructura, paisaje y naturaleza en una unidad excepcional.",
            ],
            en: [
              "The House over the Stream, also known as the Casa del Puente (Bridge House), is a unique example of this museum concept. Located in Mar del Plata, it was designed by architects Amancio Williams and Delfina Gálvez Bunge and built between 1943 and 1945 as a home and studio for the composer Alberto Williams and his wife, Irma Paats. Considered one of the most important works of modern Argentine architecture, it is an innovative proposal that brings architecture, structure, landscape and nature together in an exceptional whole.",
            ],
          },
          imagen: foto("La Casa entre la vegetación del parque", "The House among the park's vegetation"),
        },
        {
          texto: {
            es: [
              "Su condición de Museo de Sitio permite comprender que el valor patrimonial no reside exclusivamente en la vivienda. La estructura de hormigón armado que atraviesa el arroyo Las Chacras, el parque arbolado, el pabellón de servicio, los recorridos, las visuales y la relación entre los espacios interiores y exteriores forman parte de un mismo proyecto arquitectónico y paisajístico. Cada uno de estos componentes contribuye a explicar la concepción original de sus autores y la manera en que imaginaron una nueva relación entre el ser humano, la arquitectura y el ambiente natural.",
            ],
            en: [
              "Its status as a site museum shows that its heritage value does not lie in the house alone. The reinforced concrete structure spanning the Las Chacras stream, the wooded park, the service pavilion, the paths, the views and the relationship between indoor and outdoor spaces are all part of a single architectural and landscape project. Each of these components helps explain its authors' original vision and the way they imagined a new relationship between people, architecture and the natural environment.",
            ],
          },
          imagen: foto("Pabellón de servicio entre los árboles del parque", "Service pavilion among the park's trees"),
        },
        {
          texto: {
            es: [
              "La Casa fue concebida desde una profunda sensibilidad hacia el lugar. Su implantación buscó respetar la vegetación existente y establecer un diálogo con las características naturales del terreno. La célebre estructura curva que sostiene la vivienda permite atravesar el arroyo sin interrumpir la continuidad del paisaje, mientras que sus amplias superficies vidriadas incorporan visualmente el parque a los espacios interiores. Esta integración constituye uno de los principales valores de la obra y demuestra por qué su conservación requiere una mirada que abarque la totalidad del conjunto.",
            ],
            en: [
              "The House was conceived with deep sensitivity to its site. Its placement sought to respect the existing vegetation and to engage with the natural features of the terrain. The famous curved structure that supports the house spans the stream without interrupting the continuity of the landscape, while its large glazed surfaces visually bring the park into the interior. This integration is one of the work's greatest values and shows why its conservation requires a view that embraces the ensemble as a whole.",
            ],
          },
        },
      ],
    },
    {
      separar: true,
      titulo: {
        es: "Preservar el lugar, interpretar su historia",
        en: "Preserving the place, interpreting its history",
      },
      bloques: [
        {
          texto: {
            es: [
              "La transformación de la Casa sobre el Arroyo en un espacio museístico representa también el resultado de un prolongado proceso de reconocimiento, investigación y defensa patrimonial. Tras décadas de deterioro y distintas iniciativas destinadas a su protección, la adquisición por parte de la Municipalidad de General Pueyrredon en 2012 y el posterior proceso de restauración permitieron avanzar hacia su recuperación. El 2 de enero de 2024, el Museo Casa sobre el Arroyo volvió a abrir sus puertas al público, dando comienzo a una nueva etapa de encuentro entre este patrimonio y la comunidad.",
              "Como Museo de Sitio, la Casa ofrece la posibilidad de acercarse a diferentes dimensiones de su historia: la trayectoria de la familia Williams, el pensamiento arquitectónico de Amancio Williams y Delfina Gálvez Bunge, las innovaciones técnicas de su construcción, su relación con la música y el paisaje, y los procesos sociales e institucionales que hicieron posible su preservación. También invita a reflexionar sobre los desafíos que plantea la conservación de la arquitectura moderna y sobre la responsabilidad colectiva de proteger los bienes culturales.",
              "La investigación histórica y arquitectónica, la conservación de documentos y testimonios, las visitas interpretativas, las propuestas educativas y las herramientas digitales de acceso al conocimiento permiten ampliar las formas de experimentar este patrimonio. En este sentido, el museo no debe entenderse como un espacio detenido en el pasado, sino como una institución cultural activa, capaz de producir nuevos conocimientos, promover el diálogo entre disciplinas y construir vínculos con públicos diversos.",
            ],
            en: [
              "Turning the House over the Stream into a museum is also the result of a long process of recognition, research and heritage advocacy. After decades of deterioration and various efforts to protect it, its acquisition by the Municipality of General Pueyrredon in 2012 and the restoration that followed made its recovery possible. On January 2, 2024, the House over the Stream Museum reopened to the public, beginning a new stage of encounter between this heritage and the community.",
              "As a site museum, the House offers a way into the many dimensions of its history: the story of the Williams family, the architectural thinking of Amancio Williams and Delfina Gálvez Bunge, the technical innovations of its construction, its relationship with music and landscape, and the social and institutional processes that made its preservation possible. It also invites reflection on the challenges of conserving modern architecture and on our shared responsibility to protect cultural assets.",
              "Historical and architectural research, the conservation of documents and testimonies, interpretive tours, educational programs and digital tools for accessing knowledge all broaden the ways this heritage can be experienced. In this sense, the museum should not be seen as a place frozen in the past, but as an active cultural institution able to produce new knowledge, encourage dialogue between disciplines and build ties with diverse audiences.",
            ],
          },
        },
      ],
    },
  ],
};

/* =====================================================================
   INVESTIGACIONES E INTERVENCIONES
   ===================================================================== */
const investigador = (nombre, lado, es, en, extra) => ({
  separar: true,
  titulo: { es: nombre, en: nombre },
  bloques: [
    {
      lado,
      texto: { es, en },
      imagen: lado === null ? undefined : foto(nombre, nombre),
    },
    ...(extra ? [{ texto: extra }] : []),
  ],
});

const investigaciones = {
  hero: foto(
    "Plano de implantación de la Casa con trazados geométricos",
    "Site plan of the House with geometric tracings"
  ),
  migas: [LA_CASA],
  titulo: { es: "Investigaciones e intervenciones", en: "Research and interventions" },
  secciones: [
    {
      bloques: [
        {
          texto: {
            es: [
              "La Casa sobre el Arroyo es objeto de estudios que abordan su arquitectura, su singular estructura de hormigón armado, su relación con el paisaje, su historia y los desafíos de su conservación. La documentación de archivo, la investigación académica y el trabajo sostenido de especialistas permiten ampliar el conocimiento sobre este conjunto patrimonial y transmitir su valor a nuevas generaciones.",
            ],
            en: [
              "The House over the Stream is the subject of studies on its architecture, its unique reinforced concrete structure, its relationship with the landscape, its history and the challenges of its conservation. Archival documentation, academic research and the sustained work of specialists expand our knowledge of this heritage ensemble and help pass on its value to new generations.",
            ],
          },
        },
      ],
    },

    investigador(
      "Herman Clinckspoor",
      "derecha",
      [
        "La historia de la preservación de la Casa sobre el Arroyo no se explica únicamente a través de decretos, compras o restauraciones. También depende de personas que, mucho antes de que la recuperación fuera una política pública consolidada, comprendieron el valor excepcional del conjunto y dedicaron años a estudiarlo, registrarlo y defenderlo. Dentro de esa historia, la Asociación considera imprescindible recuperar la figura de Herman Clinckspoor y el trabajo sostenido que desarrolló junto con Graciela Di Iorio y otros especialistas vinculados con la conservación patrimonial.",
      ],
      [
        "The history of the preservation of the House over the Stream cannot be explained only through decrees, purchases or restorations. It also depends on people who, long before its recovery became established public policy, understood the ensemble's exceptional value and spent years studying, recording and defending it. Within that history, the Association considers it essential to recognize Herman Clinckspoor and the sustained work he carried out with Graciela Di Iorio and other heritage conservation specialists.",
      ],
      {
        es: [
          "Según la memoria y la documentación reunida por quienes trabajaron con él, Clinckspoor realizó durante décadas un estudio minucioso de la Casa: sus proporciones, geometrías, relaciones matemáticas, implantación, estructura, paisaje y lógica proyectual. Ese conocimiento acumulado permitió leer aspectos de la obra que no resultaban evidentes a simple vista y constituyó una base para pensar su conservación con fidelidad. Su aporte no debería presentarse solamente como el de un defensor apasionado del edificio, sino también como el de un investigador que produjo herramientas para comprenderlo.",
          "Su compromiso se extendió a la defensa de la integridad territorial y ambiental del conjunto. La Casa sobre el Arroyo no puede separarse del parque, del cauce del arroyo, del pabellón de servicio ni de las visuales y recorridos que construyen su experiencia. La preservación de esa unidad fue una batalla sostenida durante años frente al deterioro, el riesgo de fragmentación del terreno y la posibilidad de que el valor inmobiliario terminara imponiéndose sobre el patrimonial. En ese contexto, la acción de Clinckspoor adquiere una dimensión cívica: preservar significaba evitar que una obra irreemplazable terminara reducida a parcelas y recuerdos.",
        ],
        en: [
          "According to the memories and documentation gathered by those who worked with him, Clinckspoor spent decades carrying out a meticulous study of the House: its proportions, geometries, mathematical relationships, siting, structure, landscape and design logic. That accumulated knowledge made it possible to read aspects of the work that were not evident at first sight and provided a basis for planning its faithful conservation. His contribution should not be presented only as that of a passionate defender of the building, but also as that of a researcher who produced tools for understanding it.",
          "His commitment extended to defending the territorial and environmental integrity of the ensemble. The House over the Stream cannot be separated from the park, the streambed, the service pavilion or the views and paths that shape the experience of it. Preserving that unity was a battle fought for years against deterioration, the risk of the land being subdivided and the possibility that real estate value would prevail over heritage value. In that context, Clinckspoor's work takes on a civic dimension: preserving meant preventing an irreplaceable work from being reduced to plots of land and memories.",
        ],
      }
    ),

    investigador(
      "Graciela Di Iorio",
      "izquierda",
      [
        "La recuperación de la Casa sobre el Arroyo es el resultado de un largo proceso de investigación, compromiso institucional y trabajo sostenido que comenzó mucho antes de su restauración. En esa trayectoria, Graciela Di Iorio ocupa un lugar fundamental. Durante más de dos décadas, junto con Herman Clinckspoor y otros especialistas, dedicó una parte significativa de su labor profesional al estudio, la documentación y la defensa del conjunto patrimonial.",
      ],
      [
        "The recovery of the House over the Stream is the result of a long process of research, institutional commitment and sustained work that began well before its restoration. Graciela Di Iorio holds a central place in that story. For more than two decades, together with Herman Clinckspoor and other specialists, she devoted a significant part of her professional work to studying, documenting and defending the heritage ensemble.",
      ],
      {
        es: [
          "Su trabajo permitió reunir conocimientos, recuperar antecedentes históricos y construir una memoria documental indispensable para comprender la singularidad de la obra de Amancio Williams y Delfina Gálvez, así como la importancia de preservar su integridad arquitectónica, paisajística y cultural.",
          "Su compromiso adquirió una nueva dimensión desde la gestión pública. A partir de su designación como directora de la Casa sobre el Arroyo durante la intendencia de Gustavo Pulti, Di Iorio impulsó un trabajo sistemático de recopilación, organización y digitalización de archivos, planos, investigaciones y documentación histórica. Su experiencia en el ámbito cultural, su capacidad de articulación institucional y el vínculo construido con investigadores, profesionales y organismos especializados contribuyeron a transformar décadas de conocimiento acumulado en herramientas concretas para la conservación. Esta tarea, muchas veces silenciosa y alejada de la visibilidad pública, permitió consolidar una base documental y técnica esencial para fundamentar y orientar las futuras intervenciones sobre el edificio.",
          "La restauración y recuperación de la Casa sobre el Arroyo constituyen también la culminación de ese esfuerzo colectivo, sostenido a través de distintas etapas y gestiones. El trabajo previo de Di Iorio fue decisivo para generar las condiciones de conocimiento, documentación y articulación necesarias para avanzar hacia una intervención integral. Su trayectoria encontró continuidad en el trabajo institucional desarrollado junto con Magalí Marazzo, cuya participación desde la gestión cultural contribuyó a concretar la recuperación del conjunto. Reconocer el aporte de Graciela Di Iorio significa, en definitiva, reconocer que la preservación del patrimonio no comienza cuando se inicia una obra de restauración, sino mucho antes: cuando alguien asume la responsabilidad de investigarlo, comprenderlo, defenderlo y construir las condiciones para que su recuperación sea posible.",
        ],
        en: [
          "Her work brought together knowledge, recovered historical records and built a documentary memory essential for understanding the uniqueness of Amancio Williams and Delfina Gálvez's work, as well as the importance of preserving its architectural, landscape and cultural integrity.",
          "Her commitment took on a new dimension in public office. After being appointed director of the House over the Stream during Mayor Gustavo Pulti's administration, Di Iorio led a systematic effort to collect, organize and digitize archives, plans, research and historical documentation. Her experience in the cultural field, her ability to bring institutions together and the ties she built with researchers, professionals and specialized agencies helped turn decades of accumulated knowledge into concrete conservation tools. This work, often quiet and far from public view, consolidated an essential documentary and technical foundation to support and guide future interventions on the building.",
          "The restoration and recovery of the House over the Stream are also the culmination of that collective effort, sustained across different stages and administrations. Di Iorio's earlier work was decisive in creating the knowledge, documentation and coordination needed to move toward a comprehensive intervention. Her path continued in the institutional work carried out with Magalí Marazzo, whose role in cultural management helped bring about the recovery of the ensemble. Recognizing Graciela Di Iorio's contribution ultimately means recognizing that heritage preservation does not begin when restoration work starts, but much earlier: when someone takes on the responsibility of researching it, understanding it, defending it and creating the conditions that make its recovery possible.",
        ],
      }
    ),

    investigador(
      "Marcelo Gardinetti",
      "derecha",
      [
        "El arquitecto Marcelo Gardinetti publicó en 2026 el ensayo Casa sobre el Arroyo: tectónica del paisaje, experiencia y temporalidad. Su análisis relaciona la estructura de hormigón, la experiencia espacial y la transformación del entorno natural. En particular, examina cómo el entubamiento del arroyo Las Chacras modifica la percepción del lugar y convierte parte de su experiencia original en memoria. Esta lectura contemporánea invita a comprender la casa no solo como objeto arquitectónico, sino también como una relación entre técnica, paisaje y tiempo.",
      ],
      [
        "In 2026, architect Marcelo Gardinetti published the essay Casa sobre el Arroyo: tectónica del paisaje, experiencia y temporalidad (House over the Stream: landscape tectonics, experience and temporality). His analysis links the concrete structure, the spatial experience and the transformation of the natural surroundings. In particular, he examines how piping the Las Chacras stream underground changes the perception of the place and turns part of its original experience into memory. This contemporary reading invites us to understand the house not only as an architectural object, but also as a relationship between technique, landscape and time.",
      ]
    ),

    investigador(
      "Daniel Merro Johnston",
      "izquierda",
      [
        "El arquitecto Daniel Merro Johnston dedicó una investigación histórica y arquitectónica a la Casa sobre el Arroyo, publicada en 2014 bajo el título La Casa sobre el Arroyo: Amancio Williams en Argentina. A partir de documentos originales, correspondencia y testimonios, reconstruyó las circunstancias culturales y técnicas del proyecto y de su construcción. Junto con Juan Ignacio Rey Rey, estudió además el comportamiento estructural de la vivienda y los problemas que obligaron a rehacer parte de la bóveda durante la obra. Su trabajo ofrece una mirada documentada sobre el proceso creativo y constructivo de uno de los ejemplos más reconocidos de la arquitectura moderna argentina.",
      ],
      [
        "Architect Daniel Merro Johnston devoted a historical and architectural study to the House over the Stream, published in 2014 as La Casa sobre el Arroyo: Amancio Williams en Argentina. Drawing on original documents, correspondence and testimonies, he reconstructed the cultural and technical circumstances of the project and its construction. Together with Juan Ignacio Rey Rey, he also studied the structural behavior of the house and the problems that made it necessary to rebuild part of the arch during construction. His work offers a well-documented view of the creative and building process behind one of the best-known examples of modern Argentine architecture.",
      ]
    ),

    investigador(
      "Pablo Mastropasqua",
      "derecha",
      [
        "El arquitecto Pablo Mastropasqua ha abordado la situación patrimonial de la Casa sobre el Arroyo y las perspectivas de su recuperación. Su trabajo Casa sobre el Arroyo. Situación y perspectivas de su puesta en valor se inscribe en el debate sobre la conservación de la arquitectura moderna y la responsabilidad de las instituciones en su protección. A través de intervenciones públicas y aportes profesionales, sostuvo la importancia de avanzar en una restauración integral, acompañada por criterios técnicos y una visión de largo plazo para el conjunto.",
      ],
      [
        "Architect Pablo Mastropasqua has examined the heritage status of the House over the Stream and the prospects for its recovery. His work Casa sobre el Arroyo. Situación y perspectivas de su puesta en valor (House over the Stream: current situation and prospects for its restoration) is part of the debate on conserving modern architecture and on the responsibility of institutions to protect it. Through public statements and professional contributions, he argued for a comprehensive restoration guided by technical criteria and a long-term vision for the ensemble.",
      ]
    ),

    investigador(
      "Mario Boris Pangos",
      "izquierda",
      [
        "El arquitecto paisajista Mario Boris Pangos investigó el conjunto desde la perspectiva del paisaje cultural. En su trabajo Sitio, Casa sobre el Arroyo. Apuntes para la preservación del conjunto, propone considerar el parque, la topografía y la relación histórica entre arquitectura y naturaleza como dimensiones inseparables del valor patrimonial. Su enfoque amplía la mirada más allá del edificio y subraya la necesidad de estudiar, proteger y gestionar el sitio en su totalidad, reconociendo al entorno como parte esencial de la experiencia concebida por Amancio Williams y Delfina Gálvez.",
      ],
      [
        "Landscape architect Mario Boris Pangos studied the ensemble from the perspective of cultural landscape. In his work Sitio, Casa sobre el Arroyo. Apuntes para la preservación del conjunto (Site, House over the Stream: notes for the preservation of the ensemble), he proposes treating the park, the topography and the historical relationship between architecture and nature as inseparable dimensions of its heritage value. His approach looks beyond the building and stresses the need to study, protect and manage the site as a whole, recognizing the surroundings as an essential part of the experience conceived by Amancio Williams and Delfina Gálvez.",
      ]
    ),

    investigador(
      "Juan Ignacio Rey Rey",
      null,
      [
        "Juan Ignacio Rey Rey, junto con Daniel Merro Johnston, es autor de La estructura de la Casa sobre el Arroyo, investigación presentada en 2013. El estudio analiza el diseño resistente de la vivienda y revisa documentación del Archivo Williams para explicar las dificultades técnicas surgidas durante su ejecución, incluidas las desviaciones geométricas que llevaron a demoler y reconstruir parte de la estructura. Este aporte permite comprender la relación entre la ambición formal del proyecto, el cálculo y las exigencias concretas de su materialización.",
      ],
      [
        "Juan Ignacio Rey Rey, together with Daniel Merro Johnston, is the author of La estructura de la Casa sobre el Arroyo (The structure of the House over the Stream), a study presented in 2013. It analyzes the structural design of the house and reviews documents from the Williams Archive to explain the technical difficulties that arose during construction, including the geometric deviations that led to part of the structure being demolished and rebuilt. This contribution sheds light on the relationship between the project's formal ambition, its structural calculations and the practical demands of building it.",
      ]
    ),
  ],
};

const paginas = {
  quienesSomos,
  comisionDirectiva,
  museoSitio,
  investigaciones,
};

export default paginas;
