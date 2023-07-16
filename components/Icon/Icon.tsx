import React from "react";
import { IconStyled } from "./IconStyled";
import { getIconByName } from "utils";

interface IconProps {
  icon: React.ReactNode | string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  size?: string;
}

const Icon = ({ icon, onClick, color, size }: IconProps) => {
  return (
    <IconStyled onClick={onClick} color={color} size={size}>
      {typeof icon === "string" ? getIconByName(icon as string) : icon}
    </IconStyled>
  );
};
export default Icon;
