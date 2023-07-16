import { KEYS } from "Models/localStorageKeys";
import { useRecoilState } from "recoil";
import themeAtom from "../states/themeState";
import { Theme, lightTheme } from "theme";
import { getLocalStorage, setToLocalStorage } from "../utils";

export const useTheme = () => {
  const [activeTheme, setActiveTheme] = useRecoilState<Theme>(themeAtom);

  const getTheme = () => {
    const themeStorage = getLocalStorage(
      KEYS.theme,
      JSON.stringify(lightTheme)
    );
    return activeTheme || themeStorage;
  };

  const changeTheme = (theme: Theme) => {
    setToLocalStorage(KEYS.theme, JSON.stringify(theme));
    setActiveTheme(theme);
  };

  return { activeTheme, changeTheme, getTheme };
};
