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


const BottomContainer = styled.div`
  background: #fff7ef;
  display: flex;
  height: 90%;
  width: 100%;
  z-index: 3;
  scroll-snap-align: start;
`;


function Review(){
    const bestmenuimg = [
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

        const [page, setPage] = useState(1);
        const handlePageChange = (page) => {
          setPage(page);
        };
    return(
        <>

            <Container1> 
                <ReviewCol>
                    <RvRow1>
                        <div className="reviewimg">
                            <img src={bestmenuimg[id].src} />
                        </div>
                    </RvRow1>
                    <RvRow2>
                        <FeatherIMG src={feather} alt="feather" />
                        <div className="NickName">NickName</div>
                        <div className="star">평점 #</div>
                    </RvRow2>
                    <RvRow3>
                        <div className="ReviewC">
                            content1
                        </div>
                    </RvRow3>
                    <RvRow4>
                        <div className="reviewimg">
                            <img src={bestmenuimg[id].src} />
                        </div>
                    </RvRow4>
                    <RvRow5>
                        <FeatherIMG src={feather} alt="feather" />
                        <div className="NickName">NickName</div>
                        <div className="star">평점 #</div>
                    </RvRow5>
                    <RvRow6>
                        <div className="ReviewC">
                            Content2
                        </div>
                    </RvRow6>
                    <RvRow7>
                        <div className="reviewimg">
                            <img src={bestmenuimg[id].src} />
                        </div>
                    </RvRow7>
                    <RvRow8>
                        <FeatherIMG src={feather} alt="feather" />
                        <div className="NickName">NickName</div>
                        <div className="star">평점 #</div>
                    </RvRow8>
                    <RvRow9>
                        <div className="ReviewC">
                            Content3
                        </div>
                    </RvRow9>
                    <RvRow12>
                        <Pagination 
                            activePage={page}
                            itemsCountPerPage={3}
                            totalItemsCount={30}
                            pageRangeDisplayed={5}
                            prevPageText="‹"
                            nextPageText="›"
                            onChange={handlePageChange}
                        />
                    </RvRow12>
                </ReviewCol>
            </Container1>

        </>
    )
}

export default Review;

