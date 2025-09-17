import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as D from "../../styles/StyledDescription";
import BasicInfo from "./BasicInfo";
import DetailInfo from "./DetailInfo";

const Description = () => {
  const [activeTab, setActiveTab] = useState("basic-info");

  return (
    <D.Container>
      <img id="background" src={`${process.env.PUBLIC_URL}/images/detail_bg.png`} alt="background" />
      <D.Header>
        <img id="back" src={`${process.env.PUBLIC_URL}/images/back.png`} alt="back" />
        <D.Title>공연 상세</D.Title>
        <img id="scrap" src={`${process.env.PUBLIC_URL}/images/scrap.png`} alt="scrap" />
      </D.Header>
      <D.DetailWrapper>
        <D.BoothName>
          윤슬
        </D.BoothName>
        <D.CategoryName>
          부스
        </D.CategoryName>
        <D.Tab>
          <D.Tab1
            isActive={activeTab === "basic-info"}
            onClick={() => setActiveTab("basic-info")}
          >
            <span>기본 정보</span>
          </D.Tab1>
          <D.Tab2
            isActive={activeTab === "detail-info"}
            onClick={() => setActiveTab("detail-info")}
          >
            세부 정보
          </D.Tab2>
        </D.Tab>

        {activeTab === "basic-info" ? <BasicInfo /> : <DetailInfo />}
      </D.DetailWrapper>

      <D.Nav>
              <img id="footer" src={`${process.env.PUBLIC_URL}/images/footer.png`} alt="test" />
              <div id="mark">DONGDUK WOMEN’S UNIVERSITY</div>
            </D.Nav>
    </D.Container>
  );
};

export default Description;