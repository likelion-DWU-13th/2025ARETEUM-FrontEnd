import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  margin-top: 0px;
  // min-height: 100vh;
  height: 100vh;
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
  font-weight: 500;
  line-height: normal;
  /* 공통 복붙 */
  padding: 37%;
`;

export const Nav = styled.div`
  width: 393px;
  height: 15px;
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

export const TopWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;
export const Ment = styled.div`
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  font-family: GangwonEduAll;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const Date = styled.div`
  width: 115px;
  height: 25px;
  flex-shrink: 0;
  border-radius: 30px;
  background: rgba(227, 122, 173, 0.8);
  color: #fff;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  padding: 5.5px 10px;
`;

// 솜톡
export const TalkWrap = styled.div`
  flex: 1;
  width: 100%;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 10px;
  z-index: 10;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE, Edge */
  &::-webkit-scrollbar {
    /* Chrome, Safari */
    display: none;
  }
`;
export const MyMsg = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const MyBubble = styled.div`
  border-radius: 30px 0 30px 30px;
  background: rgba(255, 255, 255, 0.8);
  color: #000;
  font-family: GangwonEduAll;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px 14px;
  max-width: 139px;
  word-break: break-word;
`;

export const MsgTimeRight = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 2px;
  margin-right: 5px;
  text-align: right;
`;
//상대방 메세지
export const OtherMsg = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2px;
  margin-bottom: -12px;
`;
export const Profile = styled.img`
  width: 40px;
  height: 40px;
`;
export const BubbleRow = styled.div`
  display: inline-flex;
  align-items: flex-end;
  gap: 4px;
  max-width: 80%;
`;
export const OtherBubble = styled.div`
  border-radius: 0 30px 30px 30px;
  background: rgba(255, 255, 255, 0.8);
  color: #000;
  font-family: GangwonEduAll;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 10px 14px;
  max-width: 139px;
  word-break: break-word;
  margin-top: 30px;
`;
export const MsgTimeLeft = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-left: 4px;
  z-index: 10;
`;

//입력창
export const MsgInputWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  width: 345px;
  height: 50px;
  border-radius: 30px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 1px 0 #fff;
  padding: 0 12px;
  position: fixed;
  bottom: 50px;
  z-index: 10;
`;
export const MessgeBar = styled.input`
  flex: 1;
  height: 40px;
  color: #000;
  font-family: "GangwonEduAll";
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0 8px;
  margin-right: 5px;
  border: none;
  outline: none;
`;
export const SendBtn = styled.img`
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  cursor: pointer;
  user-select: none;
  -webkit-user-drag: none;
  z-index: 11;
`;
