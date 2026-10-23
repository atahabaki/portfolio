import { useTranslation } from "react-i18next";
import IconButton from "../IconButton/IconButton";
import "./Memorial.css";

const Memorial = () => {
  const { t } = useTranslation();
  return (
    <section id="memorial">
      <h3 className="uppercase">{t(($) => $["momentOfRemembrance"])}</h3>
      <h2>{t(($) => $["beforeContinue"])}</h2>
      <p>
        <IconButton
          icon="external-link"
          name="Anıt Sayaç"
          inline
          buttonType="secondary"
          to="https://anitsayac.com/"
          type="button"
        />
        {t(($) => $["whatIsAnitSayac"])}
      </p>
      <p>
        <b>{t(($) => $["rememberHonor"])}</b>
      </p>
      <p>
        <em>{t(($) => $["mayRemembrance"])}</em>
      </p>
      <hr />
      <h3 className="uppercase">{t(($) => $["responsibilityWeShare"])}</h3>
      <h2>{t(($) => $["teachThem"])}</h2>
      <p>{t(($) => $["no1HasTheRight"])}</p>
      <p>
        <b>{t(($) => $["saferFuture"])}</b>
      </p>
      <p>{t(($) => $["rememberTheLoss"])}</p>
      <IconButton
        icon="external-link"
        name={t(($) => $["visitAnitSayac"])}
        to="https://anitsayac.com/"
        type="button"
        buttonType="secondary-inverted"
        elevated
      />
    </section>
  );
};

export default Memorial;
