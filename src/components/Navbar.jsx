import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import LanguageSwitch from "./LanguageSwitch.jsx";

// Flechita hacia abajo (ítems del menú con desplegable)
function Chevron() {
  return (
    <svg
      className="chevron"
      viewBox="0 0 24 24"
      width="22"
      height="22"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path
        d="M7 10l5 5 5-5"
        fill="none"
        stroke="#000"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Flechita hacia la derecha (cada ítem del panel desplegable)
function ArrowCircle() {
  return (
    <svg
      className="arrow-circle"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path
        d="M10 7l5 5-5 5"
        fill="none"
        stroke="#000"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const mainLinks = [
    {
      to: "/quienes-somos",
      label: t.nav.asociacion,
      children: [
        { to: "/quienes-somos", label: t.nav.quienesSomos },
        { to: "/asociacion/comision-directiva", label: t.nav.comision },
        { to: "/asociacion/socios", label: t.nav.socios },
        { to: "/asociacion/padrinazgos", label: t.nav.padrinazgos },
      ],
    },
    {
      to: "/historia",
      label: t.nav.laCasa,
      children: [
        { to: "/historia/museo-de-sitio", label: t.nav.museoSitio },
        { to: "/historia/cronologia", label: t.nav.historiaCronologia },
        { to: "/historia", label: t.nav.personajes },
        { to: "/historia/investigaciones", label: t.nav.investigaciones },
        { to: "/historia/galeria", label: t.nav.galeria },
      ],
    },
    {
      to: "/centro",
      label: t.nav.centro,
      children: [
        { to: "/centro/laboratorio", label: t.nav.laboratorio },
        { to: "/centro/talleres", label: t.nav.talleres },
        { to: "/centro/visitas", label: t.nav.visitas },
      ],
    },
    {
      to: "/inmersiva/audioguias",
      label: t.nav.inmersiva,
      children: [
        { to: "/inmersiva/audioguias", label: t.nav.audioguiasPaisaje },
        { to: "/inmersiva/gemelo-digital", label: t.nav.gemelo },
        { to: "/inmersiva/accesibilidad", label: t.nav.accesibilidad },
      ],
    },
    {
      to: "/agenda",
      label: t.nav.agenda,
      children: [
        { to: "/agenda/eventos", label: t.nav.eventos },
        { to: "/agenda/noticias", label: t.nav.noticias },
      ],
    },
    {
      to: "/contacto/escribinos",
      label: t.nav.contacto,
      children: [
        { to: "/contacto/escribinos", label: t.nav.escribinos },
        { to: "/contacto/experiencia", label: t.nav.experiencia },
        { to: "/contacto/redes", label: t.nav.redes },
      ],
    },
  ];

  const close = () => setOpen(false);

  // Al hacer clic en un ítem del panel se le saca el foco para que el
  // panel se cierre (si no, :focus-within lo mantendría abierto).
  const blurOnClick = (e) => e.currentTarget.blur();

  return (
    <header className="navbar">
      <Link
        to="/"
        className="navbar__logo"
        onClick={close}
        aria-label="Asociación Amigos Casa sobre el Arroyo"
      >
        <img src="/assets/logo3.png" alt="" />
      </Link>

      <div className="navbar__links navbar__links--desktop navbar__right">
        {/* Fila superior: idiomas */}
        <div className="navbar__top">
          <LanguageSwitch />
        </div>

        {/* Fila inferior: menú */}
        <nav className="navbar__main">
          {mainLinks.map((link) => (
            <div key={link.label} className="navbar__item">
              <Link
                to={link.to}
                className="navbar__link"
                onClick={blurOnClick}
              >
                {link.label}
                <Chevron />
              </Link>

              <div className="navbar__dropdown">
                <div className="navbar__dropdown-grid">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.to}
                      className="navbar__dropdown-item"
                      onClick={blurOnClick}
                    >
                      <span>{child.label}</span>
                      <ArrowCircle />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>
      </div>

      <button
        className="navbar__burger"
        onClick={() => setOpen((v) => !v)}
        aria-label="Abrir menú"
        aria-expanded={open}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <nav className="navbar__links navbar__links--mobile">
          {mainLinks.map((link) => (
            <div key={link.label} className="navbar__mobile-group">
              <Link to={link.to} onClick={close}>
                {link.label}
              </Link>
              {link.children.map((child) => (
                <Link
                  key={child.label}
                  to={child.to}
                  onClick={close}
                  className="navbar__sub"
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
          <LanguageSwitch />
        </nav>
      )}
    </header>
  );
}