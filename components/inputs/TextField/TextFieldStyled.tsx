import { Theme } from "theme";
import { styled } from "styled-components";
interface Props {
  $hasValue: boolean;
  $size: "small" | "normal" | "large";
}
export const TextFieldStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.normal ?? "5px"};
  justify-content: center;
  position: relative;

  label {
    transition: 0.2s ease-in-out;
    pointer-events: none;
    position: absolute;
    color: ${({ theme }) => theme.colors.secondary.dark ?? "#555"};
    top: 0;
    left: ${({ theme }) => theme.spacing.normal ?? "5px"};
    ${({ $size }) => {
      switch ($size) {
        case "small":
          return `font-size: 0.8rem; padding: ${({ theme }) =>
            theme.spacing.small}`;
        case "large":
          return `font-size: 1.3rem; padding: ${({ theme }) =>
            theme.spacing.large}`;
        default:
          return `font-size: 1rem; padding: ${({ theme }) =>
            theme.spacing.normal}`;
      }
    }}
    transform-origin: top left;
    transform: translateY(0.5rem) scale(1);
    background-color: ${({ theme }) =>
      theme.colors.background.normal ?? "#fff"};
    padding: ${({ theme }) => "0 " + theme.spacing.small ?? "2px"};
  }

  input {
    padding: ${({ theme }) => theme.spacing.normal ?? "5px"};
    ${({ $size }) => {
      switch ($size) {
        case "small":
          return `font-size: 0.8rem; padding: ${({ theme }) =>
            theme.spacing.small}`;
        case "large":
          return `font-size: 1.3rem; padding: ${({ theme }) =>
            theme.spacing.large}`;
        default:
          return `font-size: 1rem; padding: ${({ theme }) =>
            theme.spacing.normal}`;
      }
    }}
    transition: 0.2s ease-in-out;
    background-color: transparent;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.secondary.dark ?? "#555"};
    border-radius: ${({ theme }) => theme.borderRadius.normal ?? "5px"};
    width: 100%;
    box-sizing: border-box;
    :focus {
      border: 1px solid ${({ theme }) => theme.colors.main.normal ?? "#dbed51"};
      box-shadow: ${({ theme }) => theme.shadows.normal ?? "none"};
    }
  }

  &:focus-within {
    transition: 0.2s ease-in-out;
    label {
      transform: translateY(-0.5rem) scale(0.9);
      font-size: 0.8rem;
    }
    input {
      box-shadow: ${({ theme }) => theme.shadows.large ?? "none"};
      ::placeholder {
        visibility: show;
      }
    }
    input {
      border-color: ${({ theme }) => theme.colors.main.normal ?? "#000"};
    }
  }

  ${({ $hasValue }) =>
    $hasValue
      ? `label {
    transform: translateY(-0.5rem) scale(0.9);
    font-size: 0.8rem;
  }
  input {
    ::placeholder {
      visibility: show;
    }
  }
  input {
    border-color: ${({ theme }: { theme: Theme }) =>
      theme.colors.main.normal ?? "#000"};
  }`
      : ""}
`;
