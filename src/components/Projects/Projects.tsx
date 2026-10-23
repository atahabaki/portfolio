import { useTranslation } from "react-i18next";
import "./Projects.css";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id="projects">
      <h2>{t(($) => $["projects"])}</h2>
    </section>
  );
};

export default Projects;
