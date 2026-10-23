import "./Footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <section id="footer">
      <p className="footer">{t(($) => $["footer"])}</p>
    </section>
  );
};

export default Footer;
