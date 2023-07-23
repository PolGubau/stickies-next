import { DateInputStyled } from "./style/DateInputStyled";
interface Props {
  value: string;
  label?: string;
  onChange: (newDate: string) => void;
}

const DateInput: React.FC<Props> = ({ label, value, onChange }) => {
  const handleDateChange = (e: { target: { value: string } }) => {
    const selectedDate = e.target.value;
    onChange(selectedDate);
  };

  const formatValue = (value: string | undefined) => {
    // if not value, return the actual date
    if (!value) return new Date().toISOString().split("T")[0];

    // take the date string and format it to yyyy-mm-dd
    // if the value is empty, return an empty string
    // if the value is not empty, return the formatted value
    return value ? new Date(value).toISOString().split("T")[0] : "";
  };

  return (
    <DateInputStyled>
      {label && <label htmlFor="date">{label}</label>}
      <input
        type="date"
        name="date"
        value={formatValue(value)}
        onChange={handleDateChange}
      />
    </DateInputStyled>
  );
};

export default DateInput;
