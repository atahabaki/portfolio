import { useTranslation } from "react-i18next";
import "./Hero.css";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div id="hero">
      <div className="center">
        <h1>A. Taha Baki</h1>
        <h2>{t(($) => $["hatCollector"])}</h2>
        <p>{t(($) => $["everyProblem"])}</p>
      </div>
    </div>
  );
};

export default Hero;
