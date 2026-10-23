import { useTranslation } from "react-i18next";
import "./NavBar.css";

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <nav id="navbar">
      <ul>
        {[
          { label: t(($) => $["about"]), to: "#about", icon: "about" },
          { label: t(($) => $["projects"]), to: "#projects", icon: "projects" },
          { label: t(($) => $["experience"]), to: "#experience", icon: "work" },
          { label: t(($) => $["art"]), to: "#art", icon: "art" },
          { label: t(($) => $["blog"]), to: "https://blog.atahabaki.dev/", icon: "blog" },
          { label: t(($) => $["contact"]), to: "#contact", icon: "contact" },
        ].map(({ label, to, icon }) => (
          <li key={label}>
            <a href={to}>
              {label}
              <svg className="button-icon" role="presentation" aria-hidden="true">
                <use href={`/icons.svg#${icon}`}></use>
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
