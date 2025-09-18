import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import GlobalStyle from "../GlobalStyles";
import * as S from "../../styles/StyledSomtalk";

const Somtalk = () => {
  const navigate = useNavigate();
  const [input, setIput] = useState("");
  const [messages, setMessages] = useState([]);

  const goBack = () => {
    navigate(-1); // 직전페이지로 이동
  };

  // 오늘날짜
  const ToDay = () => {
    const today = new Date();

    const month = String(today.getMonth() + 1);
    const day = String(today.getDate());
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = week[today.getDay()];
    return `${month}월 ${day}일 ${dayOfWeek}요일 `;
  };

  // 메세지 전송
  const send = async () => {
    const text = input.trim();
  };
  return (
    <S.Container>
      <img
        id="background"
        src={`${process.env.PUBLIC_URL}/images/background.png`}
        alt="background"
        onClick={goBack}
      />
      <S.Header>
        <img
          id="back"
          src={`${process.env.PUBLIC_URL}/images/back.png`}
          alt="back"
        />
        <S.Title>솜솜수다</S.Title>
      </S.Header>
      <S.TopWrap>
        <S.Ment>
          솜솜이들과 함께
          <br />
          이야기를 나눠보세요
        </S.Ment>
        <S.Date>{ToDay()}</S.Date>
      </S.TopWrap>
      <S.TalkWrap></S.TalkWrap>

      <S.Nav>
        <img
          id="footer"
          src={`${process.env.PUBLIC_URL}/images/footer.png`}
          alt="test"
        />
        <div id="mark">DONGDUK WOMEN’S UNIVERSITY</div>
      </S.Nav>
    </S.Container>
  );
};

export default Somtalk;
