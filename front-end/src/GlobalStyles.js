import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: ${({darkMode}) => darkMode ? '#f4f4f4' : '#171717'};
    transition: background 0.5s ease-in;
  }
  
  img {
    width: 100%;
    object-fit: contain;
  }
  
`;