import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

const MAIL = "aacasa.mar.del.plata@gmail.com";
const TELEFONO = "+54 (223) 420-1280";
const INSTAGRAM_URL = "https://www.instagram.com/amigoscasasobreelarroyo/";
const INSTAGRAM_USER = "@amigoscasasobreelarroyo";
const FACEBOOK_URL =
  "https://www.facebook.com/p/Aacasa-Asociaci%C3%B3n-Amigos-Casa-sobre-el-Arroyo-100070926072640/";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Quintana+3998+Mar+del+Plata";
const ARCHIVO_URL = "https://monoambiente.com.ar/amanciowilliams/";
const MUNICIPALIDAD_URL = "https://www.mardelplata.gob.ar";
const DONAR_PATH = "/entradas"; // TODO: página real de donaciones
const DEV_LOGO = "/assets/footer/desarrollado-por.png"; // TODO: imagen del desarrollador

const svgBase = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

function InstagramIcon() {
  return (
    <svg {...svgBase} width="26" height="26">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8h2.7l.4-3.2h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.6V3.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1v2.3H7.6V13h2.7v8h3.2z" />
    </svg>
  );
}

function TicketIcon() {
  return (
    <svg {...svgBase} width="22" height="22">
      <path d="M4 9l5-5 11 11-5 5L4 9z" />
      <path d="M9 9l6 6" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg {...svgBase} width="22" height="22">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

function ExternalArrow() {
  return (
    <svg {...svgBase} width="14" height="14" strokeWidth="2">
      <path d="M7 17L17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function RightArrow() {
  return (
    <svg {...svgBase} width="18" height="18" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;

  return (
    <footer className="footer">
      <div className="footer__wrap">
        {/* ---------- Fila superior ---------- */}
        <div className="footer__top">
          <div className="footer__follow">
            <h2 className="footer__big">{f.seguinos}</h2>
            <div className="footer__social">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
            <span className="footer__handle">{INSTAGRAM_USER}</span>
          </div>

          <div className="footer__help">
            <h3>{f.ayudaTitulo}</h3>
            <p>{f.ayudaTexto}</p>
            <Link to={DONAR_PATH} className="footer__donate">
              <span>{f.donar}</span>
              <RightArrow />
            </Link>
          </div>
        </div>

        {/* ---------- Columnas ---------- */}
        <div className="footer__cols">
          <div className="footer__col">
            <h3 className="footer__title">
              <TicketIcon />
              {f.entradaTitulo}
            </h3>
            <p className="footer__text">{f.direccion}</p>

            <h3 className="footer__title footer__title--gap">
              <ClockIcon />
              {f.horariosTitulo}
            </h3>
            <p className="footer__text">{f.horarios}</p>
            <p className="footer__text">{f.visitas}</p>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">{f.contactoTitulo}</h3>
            <a href={`mailto:${MAIL}`} className="footer__link">
              {MAIL}
            </a>
            <span className="footer__text">{TELEFONO}</span>

            <h3 className="footer__title footer__title--gap">{f.comoLlegarTitulo}</h3>
            <p className="footer__text">{f.comoLlegarTexto}</p>
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__maps"
            >
              <PinIcon />
              <span>{f.mapsBoton}</span>
              <ExternalArrow />
            </a>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">{f.explora}</h3>
            <Link to="/inmersiva/audioguias" className="footer__link">{f.audioguias}</Link>
            <Link to="/historia/cronologia" className="footer__link">{f.cronologia}</Link>
            <Link to="/historia/galeria" className="footer__link">{f.galeria}</Link>
            <Link to="/historia" className="footer__link">{f.personalidades}</Link>
            <Link to="/quienes-somos" className="footer__link">{f.quienesSomos}</Link>

            <h3 className="footer__title footer__title--gap">{f.enlacesTitulo}</h3>
            <a href={ARCHIVO_URL} target="_blank" rel="noopener noreferrer" className="footer__link footer__link--ext">
              {f.archivo} <ExternalArrow />
            </a>
            <a href={MUNICIPALIDAD_URL} target="_blank" rel="noopener noreferrer" className="footer__link footer__link--ext">
              {f.municipalidad} <ExternalArrow />
            </a>
          </div>

          <div className="footer__col">
            <h3 className="footer__title">{f.agradTitulo}</h3>
            <p className="footer__text">{f.agradTexto}</p>
            <Link to="/asociacion/padrinazgos" className="footer__link footer__link--ext footer__link--gap">
              {f.conoce} <ExternalArrow />
            </Link>
          </div>
        </div>

        {/* ---------- Barra inferior ---------- */}
        <div className="footer__bottom">
          <span>{f.copy}</span>
          <div className="footer__dev">
            <span>{f.desarrollado}</span>
            <img src={DEV_LOGO} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}