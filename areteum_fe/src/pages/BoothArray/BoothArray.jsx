import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as B from "../BoothArray/StyledBoothArray";
import BoothMap from "./BoothMap";

const BoothArray = () => {
    const [selectedDate, setSelectedDate] = useState("10/1");
    const [selectedCategory, setSelectedCategory] = useState("전체");

    const navigate = useNavigate();

    const imageData = {
        "10/1": {
            전체: [
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/all/first.png`,
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/second.png`,
            ],
            측운위: [
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/festivalClub/first.png`,
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/second.png`,

            ],
            일반부스: [
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/originBooth/first.png`,
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/second.png`,

            ],
            플리마켓: [
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/marcket/first.png`,
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/second.png`,

            ],
            주점: [
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/tavern/first.png`,
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/second.png`,
            ],
            제휴: [
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/coalition/first.png`,
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/coalition/second.png`,
            ],
            푸드트럭: [
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/all/first.png`,
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/foodtruck/second.png`,
            ],

        },
        "10/2": {
            전체: [
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/all/first.png`,
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/second.png`,
            ],
            측운위: [
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/festivalClub/first.png`,
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/second.png`,

            ],
            일반부스: [
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/originBooth/first.png`,
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/second.png`,

            ],
            플리마켓: [
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/marcket/first.png`,
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/second.png`,

            ],
            주점: [
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/tavern/first.png`,
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/second.png`,
            ],
            제휴: [
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/coalition/first.png`,
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/coalition/second.png`,
            ],
            푸드트럭: [
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/all/first.png`,
                `${process.env.PUBLIC_URL}/images/BoothArray/10.01/foodtruck/second.png`,
            ],
        }
    };

    const boothList = {
        "10/1": {
            측운위: ["INFORMATION", "부스지원", "솜띵샵", "솜꾸존", "개구리 공주의 저주를 풀어라!", "솜샷원킬(다트)", "솜솜이에 취하다 (주점)", "폼폼솜솜(인형 꾸미기)", "바이퀸(바이킹 운영)"],
            일반부스: ["푸른자리", "감정의 자리", "홍보대사 동그라미", "깡 없는 럭키드로우", "SCENT ME #향을 담다", "교지편집위원회<목화>", "비전 활쏘기 체험부스", "윤슬", "DEBS", "코튼캔디:Codename Q", "방글방글 글쟁이들", "비즈포유", "루루", "동덕극회", "엑스터지 정상영업합니다"],
            플리마켓: ["!déal", "위시킨즈(Wishkins)", "유토피아로 오랑오랑", "핑크핑크 민트민트 반짝반짝", "낙원(樂園)", "도원경", "영원회귀", "유고걸", "-", "오밀조밀", "럭키보울", "손끝의 아지트"],
            주점: ["솜슛타임 어드벤처", "I ♡ 인문대", "모여봐요 얼의 주점", "하.. 마시고싶다"],
            제휴: ["루송 탐폰", "바이퀸(바이킹)", "어서와, 솜더랜드는 처음이지?(포토부스)"],
            푸드트럭: ["동글이(소프트 아이스크림)", "맛미(회오리 감자/닭꼬치)", "안녕푸드(분식)", "캡틴(닭강정)", "핑크포크(초밥)", "다온푸드(크림/칠리새우)"]
        },
        "10/2": {
            측운위: ["INFORMATION", "부스지원", "솜띵샵", "솜꾸존", "개구리 공주의 저주를 풀어라!", "솜샷원킬(다트)", "솜솜이에 취하다 (주점)", "폼폼솜솜(인형 꾸미기)", "바이퀸(바이킹 운영)"],
            일반부스: ["푸른자리", "감정의 자리", "동동 동덕이를 그려라", "깡 없는 럭키드로우", "SCENT ME #향을 담다", "교지편집위원회<목화>", "비전 활쏘기 체험부스", "윤슬", "DEBS", "솜솜이 생일카페", "중앙동아리 기독연합", "데코톡 하우스", "루루", "동덕극회", "엑스터지 정상영업합니다"],
            플리마켓: ["귀여움 한도초과 유토피아", "위시킨즈(Wishkins)", "유토삐약", "핑크핑크 민트민트 반짝반짝", "오~리/낙원(樂園)", "도원경", "영원회귀", "유고걸", "포유", "오밀조밀", "럭키보울", "손끝의 아지트"],
            주점: ["AIESEC GHOST HOUSE: 내 얘기를 들어줘", "유니버셜 솜튜디오", "앗! 거기 솜솜씨!! 이거 놓고 가셨어요!"],
            제휴: ["루송 탐폰", "바이퀸(바이킹)", "어서와, 솜더랜드는 처음이지?(포토부스)"],
            푸드트럭: ["동글이(소프트 아이스크림)", "맛미(회오리 감자/닭꼬치)", "안녕푸드(분식)", "캡틴(닭강정)", "핑크포크(초밥)", "다온푸드(크림/칠리새우)"]
        }
    }
    useEffect(() => {
        Object.values(imageData).forEach((dateObj) => {
            Object.values(dateObj).forEach((imgArr) => {
                imgArr.forEach((p) => {
                    const i = new Image();
                    i.src = p;
                });
            });
        });
    }, []);


    return (
        <B.Container>
            <B.Header>
                <img
                    id="back"
                    src={`${process.env.PUBLIC_URL}/images/back.png`}
                    alt="back"
                    onClick={() => navigate("/mainPage")}
                />
                <B.Title>부스배치도</B.Title>
            </B.Header>

            {/* 날짜 버튼 */}
            <B.DateWrapper>
                {["10/1", "10/2"].map((date) => (
                    <B.Date
                        key={date}
                        $active={selectedDate === date}
                        onClick={() => setSelectedDate(date)}
                    >
                        <img src={`${process.env.PUBLIC_URL}/images/dateMark.png`} alt="mark" />
                        <div id="text">{date}</div>
                    </B.Date>
                ))}
            </B.DateWrapper>

            {/* 캐러셀 */}
            <BoothMap images={imageData[selectedDate][selectedCategory]} />

            {/* 카테고리 버튼 */}
            <B.CategoryWrapper>
                <div style={{ display: "flex", gap: "12px" }}>
                    {["전체", "측운위", "일반부스", "플리마켓"].map((cat) => (
                        <button
                            key={cat}
                            style={{
                                display: "flex",
                                padding: "9px 15px",
                                borderRadius: "25px",
                                background: selectedCategory === cat ? "#E37AAD" : "transparent",
                                color: "#fff",
                                fontWeight: "500",
                                fontSize: "15px",
                                border: selectedCategory === cat ? "1.2px solid  #E37AAD" : "1.2px solid #fff",
                                cursor: "pointer",
                            }}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat.toUpperCase()}
                        </button>

                    ))}
                </div>
            </B.CategoryWrapper>

            <B.CategoryWrapper>
                <div style={{ display: "flex", gap: "12px" }}>
                    {["주점", "제휴", "푸드트럭"].map((cat) => (
                        <button
                            key={cat}
                            style={{
                                display: "flex",
                                padding: "9px 15px",
                                borderRadius: "25px",
                                background: selectedCategory === cat ? "#E37AAD" : "transparent",
                                color: "#fff",
                                fontWeight: "500",
                                fontSize: "15px",
                                border: selectedCategory === cat ? "1.2px solid  #E37AAD" : "1.2px solid #fff",
                                cursor: "pointer",
                            }}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat.toUpperCase()}
                        </button>

                    ))}
                </div>
            </B.CategoryWrapper>

            {/* 전체가 아닐 때만 부스 이름 리스트 표시 */}
            {selectedCategory !== "전체" && (
                <B.InformBox>
                    <ol>
                        {boothList[selectedDate][selectedCategory]?.map((name, idx) => (
                            <li key={idx}>
                                {name}
                            </li>
                        ))}
                    </ol>
                </B.InformBox>
            )}

            <B.Nav>
                <div id="mark">DONGDUK WOMEN’S UNIVERSITY</div>
            </B.Nav>
        </B.Container>
    );
};

export default BoothArray;
