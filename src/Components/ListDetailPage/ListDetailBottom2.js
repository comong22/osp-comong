import { GlobalFonts } from "../../fonts/font";
import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { main_data } from "../MainPage/data";

import "./ListDetailPage.css";
import Review from "./ReviewPage";
import {
  BestmenuTab,
  BottomBox,
  Container,
  ContentArea,
  ReviewTab,
  TabCol,
  TabRow1,
  TabRow2,
} from "./ListDetailStyle";

const BottomContainer = styled.div`
  background: #fff7ef;
  display: flex;
  height: 90%;
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 3;
  scroll-snap-align: start;
`;

function ListDetailBottom() {
  let [tab, setTab] = useState(0); // 0 대표메뉴, 1 리뷰

  return (
    <>
      <GlobalFonts />
      <BottomContainer>
        <Container>
          <BottomBox>
          <TabCol>
            <TabRow1>
              <BestmenuTab
                tab={tab}
                onClick={() => {
                  setTab(0);
                }}
              >
                대표 메뉴
              </BestmenuTab>
            </TabRow1>
            <TabRow2>
              <ReviewTab
                tab={tab}
                onClick={() => {
                  setTab(1);
                }}
              >
                리뷰
              </ReviewTab>
            </TabRow2>
          </TabCol>
          <ContentArea>
            <TabContent tab={tab} />
          </ContentArea>

          </BottomBox>
        </Container>
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
    { id: 0, src: require("../../images/listdetail_bm/p2_bm1.jpg") },
    { id: 1, src: require("../../images/listdetail_bm/p2_bm2.jpg") },
    { id: 2, src: require("../../images/listdetail_bm/p2_bm3.jpg") },
    { id: 3, src: require("../../images/listdetail_bm/p2_bm4.jpg") },
    { id: 4, src: require("../../images/listdetail_bm/p2_bm5.jpg") },
    { id: 5, src: require("../../images/listdetail_bm/p2_bm6.jpg") },
    { id: 6, src: require("../../images/listdetail_bm/p2_bm7.jpg") },
    { id: 7, src: require("../../images/listdetail_bm/p2_bm8.jpg") },
    { id: 8, src: require("../../images/listdetail_bm/p2_bm9.jpg") },
  ];
  const { id } = useParams(); //params로 받아 -> id

  return (
    <>
      <div className="navbestfont">BEST</div>
      <div className="bestmenuImg">
        <img src={bestmenuimg[id].src} />
      </div>
      <div className="navbestmenufont">
        {main_data[id].menu_1}
        <br />
        {main_data[id].menu_1_price}
      </div>
    </>
  );
}

export default ListDetailBottom;
