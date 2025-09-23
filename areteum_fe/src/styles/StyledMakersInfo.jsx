import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 0px;

  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  display: flex;
  flex-direction: column;
  width: 393px;
  flex-shrink: 0;
  padding-bottom: 105px;
  padding-top: 120px;

  /* 여기까지 공통 복붙 */
  width: 100%; /* ✅ 폭을 브라우저 기준으로 */
  max-width: 393px;
  min-height: 100vh;
  overflow: visible;

  background-size: cover;
  background-position: center -18px;
  background-repeat: no-repeat;

  #header-color {
    position: fixed;

    width: 393px;
    top: 0;
    z-index: 999;
    background: linear-gradient(
      to bottom,
      rgba(176, 225, 255, 1) 0%,
      rgba(176, 225, 255, 0.8) 60%,
      rgba(176, 225, 255, 0.5) 80%,
      rgba(176, 225, 255, 0) 100%
    );
  }
`;

export const Header = styled.div`
  position: sticky;
  z-index: 999;
  top: 0;
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 30px 18px;
  align-items: center;
  justify-content: space-between;

  #scrap {
    visibility: hidden;
  }
`; /* 공통 복붙 */

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-left: 21px; /* 타이틀 따로 가운데 정렬하려다가(스크랩 버튼 부재때문에 가운데 정렬이 안됨) 백버튼 위치 틀어질까봐 임의로 조정했습니다! */

  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`; /* 공통 복붙 */

export const TabMenu = styled.div`
  position: sticky;
  top: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 30px;
  align-items: center;
  justify-content: space-between;
  z-index: 998;
`;

export const Menu1 = styled.div`
  display: flex;
  align-items: center;
  border-bottom: ${(props) => (props.isActive ? "2px solid #e37aad" : "none")};
  padding: 0 12px 6px;

  color: ${(props) => (props.isActive ? "#E37AAD" : "#fff")};
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Menu2 = styled.div`
  display: flex;
  align-items: center;
  border-bottom: ${(props) => (props.isActive ? "2px solid #e37aad" : "none")};
  padding: 0 12px 6px;

  color: ${(props) => (props.isActive ? "#E37AAD" : "#fff")};
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Menu3 = styled.div`
  display: flex;
  align-items: center;
  border-bottom: ${(props) => (props.isActive ? "2px solid #e37aad" : "none")};
  padding: 0 12px 6px;

  color: ${(props) => (props.isActive ? "#E37AAD" : "#fff")};
  text-align: center;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Icons = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  #left {
    width: 23px;
    height: 22px;
    flex-shrink: 0;
  }

  #right {
    width: 21px;
    height: 18px;
    flex-shrink: 0;
  }
`; /* 공통 복붙 */

export const Nav = styled.div`
  width: 393px;
  height: 105px;
  position: fixed;
  display: flex;
  bottom: 0;
  z-index: 100;

  img {
    width: 393px;
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

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TabTitle = styled.div`
  display: flex;
  justify-content: center;

  padding: 25px;
  color: #fff;
  text-shadow: 0 0 15px #e37aad;
  font-family: "Cafe24Ohsquare";
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const TabImage2 = styled.div`
  display: flex;
  justify-content: center;
`;

export const TabImage3 = styled.div`
  display: flex;
  justify-content: center;
  width: 345px;
  height: 197px;
  flex-shrink: 0;

  #tabImage3 {
    border-radius: 15px;
  }
`;

export const TextBox = styled.div``;

export const Text1 = styled.div`
  margin: 30px 0;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */

  #color-bold {
    font-weight: 600;
    color: var(--main, #e37aad);
  }
`;

export const Text2 = styled.div`
  margin: 30px 0;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */

  #color-bold {
    font-weight: 600;
    color: var(--main, #e37aad);
  }
`;

export const Text3 = styled.div`
  margin: 30px 0;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 125% */

  #color-bold {
    font-weight: 600;
    color: var(--main, #e37aad);
  }
`;

export const InstaBtn = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: inline-flex;
  padding: 11px 26px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: #e9539c;
  box-shadow: 0 0 5px 0 rgba(255, 255, 255, 0.7) inset;
`;

export const Title1 = styled.div`
  padding: 23px 0 23px 0;
  color: #fff;
  text-shadow: 0 0 20px #f356a2;
  font-family: SeoulAlrim;
  font-size: 22px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

export const Title2 = styled.div`
  padding: 27px 0 23px 0;
  color: #fff;
  text-shadow: 0 0 20px #199eff;
  font-family: SeoulAlrim;
  font-size: 22px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

export const Title3 = styled.div`
  padding: 27px 0 23px 0;
  color: #fff;
  text-shadow: 0 0 20px #5337f5;
  font-family: SeoulAlrim;
  font-size: 22px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

export const MakerIilustBox = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const MakerBox = styled.div`
  padding: 2px 5px;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  #subText {
    font-size: 12px;
    font-weight: 500;
  }

  #subText span {
    display: block;
    line-height: 1.2;
  }

  #somsom1 {
    margin-bottom: -8px;
    width: 75px;
    flex-shrink: 0;
  }

  #somsom2 {
    margin-bottom: -8px;
    width: 75px;
    flex-shrink: 0;
  }

  #somsom3 {
    margin-bottom: -8px;
    width: 75px;
    flex-shrink: 0;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  padding: 45px 0;
  gap: 17px;s
`;

export const Btn1 = styled.div`
  color: #e9539c;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: inline-flex;
  padding: 9px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1) inset;
`;

export const Btn2 = styled.div`
  color: #FFF;
text-align: center;
font-family: Pretendard;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: normal; inset;
display: inline-flex;
padding: 9px 20px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 20px;
background: #E9539C;
box-shadow: 0 0 5px 0 rgba(255, 255, 255, 0.80) inset;
`;

export const LogoImage = styled.div`
  padding: 180px 0;
`;
