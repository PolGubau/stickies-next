import styled from "styled-components";

export const AreaButtonStyled = styled.div`
  padding: 0;
  margin: 0;
  .areaButton {
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 100px;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.normal};
    transition: all 0.2s ease-in-out;
    background-color: ${({ theme }) => theme.colors.secondary.light};
    :hover {
      cursor: pointer;
      background-color: ${({ theme }) => theme.colors.secondary.normal};
    }
    :active {
      background-color: ${({ theme }) => theme.colors.secondary.dark};
      transform: scale(0.98);
    }
  }
`;
