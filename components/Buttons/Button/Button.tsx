import { useState } from "react";
import { ButtonStyled } from "./ButtonStyled";
import { Icon } from "components/Icon";
import { IconType } from "components/Icon/Icon";
import { Modal } from "components";

//

export interface IButtonProps {
  children?: React.ReactNode | null;
  icon?: IconType;
  onClick?: any;
  disabled?: boolean;
  className?: string;
  id?: string;
  buttonType?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  title?: string;
  name?: string;
  value?: string;
  autoFocus?: boolean;
  label?: string;
  type?: "main" | "normal" | "error" | "transparent";
  size?: "small" | "normal" | "large";
  isAsync?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  children = null,
  icon,
  fullWidth = false,
  onClick,
  disabled,
  className,
  id,
  buttonType = "button",
  style,
  title,
  name,
  value,
  isAsync = false,
  autoFocus,
  label = "",
  size = "normal",
  type = "normal",
}: IButtonProps): JSX.Element => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      if (type === "error") {
        setOpenModal(true);
      } else if (isAsync) {
        setLoading(true);
      } else {
        onClick(e);
      }
    }
  };
  return (
    <ButtonStyled
      $fullWidth={fullWidth}
      $size={size}
      className={className}
      id={id}
      style={style}
      title={title}
    >
      {openModal && (
        <Modal
          handleClose={() => {
            setOpenModal(false);
          }}
          handleSubmit={() => {
            setOpenModal(false);
            onClick && onClick();
          }}
        />
      )}
      {label && <span>{label}</span>}
      <button
        className={`type-${type}`}
        onClick={handleClick}
        disabled={disabled}
        autoFocus={autoFocus}
        type={buttonType}
        name={name}
        value={value}
      >
        {icon != null && <Icon icon={icon} />}
        {loading ? (
          <Icon icon="loading" />
        ) : children ? (
          <span>{children}</span>
        ) : value ? (
          <span>{value}</span>
        ) : null}
      </button>
    </ButtonStyled>
  );
};
export default Button;
