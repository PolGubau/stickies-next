import { useSetRecoilState } from "recoil";
import ToastStateAtom, { IToast, ToastType } from "states/toastState";

const useToast = (): {
  triggerToast: (props: IToast) => void;
} => {
  const trigger = useSetRecoilState(ToastStateAtom);

  const triggerToast = ({
    message = "Copied to clipboard",
    type = "success" as ToastType,
    duration = 3000,
    action,
  }: IToast): void => {
    trigger({
      show: true,
      message,
      type,
      duration,
      action,
    });
  };

  return { triggerToast };
};

export default useToast;
