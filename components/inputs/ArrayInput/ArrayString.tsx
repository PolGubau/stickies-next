import { Button } from "components";
import React from "react";
import { MdOutlineAdd } from "react-icons/md";
import { TbTrash } from "react-icons/tb";
import styled from "styled-components";
import { formatString } from "utils";

export const ArrayStringStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ theme }) => theme.spacing.normal};
  gap: ${({ theme }) => theme.spacing.small};
  .label {
    font-weight: bold;
  }
  .array {
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacing.small};
    flex-wrap: wrap;

    .item {
      padding: ${({ theme }) => theme.spacing.small};
      background-color: ${({ theme }) => theme.colors.background.normal};
      border-radius: ${({ theme }) => theme.borderRadius.normal};
      display: flex;
      flex-direction: row;
      gap: ${({ theme }) => theme.spacing.small};
      align-items: center;
      input {
        padding: ${({ theme }) =>
          theme.spacing.small + " " + theme.spacing.normal};
      }
    }
  }
`;

interface Props {
  array: string[];
  label?: string;
  setArray: (newValue: string[]) => void;
}

const ArrayString: React.FC<Props> = ({ array, label, setArray }) => {
  const deleteOne = (index: number) => {
    setArray([...array.slice(0, index), ...array.slice(index + 1)]);
  };

  const addEmpty = () => {
    setArray([...array, ""]);
  };
  const updateElement = (index: number, newValue: string) => {
    setArray([...array.slice(0, index), newValue, ...array.slice(index + 1)]);
  };

  return (
    <ArrayStringStyled>
      {label && <label className="label">{formatString(label)}</label>}
      <div className="array">
        {array.map((item, index) => {
          return (
            <div key={index} className="item">
              <input
                placeholder="Pattern.."
                value={item}
                onChange={(e) => {
                  updateElement(index, e.target.value);
                }}
              />
              <Button
                icon={<TbTrash />}
                onClick={() => {
                  deleteOne(index);
                }}
              />
            </div>
          );
        })}
      </div>
      <Button onClick={addEmpty} icon={<MdOutlineAdd />}>
        Add {label}
      </Button>
    </ArrayStringStyled>
  );
};

export default ArrayString;
