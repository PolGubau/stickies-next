import styled from 'styled-components'

interface ChipStyledProps {
  boolean?: boolean | undefined
}

export const ChipStyled = styled.p<ChipStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  background-color: ${({ theme, boolean }) =>
    typeof boolean === 'undefined'
      ? theme.colors.main.light
      : boolean
      ? theme.colors.main.light
      : theme.colors.error.light};

  border: 1px solid
    ${({ theme, boolean }) =>
      typeof boolean === 'undefined'
        ? 'transparent'
        : boolean
        ? theme.colors.background.light
        : theme.colors.error.light};

  height: 30px;
  aspect-ratio: 1/1;
`
interface Props {
  icon: JSX.Element
  boolean?: boolean | undefined
}
const IconChip: React.FC<Props> = ({
  icon,
  boolean = undefined
}) => {
  return <ChipStyled boolean={boolean}>{icon}</ChipStyled>
}
export default IconChip
