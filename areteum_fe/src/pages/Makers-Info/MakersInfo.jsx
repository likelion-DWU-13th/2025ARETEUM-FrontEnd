import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InfoTab1 from "./InfoTab1";
import InfoTab2 from "./InfoTab2";
import InfoTab3 from "./InfoTab3";
import * as I from "../../styles/StyledMakersInfo";

const MakersInfo = () => {
  const [activeTab, setActiveTab] = useState("menu1");

  //탭 바 클릭 시 배경 이미지 동적 설정
  const backgroundStyle = () => {
    switch (activeTab) {
      case "menu1":
      case "menu2":
        return {
          backgroundImage: `
                        url(${process.env.PUBLIC_URL}/images/maker-background2.png),
                        linear-gradient(180deg, #B0E1FF 12.11%, #C9D8FF 56.05%, #FFE2F9 100%)
                    `,
        };
      case "menu3":
        return {
          backgroundImage: `
                        url(${process.env.PUBLIC_URL}/images/maker-background3.png),
                        linear-gradient(180deg, #B0E1FF 12.11%, #C9D8FF 56.05%, #FFE2F9 100%)
                    `,
        };
      default:
        return {
          backgroundImage: `
                        url(${process.env.PUBLIC_URL}/images/maker-background2.png),
                        linear-gradient(180deg, #B0E1FF 12.11%, #C9D8FF 56.05%, #FFE2F9 100%)
                    `,
        };
    }
  };

  //탭에서 각 메뉴 클릭시 맨 위 화면 보이게
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <I.Container id="background" style={backgroundStyle()}>
      <div id="header-color">
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
            onClick={() => handleTabClick("menu1")}
          >
            ARETEUM
          </I.Menu1>
          <I.Menu2
            isActive={activeTab === "menu2"}
            onClick={() => handleTabClick("menu2")}
          >
            축운위
          </I.Menu2>
          <I.Menu3
            isActive={activeTab === "menu3"}
            onClick={() => handleTabClick("menu3")}
          >
            멋사 13기
          </I.Menu3>
        </I.TabMenu>
      </div>
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
