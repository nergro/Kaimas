import { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background-color 0.3s linear;
    background: ${props => props.theme.colors.background.primary};
    color: ${props => props.theme.colors.text.main};
  }

  html, body, #root {
    /* height: 100% */
  }

  /* This class is applied to body when modal is open */
  .ReactModal__Body--open {
    overflow-y: hidden;
  }
`;
