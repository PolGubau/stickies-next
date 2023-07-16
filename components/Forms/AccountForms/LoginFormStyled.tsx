import { styled } from "styled-components";

export const LoginFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.normal};
  justify-content: center;
`;
