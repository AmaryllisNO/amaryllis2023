import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 @font-face {
   font-family: 'Atlas Grotesk';
   src: local('Atlas Grotesk') url(../public/fonts/AtlasGrotesk.otf) format('truetype');
 }

  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: 0.2s;
    scroll-behaviour: smooth;
    font-family:  ${({ theme }) => theme.fonts.main};
  }

  body { 
      background-color: ${({ theme }) => theme.colors.background};
      margin: 0;
      padding: 0;
      color: white;
      min-height: 100%;
    }

  h1 {
    font-style: italic;
    margin: 10px 0 10px 0;
  }

  p {
    font-size: 1rem;
    color: #D0D0D0;
    margin: 10px 0 10px 0;
    transition:  width 0.5s;
  }

  a {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;
