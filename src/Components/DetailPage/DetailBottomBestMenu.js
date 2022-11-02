import { GlobalFonts } from "../../fonts/font";
import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { main_data } from "../MainPage/data";

import "./DetailPage.css";

const BottomContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  z-index: 3;
  scroll-snap-align: start;
`;

function DetailBottomBestMenu(props) {
    const [activeNav, setActiveNav] = useState(1);

    const bestmenuimg = [
      {id:0, src:require("../../images/main/main0.jpg")},
      {id:1, src:require("../../images/main/main1.jpg")},
      {id:2, src:require("../../images/main/main2.jpg")},
      {id:3, src:require("../../images/main/main3.jpg")},
      {id:4, src:require("../../images/main/main4.jpg")},
      {id:5, src:require("../../images/main/main5.jpg")},
      {id:6, src:require("../../images/main/main6.jpg")},
      {id:7, src:require("../../images/main/main7.jpg")},
      {id:8, src:require("../../images/main/main8.jpg")},
    ]
    const { id } = useParams();

    return (
    <>
      <GlobalFonts />
      <BottomContainer>
        <div className="detailBG">
          <div className="bottomBox">
            <nav className="BottomNav">
                <div className={activeNav ===1? "active-nav" : "nav-item"}>
                <a href ="." onClick={() => setActiveNav(1)}>
                    <div> 대표 메뉴 </div>
                </a>
                </div>
                <div className={activeNav ===2? "active-nav" : "nav-item"}>
                <a href="/DetailBottomReview" onClick={() => setActiveNav(2)}>
                    <div> 리뷰 </div>
                </a>
                </div>
            </nav>
            <div className="navbestfont">
              BEST
            </div>
            <div className="bestmenuImg"> 
              <img src={bestmenuimg[id].src}/>
            </div>
            <div className="navbestmenufont">
              {main_data[id].menu_1}<br/>
              {main_data[id].menu_1_price}
            </div>
            </div>
        </div>
      </BottomContainer>
    </>
  );
}

export default DetailBottomBestMenu;
