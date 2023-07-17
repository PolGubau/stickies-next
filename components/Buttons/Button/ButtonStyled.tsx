import styled from "styled-components";
interface IButtonStyled {
  $fullWidth?: boolean;
  $size: "small" | "normal" | "large";
}

export const ButtonStyled = styled.div<IButtonStyled>`
  display: flex;
  align-items: center;
  background-color: transparent;
  gap: ${({ theme }) => theme.spacing.small};
  border: none;
  outline: none;

  .type-main {
    background-color: ${({ theme }) => theme.colors.main.normal};
    color: ${({ theme }) => theme.colors.background.normal};
  }
  .type-normal {
    background-color: ${({ theme }) => theme.colors.secondary.normal};
    color: ${({ theme }) => theme.colors.text.normal};
  }
  .type-transparent {
    background-color: transparent;
    border: none;
    :hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.background.light};
    }
  }
  .type-error {
    background-color: ${({ theme }) => theme.colors.error.normal};
    color: ${({ theme }) => theme.colors.text.normal};
    background-color: transparent;
    border: none;
    :hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.error.light};
    }
  }
  :hover {
    transform: scale(0.95);
  }
  :focus-within {
    transform: scale(0.93);
    filter: brightness(0.9);
  }

  button {
    box-sizing: border-box;
    ${({ $size }) => {
      switch ($size) {
        case "small":
          return `font-size: 0.8rem; padding:5px 10px;`;
        case "large":
          return `font-size: 1.2rem; padding:10px 15px;`;
        default:
          return `font-size: 1rem; padding:7px 12px;`;
      }
    }}
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.small};
    border-radius: ${({ theme }) => theme.borderRadius.normal};
    transition: all 0.1s ease-in-out;
    outline: none;
    svg {
      ${({ $size }) => {
        switch ($size) {
          case "small":
            return `max-width: 10px; max-height: 10px;`;
          case "large":
            return `max-width: 25px; max-height: 25px;`;
          default:
            return `max-width: 15px; max-height: 15px;`;
        }
      }}
    }

    :hover {
      outline: none;
      cursor: pointer;
      filter: brightness(0.8);
    }
    :focus {
      transform: scale(0.9);
      box-shadow: ${({ theme }) => theme.shadows.small};
      outline: 2px solid ${({ theme }) => theme.colors.main.dark};
      box-shadow: ${({ theme }) => theme.shadows.large};
    }
    span {
      display: flex;
      align-items: center;
      gap: ${({ theme }) => theme.spacing.small};
    }
    ${({ $fullWidth }) =>
      $fullWidth &&
      `
    width: 100%;
  `}
  }
`;
