import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import * as D from "../../styles/StyledDescription";
import BasicInfo from "./BasicInfo";
import DetailInfo from "./DetailInfo";
import { getBoothData } from "../../utils/api";
import { getHardcodedDetails } from "../../data/hardcodedDetails"

const Description = () => {
  const [activeTab, setActiveTab] = useState("basic-info");
  const { boothId } = useParams();
  const [boothData, setBoothData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getBoothData(boothId)
      .then(data => {
        setBoothData(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, [boothId]);

  // 1. 데이터 통합
  let finalBoothData = boothData;

  if (finalBoothData) {
    const hardcodedDetail = getHardcodedDetails(finalBoothData.id);

    if (hardcodedDetail) {
      finalBoothData = { ...finalBoothData, ...hardcodedDetail };
    }

    if (!finalBoothData.organizer) {
      finalBoothData.organizer = "개인"
    }

    if (finalBoothData.subCategory === "없음"){
      finalBoothData.subCategory = finalBoothData.category
    }
  }

  if (isLoading) {
    return <div>로딩 중</div>;
  }

  if (!boothData) {
    return <div>부스 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <D.Container>
      <img id="background" src={`${process.env.PUBLIC_URL}/images/detail_bg.png`} alt="background" />
      <D.Header>
        <img id="back" src={`${process.env.PUBLIC_URL}/images/back.png`} alt="back" />
        <D.Title>{finalBoothData.category} 상세</D.Title>
        <img id="scrap" src={`${process.env.PUBLIC_URL}/images/scrap.png`} alt="scrap" />
      </D.Header>
      <D.DetailWrapper>
        <D.BoothName>{finalBoothData.name}</D.BoothName>
        <D.CategoryName>{finalBoothData.subCategory}</D.CategoryName>
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

        {activeTab === "basic-info" ? (
          <BasicInfo
            schedules={finalBoothData.schedules}
            detailLocation={finalBoothData.detailLocation}
            organizer={finalBoothData.organizer}
            mapImageUrl={finalBoothData.mapImageUrl}
            description={finalBoothData.description}
            timeNote={finalBoothData.timeNote}
          />
        ) : <DetailInfo 
            category={finalBoothData.category}
            timeline={finalBoothData.timeline} 
            menus={finalBoothData.menus} 
            setMenus={finalBoothData.setMenus}
            products={finalBoothData.products} 
            notes={finalBoothData.notes}
            participation={finalBoothData.participation}
            event={finalBoothData.event}
            description={finalBoothData.description}
            mapImageUrl={finalBoothData.mapImageUrl}
            program={finalBoothData.program}
            wating={finalBoothData.wating}
    />}
          
      </D.DetailWrapper>

      <D.Nav>
              <div id="mark">DONGDUK WOMEN’S UNIVERSITY</div>
            </D.Nav>
    </D.Container>
  );
};

export default Description;