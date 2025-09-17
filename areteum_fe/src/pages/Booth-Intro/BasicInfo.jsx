import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as D from "../../styles/StyledDescription";

const BasicInfo = () => {

  return (
    <D.Wrapper>
        <D.InfoWrapper>
          <D.SubTitle>
            운영
          </D.SubTitle>
          <D.InfoBox>
            <D.InfoItem>
              <img src={`${process.env.PUBLIC_URL}/images/calendar.svg`} alt="calendar" />
              10월 1일
            </D.InfoItem>
            <D.InfoItem>
              <img src={`${process.env.PUBLIC_URL}/images/calendar.svg`} alt="calendar" />
              14:00~18:00
            </D.InfoItem>
            <D.InfoItem>
              <img src={`${process.env.PUBLIC_URL}/images/calendar.svg`} alt="calendar" />
              운동장 - 1번 부스
            </D.InfoItem>
            <D.InfoItem>
              <img src={`${process.env.PUBLIC_URL}/images/calendar.svg`} alt="calendar" />
              동덕여자대학교 교육방송국
            </D.InfoItem>
          </D.InfoBox>
        </D.InfoWrapper>
        <D.InfoWrapper>
          <D.SubTitle>
            위치 상세
          </D.SubTitle>
          <D.InfoBox>
            
          </D.InfoBox>
        </D.InfoWrapper>
    </D.Wrapper>
  );
};

export default BasicInfo;