import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Kumbh Sans', sans-serif;
    scroll-behavior: smooth;
    

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 6px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  body {
    background-color: #121214;
  }
  
  }

  :root {
    /* color */
    --main-color: #fff;
    --second-color: #353535;
    --third-color: #f0eeea;
    --fourth-color: #222222;
    --second-main-color: #6f00ff;
    --card-color: #202024;
    --background-color: #121214;
    /* box-shadow */
    --black-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.267);
    /* borde-radius */
    --border-50-img: 50%;
    --border-slim: 25px;
    --card-img-big: 25px 25px 0px 0px;
    --card-img-small: 5px 0px 0px 5px;
    --button-border: 45px;
    /* font */
    --second-font: "Playfair Display";
    /* tags-size  */
    --size-p: 15px;
    --size-h3: 18px;
    --size-h2: 20px;
    --size-h1: 28px;
  }
`;
