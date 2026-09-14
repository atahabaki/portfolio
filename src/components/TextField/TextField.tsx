import { useState } from "react";
import "./TextField.css";

type TextFieldProps = {
  type?: string;
  name: string;
  placeholder: string;
  multiline?: boolean;
  onChange?: (
    e:
      | React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => void;
};

const TextField = ({ type, name, placeholder, multiline, onChange }: TextFieldProps) => {
  const [content, setContent] = useState("");
  const labelClassName = content.trim() === "" ? "" : "not-empty";
  const handleInputChange = (
    e:
      | React.ChangeEvent<HTMLTextAreaElement, HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ) => {
    setContent(e.target.value);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="textfield">
      <label className={labelClassName} htmlFor={name}>
        {placeholder}
      </label>
      {type === "text" && multiline ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={content}
          onChange={(e) => handleInputChange(e)}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={content}
          onChange={(e) => handleInputChange(e)}
        />
      )}
    </div>
  );
};
export default TextField;
