import {
    Container1,
    ReviewCol,
    RvRow1,
    RvRow2,
    RvRow3,
    FeatherIMG,
  } from "./ListDetailStyle";
  import "./ReviewPage.css";
  import styled from "styled-components";
  import { createPath, useParams } from "react-router-dom";
  import feather from "../../images/review/Feather.svg";
  import { useState } from "react";
  import Pagination from "react-js-pagination";
  import { main_data } from "../MainPage/data";
  import {
    reviewdata0,
    reviewdata1,
    reviewdata2,
    reviewdata3,
    reviewdata4,
    reviewdata5,
    reviewdata6,
    reviewdata7,
    reviewdata8,
  } from "./ReviewData";
  
  const BottomContainer = styled.div`
    background: #fff7ef;
    display: flex;
    height: 90%;
    width: 100%;
    z-index: 3;
    scroll-snap-align: start;
  `;
  
  function Review() {
    const img = [
      { id: 0, src: require("../../images/review/review0.jpg") },
      { id: 1, src: require("../../images/review/review1.jpg") },
      { id: 2, src: require("../../images/review/review2.jpg") },
      { id: 3, src: require("../../images/review/review3.jpg") },
      { id: 4, src: require("../../images/review/review4.jpg") },
      { id: 5, src: require("../../images/review/review5.jpg") },
      { id: 6, src: require("../../images/review/review6.jpg") },
      { id: 7, src: require("../../images/review/review7.jpg") },
      { id: 8, src: require("../../images/review/review8.jpg") },
    ];
  
    const { id } = useParams(); //params로 받아 -> id
  
    let [Reviewdata, setReviewdata01] = useState(reviewdata0);
    const [items, setItems] = useState(3);
    const [page, setPage] = useState(1);
    const handlePageChange = (page) => {
      setPage(page);
    };
  
    return (
      <>
        <Container1>
          {Reviewdata.slice(items * (page - 1), items * (page - 1) + items).map(
            (v, i) => {
              return (
                <div key={i}>
                  <ReviewCol>
                    <RvRow1>
                      <div className="reviewimg">
                        <img src={img[id].src} />
                      </div>
                      <div className="enter" />
                    </RvRow1>
                    <RvRow2>
                      <FeatherIMG src={feather} alt="feather" />
                      <div className="NickName">{v.nickName}</div>
                      <div className="star">평점 #{v.star}</div>
                      <div className="enter" />
                    </RvRow2>
                    <RvRow3>
                      <div className="ReviewC">{v.content}</div>
                      <div className="enter" />
                    </RvRow3>
                  </ReviewCol>
                </div>
              );
            }
          )}
          <Pagination
            activePage={page}
            itemsCountPerPage={3}
            totalItemsCount={12}
            pageRangeDisplayed={4}
            prevPageText="‹"
            nextPageText="›"
            onChange={handlePageChange}
          />
        </Container1>
      </>
    );
  }
  
  export default Review;
  