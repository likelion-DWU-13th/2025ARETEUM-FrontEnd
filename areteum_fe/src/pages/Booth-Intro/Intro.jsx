import React, { useEffect, useState } from "react";
import axios from "axios";
import * as I from "../../styles/StyledIntro";
import Components from "./BoothComponents";

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

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/booth-cards", {
          params: {
            date: dates[selectedDate],
            category: apiCategories[categories[selectedCategory]],
            q: searchKeyword,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [selectedCategory, selectedDate, searchKeyword]);

  return (
    <I.Container>
      <img id="background" src={`${process.env.PUBLIC_URL}/images/background.png`} alt="background" />

      <I.Header>
        <img id="back" src={`${process.env.PUBLIC_URL}/images/back.png`} alt="back" />
        <I.Title>즐겨보솜</I.Title>
        <img id="scrap" src={`${process.env.PUBLIC_URL}/images/scrap.png`} alt="scrap" />
      </I.Header>

      <I.DateWrapper>
        {["9/30", "10/1", "10/2"].map((text, idx) => (
          <I.Date key={idx} active={selectedDate === idx} onClick={() => setSelectedDate(idx)}>
            <img src={`${process.env.PUBLIC_URL}/images/dateMark.png`} alt="mark" />
            <div id="text">{text}</div>
          </I.Date>
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

      <I.Count>총 {data.length}건의 항목</I.Count>

      <I.Content>
        <I.Content_B>
          {data.map((item, index) => (
            <Components key={index} item={item} />
          ))}
        </I.Content_B>
        <I.Nav>
          <img id="footer" src={`${process.env.PUBLIC_URL}/images/footer.png`} alt="test" />
          <div id="mark">DONGDUK WOMEN’S UNIVERSITY</div>
        </I.Nav>
      </I.Content>
    </I.Container>
  );
};

export default Intro;
