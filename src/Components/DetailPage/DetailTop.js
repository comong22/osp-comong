import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import { main_data } from "../MainPage/data";
import mappin from "../../images/main/mappin.svg";
import star from "../../images/detail/star.svg";
import phone from "../../images/detail/phone.svg";
import menu from "../../images/detail/menu.svg";
import {
  Row1,
  Row2,
  Row3,
  Row4,
  Row5,
  InfoCol,
  Star,
  MapPinIMG,
  Category,
  DetailName,
  StarIMG,
  MenuIMG,
  Address,
  Tel,
  Detailaddress,
  PhoneIMG,
  Menu1,
  Menu2,
  Menu3,
}from "./DetailStyle.js";

const TopContainer = styled.div`
  display: flex;
  background: #fff7ef;
  height: 100vh;
  width: 100%;
  
  position: relative;
  z-index: 1;
  scroll-snap-align: start;
`;

function DetailTop(props) {
  const { id } = useParams(); // 유저가 URL 파라미터에 입력한 거 가져올 때 사용하는 훅

  const detailimg = [
    { id: 0, src: require("../../images/detail/detail1.jpg") },
    { id: 1, src: require("../../images/detail/detail2.jpg") },
    { id: 2, src: require("../../images/detail/detail3.jpg") },
    { id: 3, src: require("../../images/detail/detail4.jpg") },
    { id: 4, src: require("../../images/detail/detail5.jpg") },
    { id: 5, src: require("../../images/detail/detail6.jpg") },
    { id: 6, src: require("../../images/detail/detail7.jpg") },
    { id: 7, src: require("../../images/detail/detail8.jpg") },
    { id: 8, src: require("../../images/detail/detail9.jpg") },
  ];

  return (
    <>
    <TopContainer>
      <div className="detailBG">
        <div className="eachDetailImg">
          <img src={detailimg[id].src} />
        </div>
        <div className="topBox">
          <div className="detailinfo">가게정보</div>
          <InfoCol>
              <Row1>
                <DetailName>{main_data[id].name}</DetailName>
                <Category>| {main_data[id].category}</Category>
                <StarIMG src={star} alt="star" />
                <Star>{main_data[id].star}</Star>
                <MapPinIMG src={mappin} alt="mappin" />
                <Address>{main_data[id].address}</Address>
                <Detailaddress>{main_data[id].detail_address}</Detailaddress>
              </Row1>
              <Row2>
                <PhoneIMG src={phone} alt="phone" />
                <Tel>{main_data[id].tel}</Tel>
                <MenuIMG src={menu} alt="menu" />
                <Menu1>{main_data[id].menu_1} - {main_data[id].menu_1_price}</Menu1>
                <Menu2>{main_data[id].menu_2} - {main_data[id].menu_2_price}</Menu2>
                <Menu3>{main_data[id].menu_3} - {main_data[id].menu_3_price}</Menu3>
              </Row2>
              <div>
             <Link to="../PostReviewPage/PostReview">
             <button className="Rbutton">리뷰 작성</button>
            </Link>
            </div>
          </InfoCol>
        </div>
      </div>
      </TopContainer>
    </>
  );
}




export default DetailTop;
