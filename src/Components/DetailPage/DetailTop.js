import { useParams, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { main_data } from "../MainPage/data";
import mappin from "../../images/main/mappin.svg";
import star from "../../images/detail/star.svg";
import link from "../../images/detail/fi_link.svg";
import phone from "../../images/detail/phone.svg";
import menu from "../../images/detail/menu.svg";
import clock from "../../images/main/clock.svg";
import finfo from "../../images/detail/fi_info.svg";
import {
  Row1,
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
  LinkIMG,
  Menu3,
  ClockIMG,
  Clock,
  Parking,
  ParkingIMG,
  Addhours,
} from "./DetailStyle.js";

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
  let navigate = useNavigate(); // 페이지 이동
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
           <div className="all">
            <div className="detailinfo">가게정보</div>
            <InfoCol>
              <Row1>
                <DetailName>{main_data[id].name}</DetailName>
                <Category>| {main_data[id].category}</Category>
              </Row1>
              <Row3>
                <MapPinIMG src={mappin} alt="mappin" />
                <Address>{main_data[id].address}</Address>
                <PhoneIMG src={phone} alt="phone" />
                <Tel>{main_data[id].tel}</Tel>
                <MenuIMG src={menu} alt="menu" />
                <Menu1>
                  {main_data[id].price1} ~ {main_data[id].price2}
                </Menu1>
              </Row3>
              <Row4>
                <ClockIMG src={clock} alt="clock" />
                <Clock>{main_data[id].business_hours}</Clock>
                {/*
                <Addhours>{main_data[id].add_hours}</Addhours>*/}
                <ParkingIMG src={finfo} alt="finfo" />
                <Parking>{main_data[id].parking}</Parking>
                <LinkIMG src={link} alt="link"/>
                <Link>{main_data[id].site}</Link>
              </Row4>
              <Row5>
              <div>
                <button
                  className="Rbutton"
                  onClick={() => {
                    navigate("/review");
                  }}
                >
                  리뷰 작성
                </button>
              </div>
              </Row5>
            </InfoCol>
            </div>
          </div>
        </div>
      </TopContainer>
    </>
  );
}

export default DetailTop;
