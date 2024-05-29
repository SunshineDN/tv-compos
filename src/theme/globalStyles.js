import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html {
    font-size: 20px;

    @media (max-width: 1919px) {
      font-size: 14px;
    }
    
    @media (max-width: 1439px) {
      font-size: 10px;
    }

    @media (max-width: 1023px) {
      font-size: 10px;
    }

    @media (max-width: 767px) {
      font-size: 8px;
    }

    @media (max-width: 479px) {
      font-size: 6px;
    }

    @media (max-width: 319px) {
      font-size: 4px;
    }
  }

  body, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Urbanist', sans-serif;
    font-weight: 400;
  }
`;
