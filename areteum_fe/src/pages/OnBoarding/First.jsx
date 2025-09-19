import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as F from "../../styles/styledFirst";

const frames = [
  {src:"/images/letter1.svg",x: 215, y:60},
  {src:"/images/letter2.svg",x: 174 ,y:201},
  {src:"/images/letter3.svg",x:35,y:302},
  {src:"/images/letter4.svg",x:26,y:202},
  {src:"/images/letter5.svg",x:0,y:102},
];
const First = () => {
  const navigate = useNavigate();
  const [step,setStep] = useState(0);
  const current = frames[step];
  const visited="0";
  useEffect(()=>{
    if(localStorage.getItem(visited)==="1"){
      navigate("/mainPage");
    }
  },[]);
  useEffect(()=>{
    frames.forEach(f=>{
      const img = new Image();
      img.src = process.env.PUBLIC_URL+f.src;
    });
  },[]);
  useEffect(()=> {
    if(step>=frames.length-1||step===2) return;
    const t = setTimeout(()=>setStep(s=>s+1),900);
    return()=>clearTimeout(t);
  },[step]);
  const click = () =>{
    if(step===2){
      setStep(s=>s+1);
    }
  };
  const enter = () =>{
    localStorage.setItem(visited,"1");
    navigate("/mainPage")
  }
  return (
    <F.Container>
      <img
        id="background"
        src={`${process.env.PUBLIC_URL}/images/background.png`}
        alt="background"
      />
      <img
        src={process.env.PUBLIC_URL+current.src}
        alt="letter"
        style={{
          position: "absolute",
          left: `${current.x}px`, top: `${current.y}px`,
        }}
        onClick={click}
      />
      <F.Text style={{  display: step===2 ?"block": "none", marginTop:"216px"}}>
        가운데 버튼을 눌러<br></br>
        초대장을 열어보세요
      </F.Text>
      <F.Enter style={{ display: step===4 ? "flex" : "none"}} onClick={enter}>
        입장하기
      </F.Enter>
      <F.Box></F.Box>
      <F.Nav>
        <img
          id="footer"
          src={`${process.env.PUBLIC_URL}/images/footer.png`}
          alt="test"
        />
        <div id="mark">DONGDUK WOMEN’S UNIVERSITY</div>
      </F.Nav>
    </F.Container>
  );
};
export default First;
