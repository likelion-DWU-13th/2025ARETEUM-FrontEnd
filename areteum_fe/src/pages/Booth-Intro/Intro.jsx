import React, { useEffect, useState } from "react";
import axios from "axios";
import * as I from "../../styles/StyledIntro";
import Components from "./BoothComponents";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const categories = [
    "전체",
    "공연",
    "부스",
    "체험",
    "마켓",
    "주점",
    "푸드트럭",
  ];
  const apiCategories = {
    전체: "",
    공연: "PERFORMANCE",
    부스: "BOOTH",
    체험: "EXPERIENCE",
    마켓: "MARKET",
    주점: "PUB",
    푸드트럭: "FOOD_TRUCK",
  };
  const dates = ["2025-09-30", "2025-10-01", "2025-10-02"];

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [booths, setBooths] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isShowScrapOnly, setIsShowScrapOnly] = useState(false); // 스크랩 필터링 상태
  const [scrapList, setScrapList] = useState([]); // 스크랩된 부스 ID 목록

  const navigate = useNavigate();
  const API_BASE = "https://dev.dwu-festival2025.com:8443";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE}/api/booth-cards`, {
          params: {
            date: dates[selectedDate],
            category: apiCategories[categories[selectedCategory]],
            q: searchKeyword || undefined,
          },
        });

        setBooths(response.data.booths ?? []);
        setTotalCount(response.data.totalCount ?? 0);
        console.log("API response:", JSON.stringify(response.data, null, 2));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedCategory, selectedDate, searchKeyword]);

  useEffect(() => {
    // 로컬 스토리지에서 스크랩 ID 리스트 불러오기
    const saved = localStorage.getItem("scrapBooths");
    if (saved) {
      setScrapList(JSON.parse(saved));
    } else {
      setScrapList([]);
    }
  }, []);

  const toggleShowScrapOnly = () => {
    // 필터 상태 토글
    setIsShowScrapOnly(!isShowScrapOnly);
    // 최신 스크랩 리스트도 재로드 (필요시)
    const saved = localStorage.getItem("scrapBooths");
    if (saved) {
      setScrapList(JSON.parse(saved));
    } else {
      setScrapList([]);
    }
  };

  // 필터링 적용된 부스 목록
  const displayedBooths = isShowScrapOnly
    ? booths.filter((item) => scrapList.includes(item.boothId))
    : booths;

  return (
    <I.Container>
      <img
        id="background"
        src={`${process.env.PUBLIC_URL}/images/background.png`}
        alt="background"
      />

      <I.Header>
        <img
          id="back"
          src={`${process.env.PUBLIC_URL}/images/back.png`}
          alt="back"
          onClick={() => navigate("/MainPage")}
        />
        <I.Title>즐겨보솜</I.Title>
        <img
          id="scrap"
          src={
            isShowScrapOnly
              ? `${process.env.PUBLIC_URL}/images/boothScrap.svg`
              : `${process.env.PUBLIC_URL}/images/scrap.png`
          }
          alt="scrap"
          onClick={toggleShowScrapOnly}
          style={{ cursor: "pointer" }}
        />
      </I.Header>

      <I.DateWrapper>
        {["9/30", "10/1", "10/2"].map((text, idx) => (
          <I.DateItem
            key={idx}
            active={selectedDate === idx}
            onClick={() => setSelectedDate(idx)}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/dateMark.png`}
              alt="mark"
            />
            <div className="date-text">{text}</div>
          </I.DateItem>
        ))}
      </I.DateWrapper>

      <I.Search>
        <img src={`${process.env.PUBLIC_URL}/images/search.png`} alt="search" />
        <input
          placeholder="검색어를 입력하세요."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </I.Search>

      <I.CategoryWrapper>
        {categories.map((item, index) => (
          <I.Category
            key={index}
            active={selectedCategory === index}
            onClick={() => setSelectedCategory(index)}
          >
            {item}
          </I.Category>
        ))}
      </I.CategoryWrapper>

      <I.Count>총 {displayedBooths.length}건의 항목</I.Count>

      <I.Content>
        <I.Content_B isEmpty={displayedBooths.length === 0}>
          {displayedBooths.length === 0 ? (
            <I.Explan>검색 결과가 없습니다.</I.Explan>
          ) : (
            displayedBooths.map((item) => (
              <Components key={item.boothId} item={item} />
            ))
          )}
        </I.Content_B>
        <I.Nav>
          <img
            id="footer"
            src={`${process.env.PUBLIC_URL}/images/footer.png`}
            alt="footer"
          />
          <div id="mark">DONGDUK WOMEN’S UNIVERSITY</div>
        </I.Nav>
      </I.Content>
    </I.Container>
  );
};

export default Intro;
