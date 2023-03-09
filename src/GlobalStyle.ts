import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    font-family: Roboto, Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    
    --theme-background-primary: #efefef;
    --theme-primary: #131e29;
    --theme-secundary: #ea0029;
  }

  html {
    background: var(--theme-background-primary);
    color: white;
  }

  body {
    margin: 0;
    box-sizing: border-box;
    font-size: 12px;
  }
`;

export default GlobalStyle;