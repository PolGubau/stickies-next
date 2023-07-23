import { Theme } from "./types";

const darkTheme: Theme = {
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
    desktopLarge: "1920px",
  },
  borderRadius: {
    small: "5px",
    normal: "10px",
    large: "20px",
  },

  spacing: {
    small: "5px",
    normal: "10px",
    large: "15px",
  },
  fonts: {
    main: "Poppins",
    secondary: "Poppins",
  },
  fontSize: {
    small: "12px",
    normal: "14px",
    large: "16px",
    title: "24px",
  },
  shadows: {
    small: "0px 1px 5px rgba(0, 0, 0, 0.16)",
    normal: "0px 3px 6px rgba(0, 0, 0, 0.16)",
    large: "0px 5px 15px #FFD15A50",
  },
  colors: {
    background: {
      dark: "#000",
      normal: "#0E1428",
      light: "#8782A5",
    },
    main: {
      dark: "#FFC42B",
      normal: "#FFD15A",
      light: "#FFE7A9",
    },
    secondary: {
      dark: "#aaa9b2",
      normal: "#D5DFFE",
      light: "#f3f2ff",
    },
    text: {
      dark: "#ccc",
      normal: "#F7F7FF",
      light: "#ffffff",
    },
    error: {
      dark: "#E77171",
      normal: "#ffb5b5",
      light: "#ffe5e5",
    },
  },
};

export default darkTheme;
