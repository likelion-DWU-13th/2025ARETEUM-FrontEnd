import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as F from "../../styles/styledFirst";
import { motion } from "framer-motion";

const frames = [
  { src: "/images/letter1.svg", x: 215, y: 60 },
  { src: "/images/addletter.svg", x: 26, y: 180 },
  { src: "/images/letter2.svg", x: 174, y: 230 },
  { src: "/images/letter3.png", x: 35, y: 320, w: 320 },
  { src: "/images/letter4.svg", x: 26, y: 202, w: 346 },
  { src: "/images/letter5.svg", x: 12, y: 30, w: 349 },
];
const First = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [showText, setShowText] = useState(false);
  const current = frames[step];
  const prev = frames[Math.max(step - 1, 0)]; // 직전 프레임
  const baseW = 140; // w 없는 프레임 기본값
  const prevW = prev.w ?? baseW;
  const currW = current.w ?? baseW;

  const isAnimated = step <= 3;
  const animateProps = {
    left: [prev.x, current.x],
    top: [prev.y, current.y],
    width: [prevW, currW],
  };
  const visited = "0";
  useEffect(() => {
    if (localStorage.getItem(visited) === "1") {
      //navigate("/mainPage");
    }
  }, []);
  useEffect(() => {
    frames.forEach((f) => {
      const img = new Image();
      img.src = process.env.PUBLIC_URL + f.src;
    });
  }, []);
  useEffect(() => {
    setShowText(false);
    if (step >= frames.length - 1 || step === 3) return;
    const t = setTimeout(() => setStep((s) => s + 1), 950);
    return () => clearTimeout(t);
  }, [step]);
  const click = () => {
    if (step === 3) {
      setStep((s) => s + 1);
    }
  };
  const enter = () => {
    localStorage.setItem(visited, "1");
    navigate("/mainPage");
  };
  return (
    <F.Container>
      <img
        id="background"
        src={`${process.env.PUBLIC_URL}/images/background.PNG`}
        alt="background"
      />
      {isAnimated ? (
        <motion.img
          src={process.env.PUBLIC_URL + current.src}
          alt="letter"
          style={{ position: "absolute", height: "auto" }}
          initial={
            step === 0
              ? { left: current.x, top: current.y, width: currW} // 살짝 왼쪽+조금 작게
              : false
          }
          animate={animateProps}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
            times: step === 0 ? undefined : [0, 1],
          }}
          onClick={click}
          onAnimationComplete={() => {
            if (step === 3) setShowText(true);
          }}
        />
      ) : (
        <img
          src={process.env.PUBLIC_URL + current.src}
          alt="letter"
          style={{
            position: "absolute",
            left: current.x,
            top: current.y,
            width: current.w ?? baseW,
            height: "auto",
          }}
        />
      )}

      <F.Text
        style={{ display: showText ? "block" : "none", marginTop: "136px" }}
      >
        가운데 버튼을 눌러<br></br>
        초대장을 열어보세요
      </F.Text>
      <F.Enter
        style={{ display: step === 5 ? "flex" : "none" }}
        onClick={enter}
      >
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
