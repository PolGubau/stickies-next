import { ChangeEvent } from "react";
import { TextFieldStyled } from "./TextFieldStyled";
interface Props<T> {
  label?: string;
  name?: string;
  type?:
    | "text"
    | "number"
    | "password"
    | "email"
    | "date"
    | "time"
    | "file"
    | "tel";
  value?: T;
  onChange?: (value: T) => void;
  error?: string;
  className?: string;
  disabled?: boolean;
  required?: boolean;
  helperText?: string;
  size?: "small" | "normal" | "large";
  props?: Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof Props<T>>;
}

const TextField = <T extends string | number>({
  label,
  value,
  onChange,
  disabled,
  required,
  type = "text",
  error,
  helperText,
  className,
  size = "normal",
  ...props
}: Props<T>) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    let newValue: T = inputValue as T;

    if (type === "number") {
      newValue = Number(inputValue) as T;
      if (isNaN(newValue as number)) {
        newValue = "" as T;
      }
    }

    onChange(newValue);
  };
  return (
    <TextFieldStyled $hasValue={Boolean(value)} $size={size}>
      {Boolean(label) && <label className="label">{label}</label>}
      <input
        {...(props as Omit<
          React.InputHTMLAttributes<HTMLInputElement>,
          keyof Props<T>
        >)}
        type={type}
        required={required ?? false}
        disabled={disabled ?? false}
        className={
          "input " + className ??
          "" + (error ? "error" : "") + (disabled ? "disabled" : "")
        }
        value={value ?? ""}
        onChange={handleChange}
      />
      {Boolean(helperText) && <span>{helperText}</span>}
    </TextFieldStyled>
  );
};

export default TextField;
