import React from "react";
import { formatString } from "utils";

interface Props {
  exampleElement: JSX.Element;
  value: any[];
  label?: string;
  onChange: (newValue: any) => void;
}

const ArrayInput: React.FC<Props> = ({
  exampleElement,
  value,
  label,
  onChange,
}) => {
  const [array, setArray] = React.useState<string[]>(value);

  const updateArray = () => {
    onChange(array);
  };

  const deleteOne = (index: number) => {
    setArray([...array.slice(0, index), ...array.slice(index + 1)]);
    updateArray();
  };

  const addEmpty = () => {
    setArray([...array, ""]);
    updateArray();
  };

  return (
    <div>
      {label && <label>{formatString(label)}</label>}
      <div>
        {array.map((item, index) => {
          return (
            <div key={index}>
              {exampleElement}
              <button
                onClick={() => {
                  deleteOne(index);
                }}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
      <button onClick={addEmpty}>Add</button>
    </div>
  );
};

export default ArrayInput;
