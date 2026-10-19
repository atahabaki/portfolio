import { useTranslation } from "react-i18next";
import IconButton from "../IconButton/IconButton";
import "./Memorial.css";

const Memorial = () => {
  const { t } = useTranslation();
  return (
    <div id="memorial">
      <div>
        <a className="uppercase">{t(($) => $["momentOfRemembrance"])}</a>
        <h2>{t(($) => $["beforeContinue"])}</h2>
        <p>
          <IconButton
            icon="external-link"
            name="Anıt Sayaç"
            inline
            buttonType="primary-inverted"
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
        <a className="uppercase">{t(($) => $["responsibilityWeShare"])}</a>
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
          buttonType="primary-inverted"
          elevated
        />
      </div>
    </div>
  );
};

export default Memorial;
