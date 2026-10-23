import { useTranslation } from "react-i18next";
import "./Projects.css";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <section id="projects">
      <h2>
        <svg className="button-icon" role="presentation" aria-hidden="true">
          <use href={`/icons.svg#projects`}></use>
        </svg>
        {t(($) => $["projects"])}
      </h2>
    </section>
  );
};

export default Projects;
