import styled from "styled-components";

export const FlagsAndTextStyled = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background.light};
  gap: ${({ theme }) => theme.spacing.small};
  align-items: center;
  width: fit-content;
  border-radius: ${({ theme }) => theme.spacing.normal};
  padding: ${({ theme }) => theme.spacing.small + " " + theme.spacing.normal};
  outline: 1px solid ${({ theme }) => theme.colors.secondary.normal};
  .flag {
    min-width: 20px;
    height: 20px;
  }
  .text {
    white-space: nowrap;
    display: inline-block;
    max-width: 200px;
    width: fit-content;
  }
`;
