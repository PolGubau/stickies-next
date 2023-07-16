import { Theme } from "theme";
import { styled } from "styled-components";
interface Props {
  hasValue: boolean;
}
export const TextFieldStyled = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.normal ?? "5px"};
  justify-content: center;
  position: relative;

  label {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: ${({ theme }) => theme.spacing.normal ?? "5px"};
    font-size: ${({ theme }) => theme.fontSize.normal ?? "1rem"};
    transition: transform 0.2s, font-size 0.2s;
    transform-origin: top left;
    transform: translateY(0.5rem) scale(1);
    background-color: ${({ theme }) =>
      theme.colors.background.normal ?? "#fff"};
    padding: ${({ theme }) => "0 " + theme.spacing.small ?? "2px"};
  }

  input {
    background-color: transparent;
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.secondary.dark ?? "#555"};
    padding: ${({ theme }) => theme.spacing.normal ?? "5px"};
    border-radius: ${({ theme }) => theme.borderRadius.normal ?? "5px"};
    transition: border-color 0.3s;
    width: 100%;
    box-sizing: border-box;
    :focus {
      border: 1px solid ${({ theme }) => theme.colors.main.normal ?? "#dbed51"};
      box-shadow: ${({ theme }) => theme.shadows.normal ?? "none"};
    }
  }

  &:focus-within {
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

  ${({ hasValue }) =>
    hasValue
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
