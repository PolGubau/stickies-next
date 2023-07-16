import { useState } from "react";
import { ButtonStyled } from "./ButtonStyled";
import Modal from "components/Popups/Modals/Modal";
import { Icon } from "components/Icon";
export interface IButtonProps {
  children?: React.ReactNode | null;
  icon?: JSX.Element | null | string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  id?: string;
  type?: "button" | "submit" | "reset";
  style?: React.CSSProperties;
  title?: string;
  name?: string;
  value?: string;
  autoFocus?: boolean;
  primary?: boolean;
  outlined?: boolean;
  label?: string;
  deleteButton?: boolean;
  iconLeft?: boolean;
}

const Button = ({
  children = null,
  icon = null,
  onClick,
  disabled,
  className,
  id,
  type,
  style,
  title,
  name,
  value,
  primary = false,
  autoFocus,
  outlined = false,
  label = "",
  deleteButton = false,
  iconLeft = false,
}: IButtonProps): JSX.Element => {
  const [openModal, setOpenModal] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      if (deleteButton) {
        setOpenModal(true);
      } else {
        onClick(e);
      }
    }
  };
  return (
    <ButtonStyled
      className={className}
      id={id}
      style={style}
      title={title}
      primary={primary}
      outlined={outlined}
      deleteButton={deleteButton}
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
        onClick={handleClick}
        disabled={disabled}
        autoFocus={autoFocus}
        type={type}
        name={name}
        value={value}
      >
        {icon != null && iconLeft && <Icon icon={icon} />}
        {children ? (
          <span>{children}</span>
        ) : value ? (
          <span>{value}</span>
        ) : null}{" "}
        {icon != null && !iconLeft && <Icon icon={icon} />}
      </button>
    </ButtonStyled>
  );
};
export default Button;
