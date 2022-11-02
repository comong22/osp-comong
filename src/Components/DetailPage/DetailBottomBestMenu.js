import { GlobalFonts } from "../../fonts/font";
import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./DetailPage.css";
import bestmenuimg from '../../images/main/main1.jpg';


const BottomContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  z-index: 3;
  scroll-snap-align: start;
`;

function DetailBottomBestMenu() {
    const [activeNav, setActiveNav] = useState(1);
  return (
    <>
      <GlobalFonts />
      <BottomContainer>
        <div className="detailBG">
          <div className="bottomBox">
            <nav className="BottomNav">
                <div className={activeNav ===1? "active-nav" : "nav-item"}>
                <Link to="." onClick={() => setActiveNav(1)}>
                    <div> 대표 메뉴 </div>
                </Link>
                </div>
                <div className={activeNav ===2? "active-nav" : "nav-item"}>
                <Link to="/DetailBottomReview" onClick={() => setActiveNav(2)}>
                    <div> 리뷰 </div>
                </Link>
                </div>
            </nav>
            <div className="navbestfont">
              BEST
            </div>
            <div className="bestmenuImg"> 
              <img src={bestmenuimg}/>
            </div>
            <div className="navbestmenufont">
              치즈 돈가스<br/>
              11,500원
            </div>
            </div>
        </div>
      </BottomContainer>
    </>
  );
}

export default DetailBottomBestMenu;
