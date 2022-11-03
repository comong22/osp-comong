import { useParams } from "react-router-dom";
import styled from "styled-components";
import { main_data } from "../MainPage/data";
import {
  DetailInfo,
  DetailCate,
  DetailName,
} from "./DetailStyle";

import "./DetailPage.css";

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
          <DetailInfo>가게정보</DetailInfo>
          <DetailName>{main_data[id].name}</DetailName>
          <DetailCate>| {main_data[id].category}</DetailCate>
          <div className="starfont">{main_data[id].star}</div>
          <div className="addressfont">{main_data[id].address}</div>
          <div className="detailaddrfont">{main_data[id].detail_address}</div>
          <div className="hoursfont">{main_data[id].business_hours}</div>
          <div className="parkingfont">{main_data[id].parking}</div>
          <div className="menu1font">{main_data[id].menu_1}</div>
          <div className="price1font">{main_data[id].menu_1_price}</div>
          <div className="menu2font">{main_data[id].menu_2}</div>
          <div className="price2font">{main_data[id].menu_2_price}</div>
          <div className="menu3font">{main_data[id].menu_3}</div>
          <div className="price3font">{main_data[id].menu_3_price}</div>
        </div>
      </div>
      </TopContainer>
    </>
  );
}




export default DetailTop;
