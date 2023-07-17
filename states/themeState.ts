import { atom } from "recoil";
import lightTheme from "../theme/lightTheme";

export const themeAtom = atom({
  key: "themeAtom",
  default: lightTheme,
});
