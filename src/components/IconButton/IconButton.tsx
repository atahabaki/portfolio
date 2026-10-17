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
    | "surface"
    | "surface-inverted"
    | "surface-variant"
    | "surface-variant-inverted"
    | "inverse-surface"
    | undefined;
  inline?: boolean;
  elevated?: boolean;
};

const IconButton = ({ to, icon, name, type, buttonType, inline, elevated }: IconButtonProps) => {
  return (
    <button className="icon-button" type={type}>
      <a
        href={to}
        className={`${buttonType} ${elevated ? "elevated" : ""}${inline ? "inline" : ""}`}
        target="_blank"
      >
        {inline ? name : null}
        <svg className="button-icon" role="presentation" aria-hidden="true">
          <use href={`/icons.svg#${icon}`}></use>
        </svg>
        {inline ? null : name}
      </a>
    </button>
  );
};

export default IconButton;
