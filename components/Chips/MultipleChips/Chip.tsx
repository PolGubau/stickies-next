import styled from "styled-components";

interface ChipStyledProps {
  boolean?: boolean | undefined;
}

export const ChipStyled = styled.p<ChipStyledProps>`
  background-color: ${({ theme, boolean }) =>
    typeof boolean === "undefined"
      ? theme.colors.main.light
      : boolean
      ? theme.colors.main.light
      : theme.colors.error.light};

  border: 1px solid
    ${({ theme, boolean }) =>
      typeof boolean === "undefined"
        ? "transparent"
        : boolean
        ? theme.colors.background.light
        : theme.colors.error.light};

  border-radius: ${({ theme }) => theme.borderRadius.normal};
  margin: 0;
  padding: ${({ theme }) => theme.spacing.small + " " + theme.spacing.normal};
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
`;
interface Props {
  children: any;
  className?: string;
  boolean?: boolean | undefined;
}
const Chip: React.FC<Props> = ({
  children,
  className,
  boolean = undefined,
}) => {
  return (
    <ChipStyled className={className} boolean={boolean}>
      {children}
    </ChipStyled>
  );
};
export default Chip;
