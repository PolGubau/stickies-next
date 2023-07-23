import styled from "styled-components";
import { Theme } from "theme";

interface Props {
  $size: "small" | "normal" | "large";
  $disabled?: boolean;
  $hasValue?: boolean;
}
export const AsyncSelectStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.small ?? "5px"};
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
          return `font-size: 0.8rem; padding: ${({ theme }: { theme: Theme }) =>
            theme.spacing.small}`;
        case "large":
          return `font-size: 1.3rem; padding: ${({ theme }: { theme: Theme }) =>
            theme.spacing.large}`;
        default:
          return `font-size: 1rem; padding: ${({ theme }: { theme: Theme }) =>
            theme.spacing.normal}`;
      }
    }}
    background-color: transparent;
    padding: ${({ theme }) => "0 " + theme.spacing.small ?? "4px"};
    background-color: ${({ theme }) => theme.colors.background.light ?? "#fff"};
    transform: translateY(-0.5rem) scale(0.9);
    font-size: 0.8rem;
    border-radius: ${({ theme }) => theme.borderRadius.normal ?? "5px"};
  }
  .select {
    padding: ${({ theme }) => theme.spacing.normal ?? "5px"};
    ${({ $size }) => {
      switch ($size) {
        case "small":
          return `font-size: 0.8rem; padding: ${({ theme }: { theme: Theme }) =>
            theme.spacing.small}`;
        case "large":
          return `font-size: 1.3rem; padding: ${({ theme }: { theme: Theme }) =>
            theme.spacing.large}`;
        default:
          return `font-size: 1rem; padding: ${({ theme }: { theme: Theme }) =>
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
      color: ${({ theme }) => theme.colors.text.normal ?? "#000000"};
      background-color: ${({ theme }) => theme.colors.main.light ?? "#fff"};
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
  .error {
    color: ${({ theme }) => theme.colors.error.dark};
  }

  ${({ $disabled }) => $disabled && `opacity: 0.5; pointer-events: none;`}
`;
