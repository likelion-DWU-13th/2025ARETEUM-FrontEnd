// src/components/BasicInfo.jsx

import React from "react";
import * as D from "../../styles/StyledDescription";

const BasicInfo = ({ schedules, detailLocation, organizer, mapImageUrl, description, timeNote, menus }) => {
    
    const hasData = (data) => Array.isArray(data) ? data.length > 0 : !!data;

    // 1. 날짜 포맷
    const mergedDates = schedules && hasData(schedules)
        ? schedules.map(schedule => {
              const [year, month, day] = schedule.date.split('-');
              return `${parseInt(month)}월 ${parseInt(day)}일`;
          }).join(' / ')
        : '날짜 정보 없음'; 
    
    // 2. 시간 포맷 
    const mergedTimes = schedules && hasData(schedules)
        ? schedules.map(schedule => 
              `${schedule.start}~${schedule.end}`
          ).join(' / ')
        : '시간 정보 없음'; 
        
    // 가격 표시
    const priceDisplay = (() => {
        if (!hasData(menus) || !menus[0]) {
            return null;
        }
        
        const firstItem = menus[0];
        
        // 1. 0원 초과일 때
        if (firstItem.price > 0) {
            return {
                name: firstItem.name,
                price: firstItem.price.toLocaleString() + '원',
                isBasic: false
            };
        }
        
        // 2. 0원일 때 기본안주
        if (firstItem.price === 0) {
            return {
                name: firstItem.name,
                price: '기본안주',
                isBasic: true
            };
        }
        
        // 3. 기타 (가격 필드 없음 등)
        return null;
    })();

    // 렌더링을 위한 schedules 데이터 존재 여부 확인
    const showOperationInfo = schedules && hasData(schedules);


    return (
        <D.Wrapper>
            
            {/* 1. 운영 섹션 */}
            {showOperationInfo && (
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
                        
                        {/* 시간 주석 (timeNote) */}
                        {timeNote && (
                            <D.Note style={{ marginLeft: "18px", marginTop: "-10px" }}>
                                {timeNote}
                            </D.Note>
                        )}

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

            {/* 2. 위치 상세 섹션 (지도 이미지) */}
            {mapImageUrl && (
                <D.InfoWrapper>
                    <D.SubTitle>위치 상세</D.SubTitle>
                    <D.InfoBox style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0"}}>
                        <img src={mapImageUrl} style={{ width: "305px", height: "230px" }} alt="부스 위치 지도"/>
                    </D.InfoBox>
                </D.InfoWrapper>
            )}

            {/* 3. 소개 섹션 */}
            {description && (
                <D.InfoWrapper>
                    <D.SubTitle>소개</D.SubTitle>
                    <D.InfoBox>
                        <D.InfoItem style={{ whiteSpace: 'pre-wrap', display: 'block' }}>
                        {description}
                        </D.InfoItem>
                    </D.InfoBox>
                </D.InfoWrapper>
            )}
        </D.Wrapper>
    );
};

export default BasicInfo;