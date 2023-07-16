import { atom } from "recoil";

const initialState = "";
export const userState = atom({
  key: "user",
  default: initialState,
});
