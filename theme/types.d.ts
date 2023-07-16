interface ThreeTones {
  dark: string;
  normal: string;
  light: string;
}
interface ThreeSizes {
  small: string;
  normal: string;
  large: string;
}

export interface Theme {
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
    desktopLarge: string;
  };
  shadows: ThreeSizes;
  fonts: {
    main: string;
    secondary: string;
  };
  borderRadius: IThreeSizes;
  spacing: IThreeSizes;

  fontSize: {
    small: string;
    normal: string;
    large: string;
    title: string;
  };
  colors: {
    background: ThreeTones;
    main: ThreeTones;
    secondary: ThreeTones;
    text: ThreeTones;
    error: ThreeTones;
  };
}

export type { ThreeTones, ThreeSizes, Theme };
