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

  background: linear-gradient(180deg, #4f95d1 0%, #adcbf0 41.83%, #f0e6f2 95.19%);

  #background {
    width: 393px;
    object-fit: cover;
    position: fixed;
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
`; /* 공통 복붙 */

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
`; /* 공통 복붙 */

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

export const DateWrapper = styled.div`
  display: flex;
  position: relative;
  width: 393px;
  justify-content: center;
  align-items: center;
  gap: 40px;
`;

export const Date = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  #text {
    position: absolute;
    top: 25px;
    left: 24px;

    color: #e37aad;
    text-align: center;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const Search = styled.div`
  width: 345px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.7);
  margin-top: 30px;
  margin-bottom: 20px;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  input {
    border: none;
    background-color: transparent;
    width: 280px;
    color: rgba(0, 0, 0, 0.3);
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  input:focus {
    outline: none;
    border: none;
    box-shadow: none;
  }

  #search {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
  }
`;
