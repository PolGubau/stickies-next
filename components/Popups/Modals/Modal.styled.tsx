import { slideUp } from "style/animations";
import { styled } from "styled-components";
interface Props {
  maxWidth?: string;
}
export const ModalStyled = styled.section<Props>`
  animation: ${slideUp} 0.7s ease-in-out;

  background-color: ${({ theme }) => theme.colors.background.normal ?? "#fff"};
  border-radius: ${({ theme }) => theme.borderRadius.normal ?? "5px"};
  max-width: ${({ maxWidth }) => maxWidth ?? "500px"};
  width: 100%;
  text-align: center;
  padding: 40px;
  box-shadow: ${({ theme }) =>
    theme.shadows.large ?? "0 0 10px rgba(0, 0, 0, 0.2)"};
  position: relative;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.normal ?? "20px"};
  justify-content: space-between;
  align-items: center;
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: ${({ theme }) => theme.spacing.small ?? "4px"};
    width: 100%;
  }
  z-index: 100;

  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 20px;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.main.normal};
    border-radius: 0;
  }
`;
