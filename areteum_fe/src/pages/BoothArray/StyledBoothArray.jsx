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
  padding-bottom: 105px;
  align-items: center;
  /* 여기까지 공통 복붙 */

  background: linear-gradient(180deg, #4F95D1 20%, #ADCBF0 52%, #F0E6F2 95%);

 
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
  height: 5%;
  display: flex;
  bottom: 0;
  z-index: 100;
  
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
  margin-bottom:7%;
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
    cursor:pointer;
  }
`;

export const CategoryWrapper = styled.div`
    margin-top:5%;
    display: flex;
  justify-content: center;

`;

export const InformBox = styled.div`
  width: 87%;
  min-height: 113px;
  flex-shrink: 0;
  border-radius: 10px;
  background: rgba(227, 122, 173, 0.10);
  margin-top:7%;
  padding-left:10%;
  padding-top:5%;

ol {
  list-style: none;         
  counter-reset: item;      
  padding-left: 0;          
}

li {
  counter-increment: item;   
  margin-bottom: 5%;
  position: relative;
  padding-left: 28px;     
  
   color: #333;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

li::before {
  content: counter(item);   
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 20px;
  border-radius: 3px;        
  background: #E37AAD;     
  color: #fff;               
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 600;
  font-family: Pretendard;
}

`;