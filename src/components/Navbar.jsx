import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import LanguageSwitch from "./LanguageSwitch.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  // TODO: ajustar las rutas marcadas cuando existan las páginas reales.
  const mainLinks = [
    { to: "/quienes-somos", label: t.nav.asociacion },
    { to: "/historia", label: t.nav.laCasa },
    { to: "/", label: t.nav.centro }, // TODO: ¿audio guía / galería?
    { to: "/inmersiva", label: t.nav.inmersiva }, // TODO: página nueva
    { to: "/agenda", label: t.nav.agenda }, // TODO: página nueva
    { to: "/visita", label: t.nav.contacto },
  ];

  const close = () => setOpen(false);

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
            <Link key={link.label} to={link.to} className="navbar__link">
              {link.label}
            </Link>
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
            <Link key={link.label} to={link.to} onClick={close}>
              {link.label}
            </Link>
          ))}
          <LanguageSwitch />
        </nav>
      )}
    </header>
  );
}