import styled from "styled-components";
import Loading from "../Loading";

const LoadingOverlayStyled = styled.section`
  padding: 0;
  margin: 0;
  position: relative;
  width: 100%;
  height: 100%;
  .loading {
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  .content {
    filter: blur(3px);
    padding: 0;
    margin: 0;
  }
`;

interface Props {
  children: React.ReactNode;
}
const LoadingOverlay: React.FC<Props> = ({ children }) => {
  return (
    <LoadingOverlayStyled>
      <i className="loading">
        <Loading />
      </i>
      <div className="content"> {children}</div>
    </LoadingOverlayStyled>
  );
};

export default LoadingOverlay;
