import styled from "styled-components";

const LoadingStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 7px solid;
    border-color: ${({ theme }) => theme.colors.secondary.light};
    border-right-color: ${({ theme }) => theme.colors.main.normal};
    animation: spinner-d3wgkg 1s infinite linear;
  }

  @keyframes spinner-d3wgkg {
    to {
      transform: rotate(1turn);
    }
  }
`;
const Loading = () => {
  return (
    <LoadingStyled>
      <div className="spinner"></div>
    </LoadingStyled>
  );
};
export default Loading;
