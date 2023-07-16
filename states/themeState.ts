import { atom } from "recoil";
import lightTheme from "../theme/lightTheme";

const themeAtom = atom({
  key: "themeAtom",
  default: lightTheme,
});
export default themeAtom;
