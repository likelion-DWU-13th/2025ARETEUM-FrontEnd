import styled from "styled-components";

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

  background: linear-gradient(
    180deg,
    #4f95d1 0%,
    #adcbf0 41.83%,
    #f0e6f2 95.19%
  );

  #background {
    width: 393px;
    object-fit: cover;
    position: fixed;
    z-index: 1;
  }
`;

export const Header = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
  position: relative;
  z-index: 10;
  /* 공통 복붙 */

  img {
    cursor: pointer;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  /* 공통 복붙 */
  padding: 38%;
`;

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

export const TopWrap = styled.div``;
export const Ment = styled.div``;
export const Date = styled.div``;

// 솜톡
export const TalkWrap = styled.div``;
