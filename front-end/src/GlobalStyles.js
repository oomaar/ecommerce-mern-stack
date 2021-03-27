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
    background: ${({dark}) => dark ? '#171717' : '#f4f4f4'};
    transition: background 0.5s ease-in;
  }
  
  img {
    width: 100%;
    object-fit: contain;
  }
  
`;