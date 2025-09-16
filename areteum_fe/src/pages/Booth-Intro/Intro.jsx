import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as I from "../../styles/StyledIntro";

const Intro = () => {
  return (
    <I.Container>
      <I.Header>
        <img id="back" src={`${process.env.PUBLIC_URL}/images/back.png`} alt="scrap" />
        <I.Title>즐겨보솜</I.Title>
        <img id="scrap" src={`${process.env.PUBLIC_URL}/images/scrap.png`} alt="scrap" />
      </I.Header>
      <I.Nav>
        <img id="back" src={`${process.env.PUBLIC_URL}/images/footer.png`} alt="scrap" />
      </I.Nav>
    </I.Container>
  );
};

export default Intro;
