import { atom } from "recoil";

export type ToastType = "success" | "error";

export interface IToast {
  message?: string;
  type?: "success" | "error";
  show?: boolean;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const emptyToast: IToast = {
  message: "Action done successfully",
  type: "success",
  show: false,
  duration: 3000,
};

const ToastStateAtom = atom({
  key: "ToastState",
  default: emptyToast,
});

export default ToastStateAtom;
