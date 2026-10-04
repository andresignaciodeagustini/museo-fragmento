import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import LanguageSwitch from "./LanguageSwitch.jsx";

// TODO: reemplazar por la URL real de la tienda.
const TIENDA_URL = "#";

// Flechita hacia abajo (link principal con desplegable)
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

// Flechita hacia la derecha (cada item del panel desplegable)
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

function CartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 4h2l2.4 11h10.2l2-8H6.2" />
      <circle cx="9" cy="19.5" r="1.4" />
      <circle cx="17" cy="19.5" r="1.4" />
    </svg>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  // Fila inferior (blanca). Solo "Historia" tiene panel desplegable.
  const mainLinks = [
    { to: "/", label: t.nav.audioGuia },
    { to: "/galeria", label: t.nav.galeria },
    {
      to: "/historia",
      label: t.nav.casaArroyo,
      children: [
        { to: "/historia/cronologia", label: t.nav.cronologia },
        { to: "/historia/amancio-williams", label: t.nav.amancio },
        { to: "/historia/herman-clinckspoor", label: t.nav.herman },
        { to: "/historia/delfina-galvez-bunge", label: t.nav.delfina },
        { to: "/historia/alberto-williams", label: t.nav.alberto },
      ],
    },
    { to: "/quienes-somos", label: t.nav.quienesSomos },
    { to: "/visita", label: t.nav.informacion },
  ];

  const close = () => setOpen(false);

  // Al hacer clic en un item del panel, se le saca el foco para que el
  // panel se cierre (si no, :focus-within lo mantendría abierto).
  const blurOnClick = (e) => e.currentTarget.blur();

  return (
    <header className="navbar">
      <Link to="/" className="navbar__logo" onClick={close}>
        <img src="/assets/logo2.png" alt="Museo Fragmento" />
      </Link>

      <div className="navbar__links navbar__links--desktop navbar__right">
        {/* Fila superior (gris) */}
        <div className="navbar__top">
          <a
            href={TIENDA_URL}
            target="_blank"
            rel="noreferrer"
            className="navbar__shop"
          >
            <CartIcon />
            {t.nav.tienda}
          </a>
          <Link to="/entradas">{t.nav.donar}</Link>
          <LanguageSwitch />
        </div>

        {/* Fila inferior (blanca) */}
        <nav className="navbar__main">
          {mainLinks.map((link) => (
            <div key={link.label} className="navbar__item">
              <Link
                to={link.to}
                className="navbar__link"
                onClick={blurOnClick}
              >
                {link.label}
                {link.children && <Chevron />}
              </Link>

              {link.children && (
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
              )}
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
              {link.children &&
                link.children.map((child) => (
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
          <a href={TIENDA_URL} target="_blank" rel="noreferrer">
            {t.nav.tienda}
          </a>
          <Link to="/entradas" onClick={close}>
            {t.nav.donar}
          </Link>
          <LanguageSwitch />
        </nav>
      )}
    </header>
  );
}