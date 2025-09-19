import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "../../styles/StyledMakersInfo";

const InfoTab3 = () => {
  const [activeTab, setActiveTab] = useState("menu1");
  const handleInstaClick = () => {
    const instagramUrl = "https://www.instagram.com/ddwu_festival";
    window.location.href = instagramUrl;
  };

  return (
    <I.Box>
      <I.TabTitle>동덕여대 멋쟁이사자처럼 13기</I.TabTitle>
      <I.TabImage3>
        <img
          id="tabImage3"
          src={`${process.env.PUBLIC_URL}/images/tabImage3.jpg`}
          alt="tabImage3"
          width="345px"
          height="auto"
        />
      </I.TabImage3>
      <I.TextBox>
        <I.Text1>
          멋쟁이사자처럼은
          <br />
          "비전공자도 웹서비스를 만들 수 있다!"는
          <br />
          슬로건으로 시작된,
          <span id="color-bold"> 국내 최대 규모의 IT 창업·개발 동아리</span>
          <br />
          입니다.
        </I.Text1>
        <I.Text2>
          <span id="color-bold">"내 아이디어를 내 손으로 실현한다"</span>는 모토
          아래,
          <br />
          누구나 자신만의 서비스를 만들 수 있도록
          <br />
          다양한 스터디와 네트워킹, 실전 프로젝트를 진행합니다.
        </I.Text2>
        <I.Text3>
          동덕여대 멋쟁이사자처럼 13기는
          <br />
          <span id="color-bold">기획/디자인, 프론트엔드, 백엔드</span> 세 파트로
          구성되어
          <br />
          협업을 통해 성장하고 있어요.
        </I.Text3>
        <I.Text3>
          이번 축제 페이지도 <span id="color-bold">동덕여대 아기사자</span>들이
          <br />
          직접 디자인하고 개발한 결과물입니다.
        </I.Text3>
      </I.TextBox>
      <I.Title1>Plan & Design</I.Title1>
      <I.MakerIilustBox>
        <I.MakerBox>
          <img
            id="somsom1"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom1.svg`}
            alt="somsom1"
            width="53px"
            height="auto"
          />
          전지영
          <br />
          <span id="subText">데이터사이언스</span>
        </I.MakerBox>
      </I.MakerIilustBox>
      <I.InstaBtn onClick={handleInstaClick}>축운위 인스타그램</I.InstaBtn>
    </I.Box>
  );
};

export default InfoTab3;
