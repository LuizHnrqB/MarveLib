import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
    margin: 0; 
    overflow: hidden; 
  }

@font-face {
    font-family: 'MarvelRegular';
    src: url('./fonts/MarvelRegular-Dj83.ttf') format('truetype');  
    font-weight: normal;
  
  }
@font-face {
    font-family: 'AxiformaThin';
    src: url('./fonts/Kastelov - Axiforma Thin.otf') format('truetype');  
    font-weight: normal;
    
  }
@font-face {
    font-family: 'AxiformaBold';
    src: url('./fonts/Kastelov - Axiforma Bold.otf') format('truetype');  
    font-weight: bold;
    
  }

`;

export const BackApp = styled.body`
  overflow: hidden;
  overflow-x: hidden;
  background-color: black;
  height: 100vh;
  overflow: hidden;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
`;
export const Content = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
