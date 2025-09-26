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
  padding-top: 80px;
  align-items: center;
  /* 여기까지 공통 복붙 */

  background: linear-gradient(
    180deg, #6FB7EA 10.26%, #FFE8FA 99.99%
  );
  #background {
    width: 393px;
    object-fit: cover;
    position: fixed;
  }
   &::before{
    content:"";
    position: fixed;
    top: 0; left: 50%; transform: translateX(-50%);
    width: 393px; height: 80px; 
    pointer-events: none;
    background: linear-gradient(180deg, rgba(111,183,234,.8), rgba(111,183,234,0));
    z-index: 900;                       
  }
`;

export const Header = styled.div`
height: 80px;
  width: 393px;
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
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
   /* 공통 복붙 */
  margin-right: 130px;
`;

export const Nav = styled.div`
  width: 393px;
  height: 105px;
  display: flex;
  position: relative;
  z-index: 100;
  margin-top: 33px;
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
  opacity: ${({ active }) => (active ? "1" : "0.6")};

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

export const StarWrapper = styled.div`
margin-left: 204px;
margin-top: 18px;
position: relative;
`;

export const SmallStar = styled.div`
position: absolute;
left: 22px;
top: 23px;
`;

export const Firework = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-left: 40px;
margin-top: 46px;
`;

export const TableWrapper = styled.div`
position: absolute;
left: 27px;
top: 187px;
z-index: 1;
`;

export const Alarm = styled.div`
border-radius: 15px;
 background: rgba(227, 122, 173, 0.1);
width: 324px;
height: auto;
color: #FFF;
text-align: center;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: normal;
margin-top: 440px;
padding: 12px 0;
`;

export const AlarmFood = styled.div`
border-radius: 15px;
 background: rgba(227, 122, 173, 0.1);
width: 324px;
height: auto;
color: #FFF;
text-align: center;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 600;
margin-top: 10px;
padding: 12px 0;
`;