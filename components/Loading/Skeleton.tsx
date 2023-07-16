import styled from "styled-components";

const SkeletonStyled = styled.div`
  width: 100%;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.background.light};
  border-radius: 4px;
  animation: skeleton-loading 1s infinite ease-in-out;

  @keyframes skeleton-loading {
    0% {
      background-color: ${({ theme }) => theme.colors.background.light};
    }
    50% {
      background-color: ${({ theme }) => theme.colors.background.dark};
    }
    100% {
      background-color: ${({ theme }) => theme.colors.background.light};
    }
  }
`;

const SkeletonLoader = ({ width = 80 }: { width?: number }) => {
  return <SkeletonStyled style={{ width: `${width}px` }}></SkeletonStyled>;
};

export default SkeletonLoader;
