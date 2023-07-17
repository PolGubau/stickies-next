import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle` 


:root {
  font-family: 'Rubik', sans-serif,system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: ${({ theme }) => theme.colors.text.normal};  
  background-color: ${({ theme }) => theme.colors.background.normal}; 

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.colors.text.normal};
}


@media (prefers-color-scheme: dark) {
    
    :root {
        color: ${({ theme }) => theme.colors.background.normal};
        background-color: ${({ theme }) => theme.colors.text.normal}; 
    }
}

a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text.normal};
  }

  input,
  textarea,
  button {
    border-radius: ${({ theme }) => theme.borderRadius.normal};

    font-family: ${({ theme }) => theme.fonts.secondary}, sans-serif;
    border: none;
    outline: none;
  }
  button {
    color: ${({ theme }) => theme.colors.text.normal};
    cursor: pointer;
    :hover {
      filter: brightness(0.9);
    }
    :focus {
      outline: 1px solid ${({ theme }) => theme.colors.secondary.normal};
    }
  }

  .flex {
    display: flex;
    gap: ${({ theme }) => theme.spacing.normal};
    flex-direction: row;
  }
  .alignCenter {
    align-items: center;
  }
  .column {
    flex-direction: column;
    display: flex;
  }
  .expandChildren {
    > * {
      flex: 1;
    }
  }
  .wrap {
    flex-wrap: wrap;
  }
  .fullHeight {
    height: 100%;
  }

  .form-flex {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.normal};
    padding: ${({ theme }) => theme.spacing.normal};
    > * {
      max-width: 500px;
      min-width: fit-content;
      gap: ${({ theme }) => theme.spacing.normal};
      @media screen and (max-width: 1000px) {
        max-width: 100%;
      }
    }
  }
  .twoColumns {
    padding: ${({ theme }) => theme.spacing.normal};
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing.normal};
    max-width: 1000px;
    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
  }

  header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.normal};
  }
`;

export default GlobalStyles;
