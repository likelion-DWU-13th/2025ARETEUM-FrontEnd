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
   right: -30%;    
   height: 38%;  
   pointer-events: none;
  }

  .flyT{
  position: absolute;
   bottom: 60%; 
   width:10%;
   right:32%;
   z-index: 1;  
    animation: ${flyAnimation} 6s ease-in-out forwards;
    pointer-events: none;
  }

  .cloudT{
    width:130%;
    height:auto;
    position: absolute;
    transform: translate(-28%,-30%); 

  }
`;


export const Logo = styled.div`
  position:absolute;
  right:3.9%;
  width:100%;
  height:30%;
  display: flex;

  
  .fireWorkLogo {
    position: absolute; 
    width:auto;
    height:105%;
    top:27%;
    right:-9%;
  }

  .logo {
    width:50%;
    height:100%;
    position: relative;
    margin-left: auto;
    z-index: 2;         
  }
`;


export const Middle = styled.div`
  position: absolute;   
  width: 100%;        
  display:flex;
  bottom: 0%;

  .cloudH {
    width: 140%;         
    height: auto;        
    display: block;
    transform: translate(5%,-7%);
    position: relative;
    pointer-events: none;

  }
  .fireWorkL{
    position:absolute;
    width:48%;
    transform: translate(-35%,28%);
    }
 
`;



const flowerSway = keyframes`
  0%, 80% {
    transform: translateY(5px) rotate(0deg); 
  }
  85% {
    transform: translateY(5px) rotate(0.5deg);
  }
  90% {
    transform: translateY(5px) rotate(-0.5deg);
  }
  95% {
    transform: translateY(5px) rotate(0.2deg);
  }
  100% {
    transform: translateY(5px) rotate(0deg);
  }
`;


export const Bottom = styled.div`
  width: 393px;
  height: 100px;
  position: fixed;
  display: flex;
  bottom: 0;
  transform: translateY(20px); 

  .flower {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 99;
    display: block; 
    pointer-events: none;
    animation: ${flowerSway} 5s ease-in-out infinite; 
  }

  .island {
    position: absolute;   
    bottom: 0;
    left: 0;             
    width: 62%;         
    height: auto;    
    z-index: 1;
    pointer-events: none;
    transform: translate(-1.0%,62%); 
  }
    
  
`;


export const Wheel = styled.div`
  position: absolute;   
  bottom: 15%;
  left: 0;
  z-index: 2;

  .wheelBase {
    position: relative;
    z-index: 1;
    width:43%;
  }

  .wheelButtons {
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    z-index: 1000; 
  }
`

export const NavSom = styled.div`
  position: absolute;   
  bottom: 0; 
  left: 0;
  width: 60%;        
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
    left: 60%;
  }
  .boothArray {
    bottom: 42%;
    left: 80%;
    z-index:1000;
  }
  .somTalk {
    bottom: 22%;
    left: 55%;
  }
  .makers {
    bottom: 8%;
    left: -3%;
  }
`



export const CloudsBottom = styled.div`
    position:absolute;
    width:auto;
    height:auto;
    display: flex;
    bottom:0;
    overflow:hidden;

    .cloudB{
      position:relative;
      width:160%;
      height:auto;
      transform: translate(-40%, 33%);
      pointer-events: none;
    }

    .flyB{
      position: absolute;   
      animation: ${flyAnimation} 4s ease-in-out forwards;
      pointer-events: none;
      width:17%;
      bottom:8%;
      left:69%;
    }

    .flyM{
      position: absolute;   
      width:10%;
      bottom:33.5%;
      left:15%;
      pointer-events: none;

    }
  `;

const castlesway = keyframes`
  0%   { transform: translateY(0%); }
  50%  { transform: translateY(10px); }
  100% { transform: translateY(0%); }
`;

export const Castle = styled.div`
  position:absolute;
  z-index:5;
  pointer-events: none;
  bottom:25%;
  width:100%;

  img {
      width:30%;
      height:auto;
      position:relative;
      left:55%;
    }
  
  animation: ${castlesway} 3s ease-in-out infinite; 
`;