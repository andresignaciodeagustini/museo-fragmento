import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";
import Galeria from "./Galeria.jsx";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <section className="hero-full">
        <img src="/assets/1.jpg" alt="" className="hero-full__img" />
        <div className="hero-full__overlay" />
        <div className="hero-full__content">
          <h1>
            {t.hero.titulo}
            <span className="hero-full__lugar">{t.hero.lugar}</span>
          </h1>
          <p>{t.hero.texto}</p>
          <div className="hero__cta">
            <a href="#galeria" className="btn btn--solid">
              {t.hero.cta_galeria}
            </a>
            <Link to="/entradas" className="btn btn--outline">
              {t.hero.cta_entradas}
            </Link>
          </div>
        </div>
      </section>

      <Galeria embedded />
    </>
  );
}