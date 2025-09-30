import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "../../styles/StyledMakersInfo";

const InfoTab1 = () => {
  const handleInstaClick = () => {
    const instagramUrl = "https://www.instagram.com/ddwu_festival";
    window.location.href = instagramUrl;
  };

  return (
    <I.Box>
      <I.TabTitle1>
        동덕여대&nbsp;<span id="font">2025 ARETEUM</span>
      </I.TabTitle1>
      <I.TabSubTitle>
        : SOM<span id="font2">The</span>&nbsp;LAND
      </I.TabSubTitle>
      <I.TabImage1>
        <img
          id="tabImage1"
          src={`${process.env.PUBLIC_URL}/images/tabImage1.jpg`}
          alt="tabImage1"
          width="273px"
          height="auto"
        />
      </I.TabImage1>
      <I.TabImage1_1>
        <img
          id="tabImage1_1"
          src={`${process.env.PUBLIC_URL}/images/maker-background1-1.png`}
          alt="tabImage1_1"
          width="393px"
          height="auto"
        />
      </I.TabImage1_1>
      <I.TextBox>
        <I.Text1_1>
          일상과 현실에 지친 학우분들께
          <br />
          <span id="color-bold">환상적인 하루</span>를 선물해 드리고 싶습니다.
        </I.Text1_1>
        <I.Text2_1>
          무엇이든 꿈꿀 수 있는 이곳,
          <br />
          솜더랜드로 당신을 초대합니다.
        </I.Text2_1>
        <I.Text3_1>
          <span id="color-bold">Welcome to SOMtheLAND! </span>
        </I.Text3_1>
      </I.TextBox>
      <I.InstaBtn onClick={handleInstaClick}>축운위 인스타그램</I.InstaBtn>
      <I.LogoImage></I.LogoImage>
    </I.Box>
  );
};

export default InfoTab1;
