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

export const ListBestmenu = styled.div`
  font-family: "Spoqa Han Sans Neo Bold";
  font-style: normal
  font-size: 28px;
  color: ${({ tab }) => (tab === 0 ? "#FFBA94" : "#464646")};
  }
`;

export const ListReview = styled.div`
  font-family: "Spoqa Han Sans Neo Bold";
  font-style: normal;
  font-size: 28px;
  color: ${({ tab }) => (tab === 0 ? "#FFBA94" : "#464646")};
  }
`;

export const ListBox = styled.div`
  scroll-snap-align: start;
  max-width: 1469px;
  height: 200px;
  margin: 0 0 0 50px;
  background: #FFFFFF;
`;

function DetailBottom() {
    let [tab, setTab] = useState(0); // 0 대표메뉴, 1 리뷰

    return (
    <>
      <GlobalFonts />
      <BottomContainer>
        <ListBestmenu tap={tab} onClick={() => {setTab(0);}}>
            대표 메뉴
        </ListBestmenu>

        <ListReview tap={tab} onClick={() => {setTab(1);}}>
           리뷰
       </ListReview>
       <ListBox>
          <TabContent tab={tab} />
       </ListBox>
      </BottomContainer>
    </>
  );
}

function TabContent(props) {
  return (
    <div>
      {
        [
          <div>
            <Bestmenu />
          </div>,
          <div>
            <Review />
          </div>,
        ][props.tab]
      }
    </div>
  );
}

function Bestmenu(props) {

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
  const { id } = useParams(); //params로 받아 -> id

  return (
    <>
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

    </>
  );
}

function Review() {
  return (
    <>
      <div>리뷰 작성</div>
    </>
  );
}

export default DetailBottom;
