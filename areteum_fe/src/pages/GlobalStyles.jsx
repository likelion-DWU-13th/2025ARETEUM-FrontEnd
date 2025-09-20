// /mnt/data/GlobalStyles.jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
  }

  @font-face {
  font-family: 'GangwonEduAll';
  src: url('/fonts/GangwonEduAll-Light.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  }

  @font-face {
      font-family: 'Cafe24Ohsquare';
      src: url('/fonts/Cafe24Ohsquare-v2.0.ttf') format('truetype');
      font-weight: normal;
  }

   @font-face {
      font-family: 'SeoulAlrim';
      src: url('/fonts/SeoulAlrimTTF-Heavy.woff2') format('woff2'),
       url('/fonts/SeoulAlrimTTF-Heavy.woff') format('woff'),
      url('/fonts/SeoulAlrimTTF-Heavy.ttf') format('truetype');
      font-weight: normal;
  }


  body {
    background-color: #f0f0f0;
    height: 100%;
    font-family: 'GangwonEduAll', 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont,
      system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Pyeojin Gothic','Cafe24Ohsquare', 'SeoulAlrim',sans-serif;
    font-weight: 400;
  }

  #root {
    height: 100%;
  }

`;

export default GlobalStyle;
