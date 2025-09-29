/*import { createGlobalStyle } from "styled-components";

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

  body::-webkit-scrollbar {
  display: none;               /* Chrome/Safari/Webkit */
}

  @font-face {
    font-family: 'GangwonEduOTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFLightA.woff') format('woff');
    font-weight: 400;
    font-display: swap;
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

  @font-face {
      font-family: 'Great Vibes';
      src: url('/fonts/GreatVibes-Regular.ttf') format('truetype');
      font-weight: normal;
  }

  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
  }

  body {
    background-color: #f0f0f0;
    height: 100%;
    font-family: 'GangwonEduAll', 'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont,
      system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Pyeojin Gothic','Cafe24Ohsquare', 'SeoulAlrim',sans-serif,'GangwonEduOTF';
    font-weight: 400;
  }

  #root {
    height: 100%;
  }

`;

export default GlobalStyle;
*/
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * { margin: 0; padding: 0; box-sizing: border-box; }

  html, body {
    width: 100%;
    max-width: 100vw;
    overflow-x: hidden;
    height: 100%;
  }

  body::-webkit-scrollbar { display: none; }

  /* GangwonEduAll: woff2 -> woff -> ttf */
  @font-face {
    font-family: 'GangwonEduAll';
    src:
      url('/fonts/GangwonEduAll-Light.woff2') format('woff2'),
      url('/fonts/GangwonEduAll-Light.woff') format('woff'),
      url('/fonts/GangwonEduAll-Light.ttf') format('truetype'); /* 마지막 백업 */
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Pretendard: woff2/woff 권장 (woff2 없으면 아래 woff만 두어도 됨) */
  @font-face {
    font-family: 'Pretendard';
    src:
      url('/fonts/Pretendard-Medium.woff2') format('woff2'),
      url('/fonts/Pretendard-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  /* GangwonEduOTF (noonnu CDN) */
  @font-face {
    font-family: 'GangwonEduOTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFLightA.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* Cafe24Ohsquare: 가능하면 woff2/woff 추가 */
  @font-face {
    font-family: 'Cafe24Ohsquare';
    src:
      url('/fonts/Cafe24Ohsquare-v2.0.woff2') format('woff2'),
      url('/fonts/Cafe24Ohsquare-v2.0.woff') format('woff'),
      url('/fonts/Cafe24Ohsquare-v2.0.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* SeoulAlrim */
  @font-face {
    font-family: 'SeoulAlrim';
    src:
      url('/fonts/SeoulAlrimTTF-Heavy.woff2') format('woff2'),
      url('/fonts/SeoulAlrimTTF-Heavy.woff') format('woff'),
      url('/fonts/SeoulAlrimTTF-Heavy.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  /* Great Vibes (쓰면 유지, 안 쓰면 제거 가능) */
  @font-face {
    font-family: 'Great Vibes';
    src: url('/fonts/GreatVibes-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  /* 쓰고 싶은 폰트를 맨 앞에 */
  body {
    background-color: #f0f0f0;
    font-family:
      'GangwonEduAll',
      'Pretendard',
      -apple-system, BlinkMacSystemFont, system-ui, Roboto,
      'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic',
      'Cafe24Ohsquare', 'SeoulAlrim',
      'GangwonEduOTF',
      sans-serif;
    font-weight: 400;
  }

  #root { height: 100%; }
`;

export default GlobalStyle;


