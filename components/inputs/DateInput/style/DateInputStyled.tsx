import styled from 'styled-components'

export const DateInputStyled = styled.div`
  position: relative;
  width: 100%;
  label {
    position: absolute;
    padding: 2px;
    margin: 0 ${({ theme }) => theme.spacing.small};
    background-color: ${({ theme }) => theme.colors.background.light};
    width: fit-content;
    font-size: ${({ theme }) => theme.fontSize.small};
    top: -10px;
  }
  input {
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.secondary.normal};
    padding: ${({ theme }) => theme.spacing.small};
    padding-top: 15px;
    border-radius: ${({ theme }) => theme.borderRadius.normal};
    font-size: ${({ theme }) => theme.fontSize.normal};
    font-family: ${({ theme }) => theme.fonts.main};
    :focus {
      outline: 1px solid ${({ theme }) => theme.colors.main.normal};
      border-radius: ${({ theme }) => theme.borderRadius.normal};
    }
  }
`
