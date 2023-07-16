import { useState } from "react";
import { AreaButtonStyled } from "./ButtonStyled";
export interface IButtonProps {
  icon?: JSX.Element | null;
  onClick?: any;
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  title?: string;
  name?: string;
  outlined?: boolean;
  subTitle?: string;
  deleteButton?: boolean;
}

const AreaButton = ({
  icon = null,
  onClick,
  className,
  id,
  title = "Here!",
  style,
  subTitle = "",
  deleteButton = false,
}: IButtonProps): JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <AreaButtonStyled className={className} id={id} style={style} title={title}>
      <div onClick={handleClick} className="areaButton">
        {icon != null && <span className="icon">{icon}</span>}
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </div>
    </AreaButtonStyled>
  );
};
export default AreaButton;
