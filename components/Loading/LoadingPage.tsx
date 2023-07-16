import Loading from "./Loading";
import styled from "styled-components";
const LoadingPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  gap: ${({ theme }) => theme.spacing.large};
`;
interface Props {
  message?: string;
}
const LoadingPage: React.FC<Props> = ({ message }) => {
  return (
    <LoadingPageStyled>
      <Loading />
      {message && <p>{message}</p>}
    </LoadingPageStyled>
  );
};
export default LoadingPage;
