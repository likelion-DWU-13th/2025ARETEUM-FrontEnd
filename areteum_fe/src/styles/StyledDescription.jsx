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
  background: #fff;
  width: 393px;
  flex-shrink: 0;
  padding-bottom: 200px;
  background-image: url("/images/detail_bg.svg");
  background-repeat: repeat-y;
  background-size: cover;
`;

export const Header = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
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
`;

export const Nav = styled.div`
  width: 393px;
  height: 105px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  padding-top: 15px;
  padding-bottom: 13px;

  img {
    width: 393px;
    height: 105px;
  }
`;

export const Wrapper = styled.div`
`

export const DetailWrapper = styled.div`
margin-top: 90px;
display: flex;
flex-direction: column;
align-items: center;
`

export const BoothName = styled.div`
color: #000;
text-align: center;
font-family: Pretendard;
font-size: 25px;
font-style: normal;
font-weight: 600;
line-height: normal;
`

export const CategoryName = styled.div`
width: 35px;
height: 20px;
flex-shrink: 0;
border-radius: 15px;
border: 1px solid #E37AAD;
background: #E37AAD;
box-shadow: 0 0 2px 0 #DB7EAD;
color: #FFF;
text-align: center;
font-family: Pretendard;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-top: 10px;
align-items: center;
justify-content: center;
`

export const Tab = styled.div`
display: flex;
gap: 96px;
margin-top: 24px;
`

export const Tab1 = styled.div`
width: 65px;
height: 20px;
flex-shrink: 0;
color: ${(props) => (props.isActive ? "#E37AAD" : "rgba(0, 0, 0, 0.30)")};
text-align: center;
font-family: Pretendard;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: normal;
cursor: pointer;
`

export const Tab1Bg = styled.div`
fill: radial-gradient(50% 50% at 50% 50%, rgba(227, 122, 173, 0.35) 0%, rgba(227, 122, 173, 0.20) 100%);
filter: drop-shadow(0 0 10px rgba(227, 122, 173, 0.30)) blur(2.5px);
`

export const Tab2 = styled.div`
width: 65px;
height: 20px;
flex-shrink: 0;
color: ${(props) => (props.isActive ? "#E37AAD" : "rgba(0, 0, 0, 0.30)")};
text-align: center;
font-family: Pretendard;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: normal;
cursor: pointer;
`
export const InfoWrapper = styled.div`
display: flex;
flex-direction: column;
align-self: flex-start;
padding: 30px;
gap: 5px;
`

export const SubTitle = styled.div`
color: #000;
font-family: Pretendard;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: normal;
`

export const InfoBox = styled.div`
width: 300px;
flex-shrink: 0;
border-radius: 10px;
background: rgba(227, 122, 173, 0.10);
padding: 20px;
display: flex;
flex-direction: column;
gap: 15px;
`

export const InfoItem = styled.div`
display: flex;
align-items: center;
gap: 5px;
color: #000;
font-family: Pretendard;
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
`