import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as M from "../MainPage/StyledMainPage";

const MainPage = () => {

    return (
        <M.Container>
            <M.Logo>
                <img src={`${process.env.PUBLIC_URL}/images/MainPage/MainBackGround/MainFireWorkLogo.png`} className="fireWorkLogo" alt="logo" />
                <img src={`${process.env.PUBLIC_URL}/images/MainPage/MainBackGround/MainLogo.png`} className="logo" alt="logo" />
            </M.Logo>
            <img src={`${process.env.PUBLIC_URL}/images/MainPage/MainBackGround/MainCloudT.png`} className="cloudT" />

            <img src={`${process.env.PUBLIC_URL}/images/MainPage/MainElement/MainFlyT.png`} className="flyT" />
            <M.Castle>
                <img src={`${process.env.PUBLIC_URL}/images/MainPage/MainElement/MainCastle.png`} alt="castle" />
            </M.Castle>
            <img src={`${process.env.PUBLIC_URL}/images/MainPage/MainBackGround/MainFireWorkR.png`} alt="fireWorkR" className="fireworkR" />
            <M.Middle>
                <img src={`${process.env.PUBLIC_URL}/images/MainPage/MainBackGround/MainFireWorkL.png`} className="fireWorkL" />
                <img src={`${process.env.PUBLIC_URL}/images/MainPage/MainBackGround/MainCloudH.png`} className="cloudH" />

            </M.Middle>
            <M.Bottom>
                <img src={`${process.env.PUBLIC_URL}/images/MainPage/MainElement/MainFlower.png`} alt="flower" className="flower" />
                <img src={`${process.env.PUBLIC_URL}/images/MainPage/MainBackGround/MainIsland.png`} alt="Island" className="island" />
                <M.CloudsBottom>
                    <img src={`${process.env.PUBLIC_URL}/images/MainPage/MainBackGround/MainCloudB.png`} className="cloudB" />
                    <img src={`${process.env.PUBLIC_URL}/images/MainPage/MainElement/MainFlyB.png`} className="flyB" />
                    <img src={`${process.env.PUBLIC_URL}/images/MainPage/MainElement/MainFlyM.png`} className="flyM" />
                </M.CloudsBottom>
                <M.Wheel>
                    <img src={`${process.env.PUBLIC_URL}/images//MainPage/Mainwheel/MainWheel.png`} className="wheelBase" />

                    <div className="wheelButtons">
                        <M.NavSom>
                            <img src={`${process.env.PUBLIC_URL}/images/MainPage/Mainwheel/MainTimetable.png`} className="timeTable" />
                            <img src={`${process.env.PUBLIC_URL}/images/MainPage/MainWheel/MainBoothinfo.png`} className="boothInfo" />
                            <img src={`${process.env.PUBLIC_URL}/images/MainPage/MainWheel/MainBoothArr.png`} className="boothArray" />
                            <img src={`${process.env.PUBLIC_URL}/images/MainPage/MainWheel/MainSomtalk.png`} className="somTalk" />
                            <img src={`${process.env.PUBLIC_URL}/images/MainPage/MainWheel/MainMakers.png`} className="makers" />
                        </M.NavSom>
                    </div>
                </M.Wheel>

            </M.Bottom>
        </M.Container>
    );
};

export default MainPage;