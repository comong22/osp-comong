import { useParams } from "react-router-dom";
import styled from "styled-components";

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
  let item = props.MainData.find(function (x) {
    return x.id === id;
  });
  return (
    <>
    <TopContainer>
      <div className="detailBG">
        <div className="topBox">
          <div className="navdetailfont">가게 정보</div>
          <div>{item?.name}</div>
          <div>{item?.category}</div>
          <div>{item?.address}</div>
          <div>{item?.business_hours}</div>
          <div>{item?.detail_address}</div>
          <div>{item?.star}</div>
          <div>{item?.parking}</div>
          <div>{item?.menu_1}</div>
          <div>{item?.menu_1_price}</div>
          <div>{item?.menu_2}</div>
          <div>{item?.menu_2_price}</div>
          <div>{item?.menu_3}</div>
          <div>{item?.menu_3_pirce}</div>
        </div>
        {/* 리뷰 작성 버튼 필요 -> /review 페이지로 넘어갈 수 있게! */}
      </div>
      </TopContainer>
    </>
  );
}


export default DetailTop;
