import { KEYS } from "Models";
import { useRecoilState } from "recoil";
import { themeAtom } from "states";
import { Theme, lightTheme } from "theme";
import { getLocalStorage, setToLocalStorage } from "utils";

export const useTheme = () => {
  const [theme, setTheme] = useRecoilState<Theme>(themeAtom);

  const getTheme = () => {
    const themeStorage = getLocalStorage(
      KEYS.theme,
      JSON.stringify(lightTheme)
    );
    return theme || themeStorage;
  };

  const changeTheme = (theme: Theme) => {
    setToLocalStorage(KEYS.theme, JSON.stringify(theme));
    setTheme(theme);
  };

  return { theme, changeTheme, getTheme };
};
