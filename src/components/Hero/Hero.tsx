import { useTranslation } from "react-i18next";
import "./Hero.css";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section id="hero">
      <div className="center">
        <h1>
          <svg className="button-icon" role="presentation" aria-hidden="true">
            <use href={`/icons.svg#about`}></use>
          </svg>
          A. Taha Baki</h1>
        <h2>{t(($) => $["hatCollector"])}</h2>
        <p>{t(($) => $["everyProblem"])}</p>
      </div>
    </section>
  );
};

export default Hero;
