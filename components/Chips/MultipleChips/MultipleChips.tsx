import styled from "styled-components";
import Chip from "./Chip";
import { truncateString } from "utils";
import { LimitArray } from "utils";

export const MultipleChipsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;
interface Props {
  array: string[];
  limit?: number;
  label?: string;
}
const MultipleChips: React.FC<Props> = ({ array, limit = 2, label }) => {
  const limitedArray = array.slice(0, limit);
  return (
    <MultipleChipsStyled>
      {limitedArray.map((value, index: number) => {
        return <Chip key={index}>{truncateString(value, 15)}</Chip>;
      })}
      {array.length > limit && (
        <LimitArray length={array.length} limit={limit} label={label} />
      )}
    </MultipleChipsStyled>
  );
};
export default MultipleChips;
