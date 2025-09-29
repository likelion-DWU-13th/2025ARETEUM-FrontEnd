import React, { useState, useEffect } from "react";
import * as C from "../../styles/StyledBoothComponents";
import { useNavigate } from "react-router-dom";

const STORAGE_KEY = "scrapBooths";

const BoothComponent = ({ item }) => {
  const [isScrapped, setIsScrapped] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!item) return;
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const scrappedList = JSON.parse(saved);
      setIsScrapped(scrappedList.includes(item.boothId));
    }
  }, [item]);

  if (!item) return null;

  const { boothId, name, location, startTime, endTime, category } = item;
  const displayTitle = name.length > 22 ? name.slice(0, 24) + "..." : name;

  const toggleScrap = (e) => {
    e.stopPropagation(); // 스크랩 클릭 시 이동 막기
    const saved = localStorage.getItem(STORAGE_KEY);
    let scrappedList = saved ? JSON.parse(saved) : [];

    if (scrappedList.includes(boothId)) {
      scrappedList = scrappedList.filter((scrapId) => scrapId !== boothId);
      setIsScrapped(false);
    } else {
      scrappedList.push(boothId);
      setIsScrapped(true);
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(scrappedList));
  };

  const onClickHandler = () => {
    navigate(`/booth-detail/${boothId}`);
  };

  return (
    <C.Components onClick={onClickHandler} style={{ cursor: "pointer" }}>
      <img
        id="scrap"
        src={isScrapped ? `${process.env.PUBLIC_URL}/images/boothScrap.svg` : `${process.env.PUBLIC_URL}/images/boothScrap_w.png`}
        alt="scrap"
        onClick={toggleScrap}
        style={{ cursor: "pointer" }}
      />
      <C.Category>{category}</C.Category>
      <C.Title>{displayTitle}</C.Title>
      <C.Bar>
        <img src={`${process.env.PUBLIC_URL}/images/location.svg`} alt="location" />
        <C.Text>{location}</C.Text>
      </C.Bar>
      <C.Bar>
        <img src={`${process.env.PUBLIC_URL}/images/time.svg`} alt="time" />
        <C.Text>{startTime && endTime ? `${startTime}~${endTime}` : "시간 미정"}</C.Text>
      </C.Bar>
    </C.Components>
  );
};

export default BoothComponent;
