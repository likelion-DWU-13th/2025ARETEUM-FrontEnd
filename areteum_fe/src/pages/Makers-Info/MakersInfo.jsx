import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoTab1 from "./InfoTab1";
import InfoTab2 from "./InfoTab2";
import InfoTab3 from "./InfoTab3";
import * as I from "../../styles/StyledMakersInfo";

const MakersInfo = () => {
  const [activeTab, setActiveTab] = useState("menu1");

  //탭 바 클릭 시 배경 이미지 동적 설정
  const backgroundImage = () => {
    switch (activeTab) {
      case "menu1":
        return `${process.env.PUBLIC_URL}/images/maker-background2.svg`;
      case "menu2":
        return `${process.env.PUBLIC_URL}/images/maker-background1.svg`;
      case "menu3":
        return `${process.env.PUBLIC_URL}/images/maker-background2.svg`;
      default:
        return `${process.env.PUBLIC_URL}/images/maker-background1.svg`;
    }
  };

  return (
    <I.Container>
      <img id="background" src={backgroundImage()} alt="background" />

      <I.Header>
        <img
          id="back"
          src={`${process.env.PUBLIC_URL}/images/back.png`}
          alt="back"
        />
        <I.Title>만든이들</I.Title>
        <img
          id="scrap"
          src={`${process.env.PUBLIC_URL}/images/scrap.png`}
          alt="scrap"
        />
      </I.Header>
      <I.TabMenu>
        <I.Menu1
          isActive={activeTab === "menu1"}
          onClick={() => setActiveTab("menu1")}
        >
          ARETEUM
        </I.Menu1>
        <I.Menu2
          isActive={activeTab === "menu2"}
          onClick={() => setActiveTab("menu2")}
        >
          축운위
        </I.Menu2>
        <I.Menu3
          isActive={activeTab === "menu3"}
          onClick={() => setActiveTab("menu3")}
        >
          멋사 13기
        </I.Menu3>
      </I.TabMenu>

      {activeTab === "menu1" ? (
        <InfoTab1 />
      ) : activeTab === "menu2" ? (
        <InfoTab2 />
      ) : (
        <InfoTab3 />
      )}

      <I.Nav>
        <img
          id="footer"
          src={`${process.env.PUBLIC_URL}/images/footer.png`}
          alt="test"
        />
        <div id="mark">DONGDUK WOMEN’S UNIVERSITY</div>
      </I.Nav>
    </I.Container>
  );
};

export default MakersInfo;
