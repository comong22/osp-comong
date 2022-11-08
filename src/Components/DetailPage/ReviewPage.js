import { 
    Container1, 
    ReviewCol,
    RvRow1,
    RvRow4,
    RvRow7,
    RvRow2,
    RvRow3,
    FeatherIMG,
    RvRow5,
    RvRow6,
    RvRow8,
    RvRow9,
    RvRow12,
 } from './DetailStyle';
import './ReviewPage.css';
import styled from "styled-components";
import { createPath, useParams } from "react-router-dom";
import feather from "../../images/review/Feather.svg";
import { useState} from "react";
import Pagination from 'react-js-pagination';
import { main_data } from "../MainPage/data";
import { reviewdata01,Reviewdata02,Reviewdata03,Reviewdata04,Reviewdata05,Reviewdata06,Reviewdata07,Reviewdata08,Reviewdata09} from "./Reviewdata";


const BottomContainer = styled.div`
  background: #fff7ef;
  display: flex;
  height: 90%;
  width: 100%;
  z-index: 3;
  scroll-snap-align: start;
`;


function Review(){
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

    let[Reviewdata01, setReviewdata01] = useState(reviewdata01);
    const [items, setItems] = useState(3);
    const [page, setPage] = useState(1);
    const handlePageChange = (page) => {
        setPage(page);
    };
    return(
        <>

            <Container1>
                {Reviewdata01
                    .slice(items * (page - 1), items * (page - 1) + items)
                    .map((v, i) => {
                        return (
                            <div key={i}>
                                <ReviewCol>
                                    <RvRow1>
                                        <div className="reviewimg">
                                            <img src={img[id].src} />
                                        </div>
                                    </RvRow1>
                                    <RvRow2>
                                        <FeatherIMG src={feather} alt="feather" />
                                        <div className="NickName">{v.nickName}</div>
                                        <div className="star">평점 #{v.star}</div>
                                    </RvRow2>
                                    <RvRow3>
                                        <div className="ReviewC">
                                            {v.content}
                                        </div>
                                    </RvRow3>
                                </ReviewCol>
                            </div>
                        );
                    })}
                <Pagination
                    activePage={page}
                    itemsCountPerPage={3}
                    totalItemsCount={4}
                    pageRangeDisplayed={5}
                    prevPageText="‹"
                    nextPageText="›"
                    onChange={handlePageChange}
                />
            </Container1>

        </>
    );
}

export default Review;