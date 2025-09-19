import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../MainPage/StyledMainPage";

const MainPage = () => {

    return (
        <M.Container>
            <M.Logo>
                <img src={`${process.env.PUBLIC_URL}/images/MainLogo.png`} alt="logo" />
            </M.Logo>
            <img src={`${process.env.PUBLIC_URL}/images/MainFlyT.png`} className="butterflyT" />
            <M.Castle>
                <img src={`${process.env.PUBLIC_URL}/images/MainCastle.svg`} alt="castle" />
            </M.Castle>
            <img src={`${process.env.PUBLIC_URL}/images/MainFireWorkR.png`} className="fireworkR" />
            <M.Middle>
                <img src={`${process.env.PUBLIC_URL}/images/MainFireWorkL.png`} className="fireWorkL" />
                <img src={`${process.env.PUBLIC_URL}/images/MainCloudsM.svg`} className="cloudM" />
            </M.Middle>
            <M.Bottom>
                <img src={`${process.env.PUBLIC_URL}/images/MainFlower.svg`} alt="flower" className="flower" />
                <img src={`${process.env.PUBLIC_URL}/images/MainIsland.svg`} alt="Island" className="island" />
                <M.CloudsBottom>
                    <img src={`${process.env.PUBLIC_URL}/images/MainCloud1.svg`} className="cloudB" />
                    <img src={`${process.env.PUBLIC_URL}/images/MainFlyB.svg`} className="flyB" />
                    <img src={`${process.env.PUBLIC_URL}/images/MainFlyM.png`} className="flyM" />
                </M.CloudsBottom>
                <M.Wheel>
                    <img src={`${process.env.PUBLIC_URL}/images/MainWheel.svg`} className="wheelBase" />

                    <div className="wheelButtons">
                        <M.NavSom>
                            <img src={`${process.env.PUBLIC_URL}/images/MainTimetableSom.svg`} className="timeTable" />
                            <img src={`${process.env.PUBLIC_URL}/images/MainBoothinfoSom.svg`} className="boothInfo" />
                            <img src={`${process.env.PUBLIC_URL}/images/MainBoothArrSom.svg`} className="boothArray" />
                            <img src={`${process.env.PUBLIC_URL}/images/MainSomtalkSom.svg`} className="somTalk" />
                            <img src={`${process.env.PUBLIC_URL}/images/MainMakersSom.svg`} className="makers" />
                        </M.NavSom>
                    </div>
                </M.Wheel>

            </M.Bottom>
        </M.Container>
    );
};

export default MainPage;