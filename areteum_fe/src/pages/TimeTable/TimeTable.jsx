import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as T from "../../styles/StyledTimeTable";

const TimeTable = () => {
  const [selectedDate, setSelectedDate] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
  ['/images/train.png', '/images/train2.png'].forEach(p => {
    const i = new Image();
    i.src = process.env.PUBLIC_URL + p;
  });
}, []);
  return (
    <T.Container>
      <T.Header>
        <img
          id="back"
          src={`${process.env.PUBLIC_URL}/images/back.png`}
          alt="back"
          onClick={()=>navigate("/mainPage")}
        />
        <T.Title>타임 테이블</T.Title>
      </T.Header>
      <T.DateWrapper>
        {["10/1", "10/2"].map((text, idx) => (
          <T.Date
            key={idx}
            active={selectedDate === idx}
            onClick={() => setSelectedDate(idx)}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/dateMark.png`}
              alt="mark"
            />
            <div id="text">{text}</div>
          </T.Date>
        ))}
      </T.DateWrapper>
      <T.StarWrapper>
        <img src={`${process.env.PUBLIC_URL}/images/big_star.svg`} alt="star" />
        <T.SmallStar>
          <img
            src={`${process.env.PUBLIC_URL}/images/small_star.svg`}
            alt="star"
          />
        </T.SmallStar>
      </T.StarWrapper>
      <T.TableWrapper>
        <img
            src={`${process.env.PUBLIC_URL}/images/${selectedDate === 0 ? 'train.png' : 'train2.png'}`}
            alt="train"
            width={selectedDate===0 ? "343px" : "344px"}
        />
      </T.TableWrapper>
      <T.Alarm>
        포토부스<span style={{fontWeight:"500"}}>는</span>&nbsp;<span style={{color:" #E37AAD"}}>상시운영</span>합니다.
      </T.Alarm>
      <T.AlarmFood>
        <span style={{color:" #E37AAD", lineHeight:"2"}}>12:00 - 22:00 운영</span><br></br>
        <span style={{lineHeight:"2.8"}}>푸드트럭</span><br></br>
        축제운영위원회 프로그램<br></br>
        <span style={{fontWeight:"400"}}>&lt;솜꾸존&gt; &lt;솜띵샵&gt; &lt;폼폼솜솜&gt;<br></br></span>
        <span style={{fontWeight:"400"}}>&lt;개구리 공주의 저주를 풀어라!&gt;</span>
      </T.AlarmFood>
      <T.AlarmText>
        기재된 시간은 부스 필수 운영 시간이며,<br></br> 
        조기 오픈하거나 연장 운영될 수 있습니다.
      </T.AlarmText>
      <T.Firework>
        <img
            src={`${process.env.PUBLIC_URL}/images/timetableFirework.png`}
            alt="firework"
            width="393px"
        />
      </T.Firework>
      <T.Nav>
        <img
          id="footer"
          src={`${process.env.PUBLIC_URL}/images/footer.png`}
          alt="test"
        />
        <div id="mark">DONGDUK WOMEN’S UNIVERSITY</div>
      </T.Nav>
    </T.Container>
  );
};
export default TimeTable;
