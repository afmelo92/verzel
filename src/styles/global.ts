import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #2B3137 ;
    color: #2B3137;
    -webkit-font-smoothing: antialiased
  }

  body, input, button {
    font: 16px 'Roboto', serif;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 1000ms ease-in-out;
  }

  .ReactModal__Overlay--after-open{
    opacity: 1;
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
  }
`;
