import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {font-size: 100%;} /*16px*/

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    background: #F4F4F4;

    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.75;
    color: #000000;
  }


  p {margin-bottom: 1rem;}

  h1, h2, h3, h4, h5 {
    margin: 1.38rem 0;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    line-height: 1.3;
    text-align: start;
  }

  h1 {
    margin-top: 0;
    font-size: 1.802rem;
  }

  h2 {font-size: 1.602rem;}

  h3 {font-size: 1.424rem;}

  h4 {font-size: 1.266rem;}

  h5 {font-size: 1.125rem;}

  small, .text_small {font-size: 0.889rem;}
`;
