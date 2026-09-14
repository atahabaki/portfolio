import { useTranslation } from "react-i18next";
import "./NavBar.css";

const NavBar = () => {
  const { t } = useTranslation();
  return (
    <nav id="navbar">
      <ul>
        {[
          { label: t(($) => $["about"]), to: "#about" },
          { label: t(($) => $["projects"]), to: "#projects" },
          { label: t(($) => $["experience"]), to: "#experience" },
          { label: t(($) => $["art"]), to: "#art" },
          { label: t(($) => $["blog"]), to: "" },
          { label: t(($) => $["contact"]), to: "#contact" },
        ].map(({ label, to }) => (
          <li key={label}>
            <a href={to}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
