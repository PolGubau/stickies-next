import { Wrapper } from "components/Wrappers";
import { ModalStyled } from "./Modal.styled";
import { Button } from "components";

interface Props {
  handleClose: () => void;
  handleSubmit: () => void;
  children?: React.ReactNode;
  title?: string;
  footer?: React.ReactNode;
  maxWidth?: string;
}

const Modal: React.FC<Props> = ({
  handleClose,
  handleSubmit,
  children,
  title,
  maxWidth,
}) => {
  return (
    <Wrapper open={true} handleClose={handleClose}>
      <ModalStyled maxWidth={maxWidth}>
        <div className="modal__header">
          <h2>{title}</h2>
          <button onClick={handleClose}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="modal__body">{children}</div>
        <div className="modal__footer">
          <Button onClick={handleSubmit} primary>
            Submit
          </Button>
          <Button onClick={handleClose} outlined>
            Cancel
          </Button>
        </div>
      </ModalStyled>
    </Wrapper>
  );
};

export default Modal;
