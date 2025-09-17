import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "../../styles/StyledMakersInfo";

const MakersInfo = () => {
  const [activeTab, setActiveTab] = useState("menu1");

  return (
    <I.Container>
      <img
        id="background"
        src={`${process.env.PUBLIC_URL}/images/maker-background1.svg`}
        alt="background"
      />
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
