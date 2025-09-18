import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";
import * as S from "../../styles/StyledSomtalk";

const Somtalk = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const stompClient = useRef(null);
  const listRef = useRef(null);
  const myId = useRef(`client-${Date.now()}`);
  const goBack = () => {
    navigate(-1); // 직전페이지로 이동
  };

  //시간 포맷 설정
  // 맨 위 Somtalk 안에 헬퍼 두 개 추가
  const formatTime = (d) =>
    d.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

  const timeFromCreatedAt = (createdAt) => {
    if (!createdAt) return null;

    if (createdAt.includes("T")) {
      const dt = new Date(createdAt);
      if (!isNaN(dt)) return formatTime(dt);
    }

    const parts = createdAt.split(",");
    if (parts.length > 1) return parts[1].trim().toLowerCase();
    return null;
  };

  //톡 서버 연결
  useEffect(() => {
    const client = new Client({
      // brokerURL: "ws://localhost:8080/ws",
      webSocketFactory: () => new SockJS("http://localhost:8080/ws"),
      onConnect: () => {
        client.subscribe("/topic/chat", (msg) => {
          const body = JSON.parse(msg.body);

          // 서버가 createdAt 주면 파싱, 없으면 현재 시각
          const time =
            timeFromCreatedAt(body.createdAt) ?? formatTime(new Date());

          setMessages((prev) => [...prev, { ...body, time }]);
        });
      },
    });

    client.activate();
    stompClient.current = client;

    return () => client.deactivate();
  }, []);

  // 메세지 전송
  const send = async () => {
    const text = input.trim();
    if (!text) return;

    const message = {
      clientId: myId.current,
      content: text,
    };

    // 서버로 메시지 전송
    stompClient.current.publish({
      destination: "/app/chat",
      body: JSON.stringify(message),
    });

    setInput("");
  };
  // 엔터
  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  // 자동 스크롤
  useEffect(() => {
    listRef.current?.scrollTo(0, listRef.current.scrollHeight);
  }, [messages]);

  // 과거 채팅내역 불러오기
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await fetch("/chat/history");

        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();

        //날짜 가져오기
        const formatted = data.map((item) => ({
          ...item,
          time: timeFromCreatedAt(item.createdAt) ?? "", // createdAt 없으면 빈값
        }));
        setMessages(formatted);
      } catch (err) {
        console.error("채팅 내역 불러오기 실패:", err);
      }
    };

    fetchHistory();
  }, []);

  // 오늘날짜
  const ToDay = () => {
    const today = new Date();

    const month = String(today.getMonth() + 1);
    const day = String(today.getDate());
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const dayOfWeek = week[today.getDay()];
    return `${month}월 ${day}일 ${dayOfWeek}요일 `;
  };

  return (
    <S.Container>
      <img
        id="background"
        src={`${process.env.PUBLIC_URL}/images/background.png`}
        alt="background"
      />
      <S.Header>
        <img
          id="back"
          src={`${process.env.PUBLIC_URL}/images/back.png`}
          alt="back"
          onClick={goBack}
        />
        <S.Title>솜솜 수다</S.Title>
      </S.Header>
      <S.TopWrap>
        <S.Ment>
          솜솜이들과 함께
          <br />
          이야기를 나눠보세요
        </S.Ment>
        <S.Date>{ToDay()}</S.Date>
      </S.TopWrap>

      {/* 톡 메인 */}
      <S.TalkWrap ref={listRef}>
        {messages.map((msg, i) =>
          msg.clientId === myId.current ? (
            <S.MyMsg key={i}>
              <S.BubbleRow>
                <S.MsgTimeRight>{msg.time}</S.MsgTimeRight>
                <S.MyBubble>{msg.content}</S.MyBubble>
              </S.BubbleRow>
            </S.MyMsg>
          ) : (
            <S.OtherMsg key={i}>
              <S.Profile
                src={`${process.env.PUBLIC_URL}/images/somtalk_profile.svg`}
              />
              <S.BubbleRow>
                <S.OtherBubble>{msg.content}</S.OtherBubble>
                <S.MsgTimeLeft>{msg.time}</S.MsgTimeLeft>
              </S.BubbleRow>
            </S.OtherMsg>
          )
        )}
      </S.TalkWrap>

      <S.MsgInputWrap>
        <S.MessgeBar
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <S.SendBtn
          src={`${process.env.PUBLIC_URL}/images/sendBtn.svg`}
          alt="send"
          onClick={(e) => {
            e.preventDefault();
            send();
          }}
        />
      </S.MsgInputWrap>
      <S.Nav>
        <div id="mark">DONGDUK WOMEN’S UNIVERSITY</div>
      </S.Nav>
    </S.Container>
  );
};

export default Somtalk;
