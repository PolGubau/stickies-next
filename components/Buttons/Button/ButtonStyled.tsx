import styled from "styled-components";
interface IButtonStyled {
  primary?: boolean;
  outlined?: boolean;
  deleteButton?: boolean;
}

export const ButtonStyled = styled.div<IButtonStyled>`
  /* variables for colors */

  /* Background color: By default the background color is transparent, 
  if its a primary button the background color is the main color, 
  if its a outlined button the background color is the background color light   
  */

  --color-bg: ${({ theme, outlined, primary, deleteButton }) =>
    outlined
      ? theme.colors.background.light
      : primary
      ? theme.colors.main.normal
      : deleteButton
      ? "transparent"
      : theme.colors.secondary.normal};

  --color: ${({ theme, outlined, primary }) =>
    outlined
      ? theme.colors.text.normal
      : primary
      ? theme.colors.background.light
      : theme.colors.text.normal};

  --color-border: ${({ theme, outlined, primary }) =>
    outlined
      ? theme.colors.secondary.normal
      : primary
      ? theme.colors.main.normal
      : "transparent"};

  display: flex;
  align-items: center;
  background-color: transparent;
  gap: ${({ theme }) => theme.spacing.small};
  border: none;
  font-size: ${({ theme }) => theme.fontSize.small};
  outline: none;

  button {
    background-color: var(--color-bg);
    color: var(--color);
    padding: ${({ theme }) => theme.spacing.normal};
    display: flex;
    width: fit-content;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.small};
    border-radius: ${({ theme }) => theme.borderRadius.normal};
    fill: var(--color);
    border: 1px solid var(--color-border);
    transition: all 0.1s ease-in-out;
    outline: none;

    :hover {
      outline: none;
      cursor: pointer;
      filter: brightness(0.8);
    }
    :focus {
      box-shadow: ${({ theme }) => theme.shadows.normal};
      outline: 2px solid ${({ theme }) => theme.colors.main.normal};
    }
    :active {
      outline: none;
      transform: scale(0.95);
    }

    span {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing.small};
      color: var(--color);
      fill: var(--color);
    }

    ${({ deleteButton }: { deleteButton?: boolean }) =>
      deleteButton &&
      `
      :hover {
        cursor: pointer;
        background-color:  var(--color-bg);
      }
      `}
  }
`;
