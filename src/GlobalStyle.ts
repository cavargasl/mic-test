import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Roboto, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    
    font-size: 12px;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    
    --theme-background-primary: #efefef;
    --theme-primary: #131e29;
    --theme-secundary: #ea0029;

    --theme-gray: #979899;
  }

  html {
    background: var(--theme-background-primary);
    color: white;
  }

  body {
    margin: 0;
    box-sizing: border-box;
  }

  .splide__pagination {
    bottom: -2.5em;
  }
  .splide__pagination__page{
    background: var(--theme-gray);
    height: 10px;
    width: 10px;
  }
  .splide__pagination__page.is-active{
    background: var(--theme-primary);
    transform: none;
    width: 20px;
    height: 10px;
    border-radius: 5px;
    opacity: 1;
  }
`;

export default GlobalStyle;