import "./IconButton.css";

type IconButtonProps = {
  to?: string;
  icon?: string;
  name?: string;
  type?: "submit" | "reset" | "button" | undefined;
  buttonType?:
    | "primary"
    | "primary-inverted"
    | "secondary"
    | "secondary-inverted"
    | "tertiary"
    | "tertiary-inverted"
    | undefined;
  elevated?: boolean;
};

const IconButton = ({ to, icon, name, type, buttonType, elevated }: IconButtonProps) => {
  return (
    <button className="icon-button" type={type}>
      <a href={to} className={`${buttonType} ${elevated ? "elevated" : ""}`} target="_blank">
        <svg className="button-icon" role="presentation" aria-hidden="true">
          <use href={`/icons.svg#${icon}`}></use>
        </svg>
        {name}
      </a>
    </button>
  );
};

export default IconButton;
