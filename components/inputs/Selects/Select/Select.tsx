import { SelectStyled } from "./SelectStyled";

interface Props {
  label?: string;
  options: { label: string; value: string }[];
  name?: string;
  value: string;
  onChange?: (value: string) => void;
  error?: string;
  className?: string;
  disabled?: boolean;
  helperText?: string;
  size?: "small" | "normal" | "large";
  props?: Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof Props>;
}

const Select: React.FC<Props> = ({
  label,
  options,
  value,
  onChange,
  disabled,
  error,
  helperText,
  className,
  size = "normal",
  ...props
}) => {
  return (
    <SelectStyled
      $hasValue={Boolean(value.length > 0) ?? false}
      $size={size}
      className={
        "input " + className ??
        "" + (error ? "error" : "") + (disabled ? "disabled" : "")
      }
    >
      {Boolean(label) && <label className="label">{label}</label>}
      <select
        {...props}
        className="select"
        disabled={disabled ?? false}
        value={value}
        onChange={(e) => {
          if (!onChange) return;
          onChange(e.target.value);
        }}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {Boolean(helperText) && <p className="helperText">{helperText}</p>}
    </SelectStyled>
  );
};
export default Select;
