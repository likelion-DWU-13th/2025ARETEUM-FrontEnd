import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as F from "../../styles/styledFirst";

const First = () => {
  return (
    <F.Container>
      <img
        id="background"
        src={`${process.env.PUBLIC_URL}/images/background.png`}
        alt="background"
      />
      <F.Letter>
        <img
            src={`${process.env.PUBLIC_URL}/images/letter1.svg`}
            alt="letter"
        />
      </F.Letter>
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
