import { styled, keyframes } from "styled-components";

const flyAnimation = keyframes`
 0%   { transform: translate(0px, 0px) rotate(0deg); opacity: 0; }
  10%  { opacity: 1; }
  40%  { transform: translate(-20px, -20px) rotate(-5deg); }
  70%  { transform: translate(20px, -20px) rotate(5deg); }
  100% { transform: translate(0px, 0px) rotate(0deg); }
`;

export const Container = styled.div`

  position: relative;
  margin: 0 auto;
  margin-top: 0px;
  min-height: 100vh;
  padding: 0; /* 불필요한 패딩 제거 */
  box-sizing: border-box; /* 패딩이 width에 포함되도록 설정 */
  display: flex;
  flex-direction: column;
  width: 393px;
  flex-shrink: 0;
  align-items: center;
  overflow: hidden; 

  /* 여기까지 공통 복붙 */

  background: linear-gradient(180deg, #379AE0 0%, #D3D6FA 50%, #FFDFF8 100%);

  #background {
    width: 393px;
    object-fit: cover;
    position: fixed;
  }
  .fireworkR{
   position: absolute;
   bottom: 21%; 
   right: 0;    
   height: 35%;
   z-index: 1;  
   pointer-events: none;
  }

  .butterflyT{
  position: absolute;
   bottom: 60%; 
   right:5%;
   z-index: 1;  
    animation: ${flyAnimation} 6s ease-in-out forwards;
  pointer-events: none;
  }
`;


export const Logo = styled.div`
  display: flex;
  justify-content: center;  
  align-items: center;

  img {
    width:80%;
    transform: translateX(25%);
  pointer-events: none;   
  }
`;

export const Middle = styled.div`
  position: absolute;   
  width: 100%;        
  display:flex;
  bottom: 0%;

  .cloudM {
    width: 100%;         
    height: auto;        
    display: block;
    transform: translateX(-30%);
    position: relative;
    z-index:0;
     pointer-events: none;

  }
  .fireWorkL{
    position: relative;
    height: 70%;
    display: block; 
    padding-top:40%;
 }
 
`;



const flowerSway = keyframes`
  0%, 80% {
    transform: rotate(0deg); 
  }
  85% {
    transform: rotate(0.5deg);
  }
  90% {
    transform: rotate(-0.5deg);
  }
  95% {
    transform: rotate(0.2deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const Bottom = styled.div`
  width: 393px;
  height: 100px;
  position: fixed;
  display: flex;
  bottom: 0;

  .flower {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 99;
    display: block; 
 pointer-events: none;

    /* 애니메이션 적용 */
    animation: ${flowerSway} 5s ease-in-out infinite; 
  }

  .island {
    position: absolute;   
    bottom: 0;
    left: 0;             
    width: auto;         
    height: auto;    
    z-index: 1;
     pointer-events: none;

  }
    
  
`;


export const Wheel = styled.div`
  position: absolute;   
  bottom: 0;
  left: 0;
  z-index: 2;

  .wheelBase {
    position: relative;
    z-index: 1;
    width:85%;
  }

  .wheelButtons {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2; 
  }
`

export const NavSom = styled.div`
  position: absolute;   
  bottom: 0; 
  left: 0;
  width: 65%;        
  height: 100%;

  img {
    position: absolute; 
    cursor: pointer;
    transition: filter 0.2s ease;
    width:85%;
    &:hover {
      filter: brightness(0.85);
    }
  }

  .timeTable {
    bottom: 80%;
    left: 8%;
  }
  .boothInfo {
    bottom: 62%;
    left: 65%;
  }
  .boothArray {
    bottom: 42%;
    left: 87%;
  }
  .somTalk {
    bottom: 21%;
    left: 68%;
  }
  .makers {
    bottom: 10%;
    left: 1%;
  }
`



export const CloudsBottom = styled.div`
  position:absolute;
  width:auto;
  height:auto;
  display: flex;
  bottom:0;

  .cloudB{
    position:relative;
    z-index:1;
     pointer-events: none;
  }

  .flyB{
    position: absolute;   
    bottom:3%;
    animation: ${flyAnimation} 4s ease-in-out forwards;
  pointer-events: none;
  }

  .flyM{
   position: absolute;   
    z-index0;
    bottom:42%;
    left:10%;
     pointer-events: none;

  }
`;

const castlesway = keyframes`
  0%   { transform: translateY(0%); }
  50%  { transform: translateY(5px); }
  100% { transform: translateY(0%); }
`;

export const Castle = styled.div`
  position:absolute;
  bottom:26%;
  padding-left:50%;
  width:auto;
  height:auto;
  z-index:5;
  pointer-events: none;

  animation: ${castlesway} 3s ease-in-out infinite; 
`;