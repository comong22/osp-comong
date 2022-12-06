import { GlobalFonts } from "../../fonts/font";
import styled from "styled-components";
import React from "react";
import { useState, useEffect } from "react";
import { db } from "../../firebase";
import { useParams } from "react-router-dom";

import "./ListDetailPage.css";
import Review from "../DetailPage/ReviewPage";
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
  const { id } = useParams(); //params로 받아 -> id

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const ref = db.collection("place02Bottom"); // "컬렉션명"
  var arr = [0];
  for (let i = 0; i < data.length; i++) {
    arr[i] = i + 1;
  }

  function getData() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
      setLoader(false);
    });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div>
        {loader === false &&
          data.slice(arr[id] - 1, arr[id]).map((rest2) => (
            <div>
              <div className="navbestfont">BEST</div>
              <div className="bestmenuImg">
                <img src={rest2.url2} />
              </div>
              <div className="navbestmenufont">
                {rest2.bestmenuname}
                <br />
                {rest2.bestmenuprice}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default ListDetailBottom;
