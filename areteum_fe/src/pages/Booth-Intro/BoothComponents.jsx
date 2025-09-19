import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as C from "../../styles/StyledBoothComponents";

const Components = () => {
  return (
    <C.Components>
      <img id="scrap" src={`${process.env.PUBLIC_URL}/images/boothScrap.svg`} alt="scrap" />
      <C.Category>플리마켓</C.Category>
      <C.Title>!déal</C.Title>
      <C.Bar>
        <img src={`${process.env.PUBLIC_URL}/images/location.svg`} alt="location" />
        <C.Text>운동장</C.Text>
      </C.Bar>
      <C.Bar>
        <img src={`${process.env.PUBLIC_URL}/images/time.svg`} alt="time" />
        <C.Text>12:00~22:00</C.Text>
      </C.Bar>
    </C.Components>
  );
};

export default Components;
