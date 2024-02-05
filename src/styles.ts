import styled, { createGlobalStyle } from "styled-components";
import backgroundImage from "./assets/fundo.png";

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
    font-family: 'AxiformaMedium';
    src: url('./fonts/Kastelov - Axiforma Medium.otf') format('truetype');  
    font-weight: 300;
    
  }
@font-face {
    font-family: 'AxiformaBold';
    src: url('./fonts/Kastelov - Axiforma Bold.otf') format('truetype');  
    font-weight: bold;    
  }
@font-face {
    font-family: 'AxiformaLight';
    src: url('./fonts/Kastelov - Axiforma Light.otf') format('truetype');  
    font-weight: normal;    
  }

`;

export const BackApp = styled.body`
  z-index: 2;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 1) 50%,
      rgba(0, 0, 0, 0.8) 60%,
      rgba(0, 0, 0, 0.6)
    ),
    url(${backgroundImage});
  background-size: auto 100%;
  background-position: right center;
  background-repeat: no-repeat;
  overflow: hidden;
  overflow-x: hidden;
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0;
  top: 0;
`;
export const Content = styled.div`
  z-index: 3;
  position: relative;
  height: 100vh;
  width: 100vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
