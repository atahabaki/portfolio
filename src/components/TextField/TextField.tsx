import { useEffect, useState } from "react";
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
  const [labelClassName, setLabelClassName] = useState("");
  useEffect(() => {
    console.log(content.length);
    if (content.trim() === "") {
      setLabelClassName("");
    } else {
      setLabelClassName("not-empty");
    }
  }, [content]);

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
          onChange={(e) => {
            setContent(e.target.value);
            if (onChange != undefined) {
              onChange(e);
            }
          }}
        />
      ) : (
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            if (onChange != undefined) {
              onChange(e);
            }
          }}
        />
      )}
    </div>
  );
};
export default TextField;
