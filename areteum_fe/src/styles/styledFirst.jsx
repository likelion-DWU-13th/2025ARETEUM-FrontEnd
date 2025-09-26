import { styled,css } from "styled-components";

const GangwonFont = css`
 @font-face {
    font-family: 'GangwonEduOTF';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFLightA.woff') format('woff');
    font-weight: 400;
    font-display: swap;
}
`;

export const Container = styled.div`
${GangwonFont}
font-family: "GangwonEduOTF";
  position: relative;
  margin: 0 auto;
  margin-top: 0px;
  height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  display: flex;
  flex-direction: column;
  width: 100%; /* 화면 크기에 맞추기 */
  max-width: 393px;
  min-width: 320px;
  flex-shrink: 0;
  padding-top: 80px;

  align-items: center;
  /* 여기까지 공통 복붙 */

  background: linear-gradient(180deg, #4f95d1 0%, #adcbf0 41.83%, #f0e6f2 95.19%);

  #background {
    width: 393px;
    object-fit: cover;
    position: fixed;
  }
`;

export const Nav = styled.div`
  width: 393px;
  height: 105px;
  display: flex;
  position: relative;
  z-index: 100;
  margin-top: auto;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 105px;
  }

  #mark {
    color: #a74063;
    font-family: Pyeojin Gothic;
    font-size: 10px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    position: absolute;
    bottom: 15px;
    left: 116px;
  }
`; /* 공통 복붙 */

export const Text = styled.div`
color: rgba(255, 255, 255, 0.80);
text-align: center;
text-shadow: 0 0 5px rgba(255, 255, 255, 0.80);
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;

`;

export const Enter = styled.div`
width: 85px;
height: 40px;
flex-shrink: 0;
border-radius: 15px;
background: rgba(227, 122, 173, 0.3);
box-shadow: 0 0 5px 0 #E37AAD;
color: #FFF;
text-align: center;
text-shadow: 0 0 5px rgba(255, 255, 255, 0.80);
font-family: "GangwonEduOTF";
font-size: 20px;
font-style: normal;
font-weight: 300;
backdrop-filter: blur(10px);
margin-top: 480px;
display: flex;
align-items: center;
justify-content: center;
`;

export const Box = styled.div`
height: 100px;
`;