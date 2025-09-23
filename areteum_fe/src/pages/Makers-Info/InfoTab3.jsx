import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "../../styles/StyledMakersInfo";

const InfoTab3 = () => {
  const [activeTab, setActiveTab] = useState("menu1");
  const handleBtn1Click = () => {
    const instagramUrl = "https://www.instagram.com/likelion.univ";
    window.location.href = instagramUrl;
  };

  const handleBtn2Click = () => {
    const instagramUrl = "https://www.instagram.com/dongduk_likelion";
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
            src={`${process.env.PUBLIC_URL}/images/maker-somsom1.png`}
            alt="somsom1"
          />
          <div>
            전지영
            <br />
            <span id="subText">데이터사이언스</span>
          </div>
        </I.MakerBox>
        <I.MakerBox>
          <img
            id="somsom1"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom1.png`}
            alt="somsom1"
          />
          <div>
            조정인
            <br />
            <span id="subText">데이터사이언스</span>
          </div>
        </I.MakerBox>
      </I.MakerIilustBox>
      <I.MakerIilustBox>
        <I.MakerBox>
          <img
            id="somsom2"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom2.png`}
            alt="somsom2"
          />
          <div>
            이승언
            <br />
            <span id="subText">미디어디자인</span>
          </div>
        </I.MakerBox>
        <I.MakerBox>
          <img
            id="somsom2"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom2.png`}
            alt="somsom2"
          />
          <div>
            이정음
            <br />
            <span id="subText">HCI사이언스</span>
          </div>
        </I.MakerBox>
        <I.MakerBox>
          <img
            id="somsom2"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom2.png`}
            alt="somsom2"
          />
          <div>
            유효민
            <br />
            <span id="subText">디지털공예</span>
          </div>
        </I.MakerBox>
        <I.MakerBox>
          <img
            id="somsom2"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom2.png`}
            alt="somsom2"
          />
          <div>
            장수경
            <br />
            <span id="subText">
              <span>커뮤니케이션</span>
              <span>콘텐츠</span>
            </span>
          </div>
        </I.MakerBox>
      </I.MakerIilustBox>
      <I.Title2>Front-End</I.Title2>
      <I.MakerIilustBox>
        <I.MakerBox>
          <img
            id="somsom1"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom1.png`}
            alt="somsom1"
          />
          <div>
            김하희
            <br />
            <span id="subText">데이터사이언스</span>
          </div>
        </I.MakerBox>
        <I.MakerBox>
          <img
            id="somsom1"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom1.png`}
            alt="somsom1"
          />
          <div>
            남지연
            <br />
            <span id="subText">컴퓨터</span>
          </div>
        </I.MakerBox>
        <I.MakerBox>
          <img
            id="somsom1"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom1.png`}
            alt="somsom1"
          />
          <div>
            허민영
            <br />
            <span id="subText">컴퓨터</span>
          </div>
        </I.MakerBox>
      </I.MakerIilustBox>
      <I.MakerIilustBox>
        <I.MakerBox>
          <img
            id="somsom2"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom2.png`}
            alt="somsom2"
          />
          <div>
            고예진
            <br />
            <span id="subText">정보통계</span>
          </div>
        </I.MakerBox>
        <I.MakerBox>
          <img
            id="somsom2"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom2.png`}
            alt="somsom2"
          />
          <div>
            박민지
            <br />
            <span id="subText">국문</span>
          </div>
        </I.MakerBox>
        <I.MakerBox>
          <img
            id="somsom2"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom2.png`}
            alt="somsom2"
          />
          <div>
            박슬기
            <br />
            <span id="subText">HCI사이언스</span>
          </div>
        </I.MakerBox>
      </I.MakerIilustBox>
      <I.MakerIilustBox>
        <I.MakerBox>
          <img
            id="somsom3"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom3.png`}
            alt="somsom3"
          />
          <div>
            송이림
            <br />
            <span id="subText">HCI사이언스</span>
          </div>
        </I.MakerBox>
        <I.MakerBox>
          <img
            id="somsom3"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom3.png`}
            alt="somsom3"
          />
          <div>
            신채영
            <br />
            <span id="subText">HCI사이언스</span>
          </div>
        </I.MakerBox>
        <I.MakerBox>
          <img
            id="somsom3"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom3.png`}
            alt="somsom3"
          />
          <div>
            임하연
            <br />
            <span id="subText">컴퓨터</span>
          </div>
        </I.MakerBox>
        <I.MakerBox>
          <img
            id="somsom3"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom3.png`}
            alt="somsom3"
          />
          <div>
            전지은
            <br />
            <span id="subText">컴퓨터</span>
          </div>
        </I.MakerBox>
      </I.MakerIilustBox>
      <I.Title3>Back-End</I.Title3>
      <I.MakerIilustBox>
        <I.MakerBox>
          <img
            id="somsom1"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom1.png`}
            alt="somsom1"
          />
          <div>
            김가현
            <br />
            <span id="subText">정보통계</span>
          </div>
        </I.MakerBox>
        <I.MakerBox>
          <img
            id="somsom1"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom1.png`}
            alt="somsom1"
          />
          <div>
            김민주
            <br />
            <span id="subText">컴퓨터</span>
          </div>
        </I.MakerBox>
        <I.MakerBox>
          <img
            id="somsom1"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom1.png`}
            alt="somsom1"
          />
          <div>
            이가연
            <br />
            <span id="subText">컴퓨터</span>
          </div>
        </I.MakerBox>
        <I.MakerBox>
          <img
            id="somsom1"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom1.png`}
            alt="somsom1"
          />
          <div>
            장하연
            <br />
            <span id="subText">컴퓨터</span>
          </div>
        </I.MakerBox>
      </I.MakerIilustBox>
      <I.MakerIilustBox>
        <I.MakerBox>
          <img
            id="somsom2"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom2.png`}
            alt="somsom2"
          />
          <div>
            가유빈
            <br />
            <span id="subText">컴퓨터</span>
          </div>
        </I.MakerBox>
        <I.MakerBox>
          <img
            id="somsom2"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom2.png`}
            alt="somsom2"
          />
          <div>
            고소영
            <br />
            <span id="subText">컴퓨터</span>
          </div>
        </I.MakerBox>
        <I.MakerBox>
          <img
            id="somsom2"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom2.png`}
            alt="somsom2"
          />
          <div>
            김민기
            <br />
            <span id="subText">데이터사이언스</span>
          </div>
        </I.MakerBox>
        <I.MakerBox>
          <img
            id="somsom2"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom2.png`}
            alt="somsom2"
          />
          <div>
            김소망
            <br />
            <span id="subText">컴퓨터</span>
          </div>
        </I.MakerBox>
      </I.MakerIilustBox>
      <I.MakerIilustBox>
        <I.MakerBox>
          <img
            id="somsom3"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom3.png`}
            alt="somsom3"
          />
          <div>
            신희진
            <br />
            <span id="subText">정보통계</span>
          </div>
        </I.MakerBox>
        <I.MakerBox>
          <img
            id="somsom3"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom3.png`}
            alt="somsom3"
          />
          <div>
            이주연
            <br />
            <span id="subText">컴퓨터</span>
          </div>
        </I.MakerBox>
        <I.MakerBox>
          <img
            id="somsom3"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom3.png`}
            alt="somsom3"
          />
          <div>
            전수연
            <br />
            <span id="subText">컴퓨터</span>
          </div>
        </I.MakerBox>
        <I.MakerBox>
          <img
            id="somsom3"
            src={`${process.env.PUBLIC_URL}/images/maker-somsom3.png`}
            alt="somsom3"
          />
          <div>
            최이주
            <br />
            <span id="subText">정보통계</span>
          </div>
        </I.MakerBox>
      </I.MakerIilustBox>
      <I.BtnBox>
        <I.Btn1 onClick={handleBtn1Click}>멋사 대학 인스타그램</I.Btn1>
        <I.Btn2 onClick={handleBtn2Click}>동덕 멋사 인스타그램</I.Btn2>
      </I.BtnBox>
      <I.LogoImage></I.LogoImage>
    </I.Box>
  );
};

export default InfoTab3;
