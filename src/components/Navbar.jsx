import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import LanguageSwitch from "./LanguageSwitch.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const links = [
    { to: "/", label: t.nav.inicio },
    { to: "/galeria", label: t.nav.galeria },
    { to: "/visita", label: t.nav.visita },
    { to: "/entradas", label: t.nav.entradas },
  ];

  return (
    <header className={`navbar ${isHome ? "navbar--overlay" : ""}`}>
      <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
        <img src="/assets/logo2.png" alt="Museo Fragmento" />
      </Link>

      <nav className="navbar__links navbar__links--desktop">
        {links.map((link) => (
          <Link key={link.to} to={link.to}>
            {link.label}
          </Link>
        ))}
        <LanguageSwitch />
      </nav>

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
          {links.map((link) => (
            <Link key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <LanguageSwitch />
        </nav>
      )}
    </header>
  );
}