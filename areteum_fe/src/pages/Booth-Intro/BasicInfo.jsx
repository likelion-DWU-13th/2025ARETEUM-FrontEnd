import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as D from "../../styles/StyledDescription";

const BasicInfo = ({ schedules, detailLocation, organizer, mapImageUrl, description }) => {
    
    const formatTime = (time) => {
      if (!time || typeof time.hour === 'undefined' || typeof time.minute === 'undefined') {
          return '';
      }
      const hours = String(time.hour).padStart(2, '0');
      const minutes = String(time.minute).padStart(2, '0');
      return `${hours}:${minutes}`;
  };

  // 1. 날짜 포맷
  const mergedDates = schedules && schedules.length > 0
      ? schedules.map(schedule => {
          const [year, month, day] = schedule.date.split('-');
          return `${parseInt(month)}월 ${parseInt(day)}일`;
        }).join(' / ')
      : '날짜 정보 없음'; 
  
  // 2. 시간 포맷
  const mergedTimes = schedules && schedules.length > 0
      ? schedules.map(schedule => 
          `${formatTime(schedule.start)}~${formatTime(schedule.end)}`
        ).join(' / ')
      : '시간 정보 없음'; 

  return (
      <D.Wrapper>
          {schedules && schedules.length > 0 && (
            <D.InfoWrapper>
                <D.SubTitle>운영</D.SubTitle>
                <D.InfoBox>
                    {/* 날짜 */}
                    <D.InfoItem>
                        <img src={`${process.env.PUBLIC_URL}/images/calendar.svg`} alt="calendar" />
                        {mergedDates}
                    </D.InfoItem>
                    
                    {/* 시간 */}
                    <D.InfoItem>
                        <img src={`${process.env.PUBLIC_URL}/images/time.svg`} alt="time" />
                        {mergedTimes}
                    </D.InfoItem>
                    
                    {/* 위치 */}
                    <D.InfoItem>
                        <img src={`${process.env.PUBLIC_URL}/images/location.svg`} alt="location" />
                        {detailLocation}
                    </D.InfoItem>
                    
                    {/* 주최자 */}
                    {organizer && (
                        <D.InfoItem>
                            <img src={`${process.env.PUBLIC_URL}/images/agency.svg`} alt="agency" />
                            {organizer}
                        </D.InfoItem>
                    )}
                </D.InfoBox>
            </D.InfoWrapper>
          )}

          {/* 위치 상세 */}
          <D.InfoWrapper>
              <D.SubTitle>
                위치 상세
                
            </D.SubTitle>
              <D.InfoBox style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0"}}>
                <img src={mapImageUrl} style={{ width: "305px", height: "230px" }}/>
              </D.InfoBox>
          </D.InfoWrapper>

          {/* 소개 */}
          {description && (
            <D.InfoWrapper>
                <D.SubTitle>소개</D.SubTitle>
                <D.InfoBox>
                    <D.InfoItem>
                    {description}
                    </D.InfoItem>
                </D.InfoBox>
            </D.InfoWrapper>
          )}
      </D.Wrapper>
  );
};

export default BasicInfo;