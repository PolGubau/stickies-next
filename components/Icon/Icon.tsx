import React from "react";
import { IconStyled } from "./IconStyled";
import { getIcon } from "utils";

export type IconType = React.ReactNode | string;
interface IconProps {
  icon: IconType;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  size?: string;
  className?: string;
  props?: any;
}

const Icon = ({
  icon,
  onClick,
  color,
  size,
  className,
  ...props
}: IconProps) => {
  return (
    <IconStyled
      onClick={onClick}
      color={color}
      size={size}
      className={className}
      {...props}
    >
      {typeof icon === "string" ? getIcon(icon as string) : icon}
    </IconStyled>
  );
};
export default Icon;
