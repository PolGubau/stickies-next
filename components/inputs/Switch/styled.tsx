import { Theme } from "theme";
import { css, styled } from "styled-components";
interface Props {
  $isTrue: boolean;
  $size: "small" | "normal" | "large";
}
export const SwitchStyled = styled.div<Props>`
  --width: ${({ $size }) => {
    switch ($size) {
      case "small":
        return "40px";
      case "large":
        return "60px";
      default:
        return "50px";
    }
  }};

  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.normal ?? "5px"};

  .switch {
    width: var(--width);
    background-color: ${({ theme }) => theme.colors.secondary.dark};
    display: flex;
    justify-content: flex-start;
    border-radius: 999px;
    padding: ${({ $size }) => {
      switch ($size) {
        case "small":
          return "3px";
        case "large":
          return "5px";
        default:
          return "4px";
      }
    }};
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &[data-isOn="true"] {
      justify-content: flex-end;
      background-color: ${({ theme }) => theme.colors.main.normal};
    }

    &:focus {
      outline: 2px solid ${({ theme }) => theme.colors.secondary.dark ?? "#888"};
      box-shadow: ${({ theme }) => theme.shadows.normal ?? "none"};
      &[data-isOn="true"] {
        outline-color: ${({ theme }) => theme.colors.main.dark ?? "#797a1a"};
      }
    }
    &:active {
      transform: scale(0.9);
    }
  }

  .handle {
    width: calc(var(--width) / 2);
    height: calc(var(--width) / 2);
    background-color: ${({ theme }) => theme.colors.background.normal};
    border-radius: 999px;
  }
`;
