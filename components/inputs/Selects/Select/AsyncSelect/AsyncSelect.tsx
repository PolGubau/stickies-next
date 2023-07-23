import { useEffect, useState } from "react";
import { AsyncSelectStyled } from "./AsyncSelectStyled";

interface Props {
  label?: string;
  url: string;
  mainFieldLabel?: string;
  getAllObject?: any;
  mainFieldID?: string;
  name?: string;
  value: string | undefined;
  onChange?: (value: any) => void;
  error?: string;
  className?: string;
  disabled?: boolean;
  helperText?: string;
  size?: "small" | "normal" | "large";
  props?: Omit<React.InputHTMLAttributes<HTMLInputElement>, keyof Props>;
}

const AsyncSelect: React.FC<Props> = ({
  label,
  url,
  value,
  getAllObject = false,
  mainFieldLabel = "name",
  mainFieldID = "id",
  onChange,
  disabled,
  error,
  helperText,
  className,
  size = "normal",
  ...props
}) => {
  const [options, setOptions] = useState<any[]>([]);
  useEffect(() => {
    const getOptions = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((res) => {
          setOptions(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getOptions();
  }, [url]);
  return (
    <AsyncSelectStyled
      $hasValue={Boolean(value)}
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
        value={value ?? undefined}
        onChange={(e) => {
          if (e.target.value === "") return;
          const result = getAllObject
            ? options.filter((o) => {
                return o[mainFieldID] === e.target.value;
              })[0]
            : e.target.value;

          if (!onChange) return;
          onChange(result);
        }}
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option[mainFieldID]} value={option[mainFieldID]}>
            {option[mainFieldLabel]}
          </option>
        ))}
      </select>
    </AsyncSelectStyled>
  );
};

export default AsyncSelect;
