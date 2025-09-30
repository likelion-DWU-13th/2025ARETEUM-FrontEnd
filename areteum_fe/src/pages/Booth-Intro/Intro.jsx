import React, { useEffect, useState } from "react";
import axios from "axios";
import * as I from "../../styles/StyledIntro";
import Components from "./BoothComponents";
import { useNavigate } from "react-router-dom";

const Intro = () => {
  const categories = ["전체", "공연", "부스", "체험", "마켓", "주점", "푸드트럭"];
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
  const displayDates = ["9/30", "10/1", "10/2"];

  // 축제 기간
  const festivalStart = new Date("2025-09-30");
  const festivalEnd = new Date("2025-10-02");

  // 현재 날짜를 비교해 자동 설정 초기값 결정
  const today = new Date();
  let initialDate = "2025-09-30"; // 축제 첫날 기본값

  if (today >= festivalStart && today <= festivalEnd) {
    // 오늘 날짜가 축제 기간 내이면 오늘 날짜를 기본값으로
    // 날짜 포맷이 YYYY-MM-DD 이어야 하므로 맞게 변환
    const yyyy = today.getFullYear();
    const mm = (today.getMonth() + 1).toString().padStart(2, "0");
    const dd = today.getDate().toString().padStart(2, "0");
    const todayStr = `${yyyy}-${mm}-${dd}`;
    // 축제 기간 내인지 한번 더 확인 (포맷 맞춰진 오늘)
    if (dates.includes(todayStr)) {
      initialDate = todayStr;
    }
  }

  const [selectedCategory, setSelectedCategory] = useState(0);

  // 날짜 상태를 날짜 문자열로 관리
  const [selectedDate, setSelectedDate] = useState(initialDate);
  // 버튼 클릭 여부 확인용 상태
  const [isDateSelected, setIsDateSelected] = useState(false);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [booths, setBooths] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isShowScrapOnly, setIsShowScrapOnly] = useState(false);
  const [scrapList, setScrapList] = useState([]);

  const navigate = useNavigate();
  const API_BASE = "https://dev.dwu-festival2025.com:8443";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = {
          category: apiCategories[categories[selectedCategory]],
          q: searchKeyword || undefined,
        };
        // 날짜는 버튼 클릭한 경우에만 파라미터로 전달, 아니면 today(자동 설정)로 보냄
        params.date = selectedDate;

        const response = await axios.get(`${API_BASE}/api/booth-cards`, {
          params,
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
    const saved = localStorage.getItem("scrapBooths");
    if (saved) {
      setScrapList(JSON.parse(saved));
    } else {
      setScrapList([]);
    }
  }, []);

  const toggleShowScrapOnly = () => {
    setIsShowScrapOnly(!isShowScrapOnly);
    const saved = localStorage.getItem("scrapBooths");
    if (saved) {
      setScrapList(JSON.parse(saved));
    } else {
      setScrapList([]);
    }
  };

  // 날짜 버튼 클릭 시 날짜 설정 및 플래그 true 처리
  const onClickDate = (idx) => {
    setSelectedDate(dates[idx]);
    setIsDateSelected(true);
  };

  const displayedBooths = isShowScrapOnly ? booths.filter((item) => scrapList.includes(item.boothId)) : booths;

  return (
    <I.Container>
      <img id="background" src={`${process.env.PUBLIC_URL}/images/background.png`} alt="background" />

      <I.Header>
        <img id="back" src={`${process.env.PUBLIC_URL}/images/back.png`} alt="back" onClick={() => navigate("/MainPage")} />
        <I.Title>즐겨보솜</I.Title>
        <img
          id="scrap"
          src={isShowScrapOnly ? `${process.env.PUBLIC_URL}/images/boothScrap.svg` : `${process.env.PUBLIC_URL}/images/scrap.png`}
          alt="scrap"
          onClick={toggleShowScrapOnly}
          style={{ cursor: "pointer" }}
        />
      </I.Header>

      <I.DateWrapper>
        {displayDates.map((text, idx) => (
          <I.DateItem key={idx} active={selectedDate === dates[idx]} onClick={() => onClickDate(idx)}>
            <img src={`${process.env.PUBLIC_URL}/images/dateMark.png`} alt="mark" />
            <div className="date-text">{text}</div>
          </I.DateItem>
        ))}
      </I.DateWrapper>

      <I.Search>
        <img src={`${process.env.PUBLIC_URL}/images/search.png`} alt="search" />
        <input placeholder="검색어를 입력하세요." value={searchKeyword} onChange={(e) => setSearchKeyword(e.target.value)} />
      </I.Search>

      <I.CategoryWrapper>
        {categories.map((item, index) => (
          <I.Category key={index} active={selectedCategory === index} onClick={() => setSelectedCategory(index)}>
            {item}
          </I.Category>
        ))}
      </I.CategoryWrapper>

      <I.Count>총 {displayedBooths.length}건의 항목</I.Count>

      <I.Content>
        <I.Content_B isEmpty={displayedBooths.length === 0}>
          {displayedBooths.length === 0 ? <I.Explan>검색 결과가 없습니다.</I.Explan> : displayedBooths.map((item) => <Components key={item.boothId} item={item} />)}
        </I.Content_B>
        <I.Nav>
          <img id="footer" src={`${process.env.PUBLIC_URL}/images/footer.png`} alt="footer" />
          <div id="mark">DONGDUK WOMEN’S UNIVERSITY</div>
        </I.Nav>
      </I.Content>
    </I.Container>
  );
};

export default Intro;
