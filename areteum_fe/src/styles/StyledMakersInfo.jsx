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
    position: fixed;
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
  margin-left: 21px; /* 타이틀 따로 가운데 정렬하려다가(스크랩 버튼 부재) 백버튼 위치 틀어질까봐 임의로 조정했습니다! */

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
