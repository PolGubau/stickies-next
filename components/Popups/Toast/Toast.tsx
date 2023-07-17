import { useRecoilState } from "recoil";
import styled, { keyframes } from "styled-components";
import { GrClose } from "react-icons/gr";
import { Button } from "components";
import ToastStateAtom, { emptyToast } from "states/toastState";

const bgLoadingAnimation = keyframes`
    from{
        background-position: 100% 100%; 
    } 
    to{
        background-position: 0 0;
    }
`;

interface ToastStyledProps {
  type?: string;
  duration: number;
}

export const ToastStyled = styled.div<ToastStyledProps>`
  --normal: ${({ theme, type }) =>
    type === "error"
      ? theme.colors.error.normal
      : type === "success"
      ? theme.colors.main.normal
      : theme.colors.secondary.normal};
  --light: ${({ theme, type }) =>
    type === "error"
      ? theme.colors.error.light
      : type === "success"
      ? theme.colors.main.light
      : theme.colors.secondary.light};

  --dark: ${({ theme, type }) =>
    type === "error"
      ? theme.colors.error.dark
      : type === "success"
      ? theme.colors.main.dark
      : theme.colors.secondary.dark};
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  animation: ${bgLoadingAnimation} ${({ duration }) => duration}ms linear;
  gap: 20px;
  background-size: 200% 200%;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.background.light} 0%,
    var(--light) 50%,
    ${({ theme }) => theme.colors.background.light} 50%
  );
  color: var(--dark);

  justify-content: center;
  align-items: center;
  border: 1px solid var(--dark);
  box-shadow: ${({ theme }) => theme.shadows.standard};
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  padding: 10px 10px 10px 20px;
  font-size: 1.1em;
  margin: 0;
  p {
    margin: 0;
  }
`;

const Toast = () => {
  const [toast, setToastState] = useRecoilState(ToastStateAtom);

  const handleClose = () => {
    setToastState(emptyToast);
  };
  const actionClick = () => {
    toast.action?.onClick();
    handleClose();
  };

  return (
    <ToastStyled duration={toast.duration ?? 3000} type={toast.type}>
      <p>{toast.message}</p>
      {toast.action && (
        <Button onClick={actionClick} type="transparent">
          {toast.action.label}
        </Button>
      )}
      <Button icon={<GrClose />} onClick={handleClose} />
    </ToastStyled>
  );
};
export default Toast;
