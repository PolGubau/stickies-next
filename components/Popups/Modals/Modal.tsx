import { Wrapper } from "components/Wrappers";
import { ModalStyled } from "./Modal.styled";
import { Button, Icon, Text } from "components";
import { IconType } from "components/Icon/Icon";

interface Props {
  handleClose?: () => void;
  handleSubmit?: () => void;
  children?: React.ReactNode;
  title?: string;
  icon?: IconType;
  footer?: React.ReactNode;
  maxWidth?: string;
}

const Modal: React.FC<Props> = ({
  handleClose,
  handleSubmit,
  children,
  title,
  icon,
  maxWidth,
}) => {
  return (
    <Wrapper open={true} handleClose={handleClose}>
      <ModalStyled maxWidth={maxWidth}>
        {Boolean(handleClose) && (
          <Icon icon="close" className="close" onClick={handleClose} />
        )}
        <header>
          <Icon icon={icon} size="40px" />
          <Text size={2}>{title}</Text>
        </header>
        <main>{children}</main>
        <footer>
          {Boolean(handleSubmit) && (
            <Button onClick={handleSubmit} type="main">
              Submit
            </Button>
          )}
        </footer>
      </ModalStyled>
    </Wrapper>
  );
};

export default Modal;
