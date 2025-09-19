import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 0px;
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  display: flex;
  flex-direction: column;
  width: 393px;
  flex-shrink: 0;
  padding-bottom: 105px;
  align-items: center;
  /* 여기까지 공통 복붙 */

  #background {
    width: 393px;
    object-fit: cover;
    position: absolute;
    z-index: -1;
  }
`;

export const Header = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px;
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
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 30px;
  align-items: center;
  justify-content: space-between;
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
  font-weight: 400;
  line-height: 20px; /* 125% */

  #color-bold {
    font-weight: 500;
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
  font-weight: 400;
  line-height: 20px; /* 125% */

  #color-bold {
    font-weight: 500;
    color: var(--main, #e37aad);
  }
`;

export const Text3 = styled.div`
  margin: 28px 0;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */

  #color-bold {
    font-weight: 500;
    color: var(--main, #e37aad);
  }
`;

export const InstaBtn = styled.div`
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
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
  color: #fff;
  text-shadow: 0 0 20px #f356a2;
  font-family: SeoulAlrim;
  font-size: 22px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;

export const MakerIilustBox = styled.div``;

export const MakerBox = styled.div``;
