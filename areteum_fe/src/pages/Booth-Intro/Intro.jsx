import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "../../styles/StyledIntro";
import Components from "./BoothComponents";

const Intro = () => {
  const category = ["전체", "공연", "부스", "체험", "마켓", "주점", "푸드트럭"];
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedDate, setSelectedDate] = useState(0);

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
        <input placeholder="검색어를 입력하세요."></input>
      </I.Search>
      <I.CategoryWrapper>
        {category &&
          category.map((item, index) => (
            <I.Category key={index} id={index} active={selectedCategory === index} onClick={() => setSelectedCategory(index)}>
              {item}
            </I.Category>
          ))}
      </I.CategoryWrapper>
      <I.Count>총 1건의 항목</I.Count>
      <I.Content>
        <I.Content_B>
          <Components></Components>
          <Components></Components>
          <Components></Components>
          <Components></Components>
          <Components></Components>
          <Components></Components>
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
