import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as D from "../../styles/StyledDescription";

const DetailInfo = () => {

  return (
    <D.Wrapper>
        <D.InfoWrapper>
          <D.SubTitle>
            타임라인
          </D.SubTitle>
          <D.InfoBox>
            <D.InfoItem>
            </D.InfoItem>
          </D.InfoBox>
        </D.InfoWrapper>
    </D.Wrapper>
  );
};

export default DetailInfo;