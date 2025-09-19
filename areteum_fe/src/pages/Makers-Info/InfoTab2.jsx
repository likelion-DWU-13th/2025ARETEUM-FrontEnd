import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "../../styles/StyledMakersInfo";

const InfoTab2 = () => {
  const handleInstaClick = () => {
    const instagramUrl = "https://www.instagram.com/ddwu_festival";
    window.location.href = instagramUrl;
  };

  return (
    <I.Box>
      <I.TabTitle>동덕여대 축제운영위원회</I.TabTitle>
      <I.TabImage2>
        <img
          id="tabImage2"
          src={`${process.env.PUBLIC_URL}/images/tabImage2.svg`}
          alt="tabImage2"
          width="235px"
          height="auto"
        />
      </I.TabImage2>
      <I.TextBox>
        <I.Text1>
          동덕여자대학교 <span id="color-bold">축제운영위원회</span>는<br />
          2021년 9월에 설립되어 동덕여자대학교의
          <br />
          재학생들을 위한 문화사업을 기획하고, 운영, 총괄하는
          <br />
          교내 특별기구입니다.
        </I.Text1>
        <I.Text2>
          축제위원회는 설립 이후부터 현재까지
          <br />
          다양한 <span id="color-bold">문화 사업</span>과{" "}
          <span id="color-bold">'오솜도솜데이'</span> 진행 뿐 아니라
          <br />
          교내 대형 행사 중 하나인{" "}
          <span id="color-bold">'대동제(ARETEUM)'</span>의
          <br />
          틀부터 실행까지 모든 단계에서 활동하며 독창적이고
          <br />
          특색 있는 축제를 실현해 왔습니다.
        </I.Text2>
        <I.Text3>
          <span id="color-bold">
            [기획국, 무대국, 사무국, 행사국, 제작홍보국]
          </span>
          총 5개의
          <br />
          국서가 상호 협력하여 활동하고 있습니다.
        </I.Text3>
      </I.TextBox>
      <I.InstaBtn onClick={handleInstaClick}>축운위 인스타그램</I.InstaBtn>
      <I.LogoImage>
        <img
          id="logoImage"
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="logoImage"
        />
      </I.LogoImage>
    </I.Box>
  );
};

export default InfoTab2;
