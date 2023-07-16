import { useSetRecoilState } from "recoil";
import ToastStateAtom, { type ToastType } from "../states/toastState";

const useToast = (): {
  triggerToast: (message?: string, type?: ToastType, duration?: number) => void;
} => {
  const trigger = useSetRecoilState(ToastStateAtom);

  const triggerToast = (
    message = "Copied to clipboard",
    type: ToastType = "success",
    duration = 3000
  ): void => {
    trigger({
      show: true,
      message,
      type,
      duration,
    });
  };

  return { triggerToast };
};

export default useToast;
