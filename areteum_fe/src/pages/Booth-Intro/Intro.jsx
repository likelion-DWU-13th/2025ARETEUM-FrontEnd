import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "../../styles/StyledIntro";
import Components from "./BoothComponents";

const Intro = () => {
  return (
    <I.Container>
      <img id="background" src={`${process.env.PUBLIC_URL}/images/background.png`} alt="background" />
      <I.Header>
        <img id="back" src={`${process.env.PUBLIC_URL}/images/back.png`} alt="back" />
        <I.Title>즐겨보솜</I.Title>
        <img id="scrap" src={`${process.env.PUBLIC_URL}/images/scrap.png`} alt="scrap" />
      </I.Header>
      <I.DateWrapper>
        <I.Date>
          <img src={`${process.env.PUBLIC_URL}/images/dateMark.png`} alt="mark" />
          <div id="text">9/30</div>
        </I.Date>
        <I.Date>
          <img src={`${process.env.PUBLIC_URL}/images/dateMark.png`} alt="mark" />
          <div id="text">10/1</div>
        </I.Date>
        <I.Date>
          <img src={`${process.env.PUBLIC_URL}/images/dateMark.png`} alt="mark" />
          <div id="text">10/2</div>
        </I.Date>
      </I.DateWrapper>
      <I.Search>
        <img src={`${process.env.PUBLIC_URL}/images/search.png`} alt="search" />
        <input placeholder="검색어를 입력하세요."></input>
      </I.Search>
      <I.CategoryWrapper>
        <I.Category>전체</I.Category>
        <I.Category>공연</I.Category>
        <I.Category>부스</I.Category>
        <I.Category>체험</I.Category>
        <I.Category>마켓</I.Category>
        <I.Category>주점</I.Category>
      </I.CategoryWrapper>
      <I.Count>총 1건의 항목</I.Count>
      <I.Content>
        <Components></Components>
        <Components></Components>
        <Components></Components>
        <Components></Components>
        <Components></Components>
        <Components></Components>
      </I.Content>
      <I.Nav>
        <img id="footer" src={`${process.env.PUBLIC_URL}/images/footer.png`} alt="test" />
        <div id="mark">DONGDUK WOMEN’S UNIVERSITY</div>
      </I.Nav>
    </I.Container>
  );
};

export default Intro;
