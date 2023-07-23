import { slideUp } from "style/animations";
import { styled } from "styled-components";

export const SignInStyled = styled.main`
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: ${({ theme }) => theme.spacing.normal};
  justify-content: center;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.background.normal};

  .bgSection {
    width: 50vw;
    height: 50vh;
    position: fixed;
    bottom: 0;
    right: 10vw;
    background-color: ${({ theme }) => theme.colors.main.normal};
    border-radius: 50px 50px 0 0;
    animation: ${slideUp} 0.7s ease-in-out;
  }
  .formSection {
    margin-top: 70px;
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.large};
    .form {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacing.normal};
    }
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;
