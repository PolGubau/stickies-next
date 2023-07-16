import React from "react";
import { LayoutStyled } from "./LayoutStyles";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;
