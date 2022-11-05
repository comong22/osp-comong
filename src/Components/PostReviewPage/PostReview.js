import { GlobalFonts } from "../../fonts/font";
import "./PostReview.css";
import {useState} from "react";
import styled from "styled-components";

const PostRContainer = styled.div`
  background: #fff7ef;
  display: flex;
  height: 90%;
  width: 100%;
  z-index: 3;
  scroll-snap-align: start;
`;

function PostReview(){

  const [text1,setText1] = useState('');
  const [text2,setText2] = useState('');
  const [text3,setText3] = useState('');
  const [text4,setText4] = useState('');
  const [text5,setText5] = useState('');
  const [text6,setText6] = useState('');
  const [text7,setText7] = useState('');
  const [text8,setText8] = useState('');
  const [text9,setText9] = useState('');
  const [text10,setText10] = useState('');
  const [text11,setText11] = useState('');

    return(
        <>
        <GlobalFonts />
        <PostRContainer>
        <div className="postReviewBG">
        
        <div className="column">
         <div className="Box"></div> 
         <div className="TextP">대표 사진</div> 
        </div>

         <div className="info">
          <div className="line">
            <div className="TextI">식당 이름</div>
            <input className="Write1" type="text" value={text1} onChange={(e) => {setText1(e.target.value);}}/>
            <div className="TextI">카테고리</div>
            <input className="Write2" type="text" placeholder="일식" value={text2} onChange={(e) => {setText2(e.target.value);}}/>
            <div className="TextI">주차여부</div>
            <input className="Write3" type="text" placeholder="Y" value={text3} onChange={(e) => {setText3(e.target.value);}}/>
          </div>
          <div className="line">
            <div className="TextI">주소</div>
            <input className="Write4" type="text" placeholder="정확한 주소를 입력해주세요!" value={text4} onChange={(e) => {setText4(e.target.value);}}/>
          </div>
          <div className="line">
            <div className="TextI">전화번호</div>
            <input className="Write1" type="text" placeholder="010 - 1234 - 5678" value={text5} onChange={(e) => {setText5(e.target.value);}}/>
            <div className="TextI">가격대</div>
            <input className="Write2" type="text" placeholder="최저가" value={text6} onChange={(e) => {setText6(e.target.value);}}/>
            <div className="TextI">~</div>
            <input className="Write2" type="text" placeholder="최고가" value={text7} onChange={(e) => {setText7(e.target.value);}}/>
          </div>
          <div className="line">
            <div className="TextI">영업시간</div>
            <input className="Write1" type="text" placeholder="90:00 ~ 21:00" value={text8} onChange={(e) => {setText8(e.target.value);}}/>
            <div className="TextI">사이트</div>
            <input className="Write5" type="text" placeholder="인스타그램, 대표 사이트" value={text9} onChange={(e) => {setText9(e.target.value);}}/>
          </div>
          <div className="TextP">대표메뉴 등록하기</div> 
          <div className="line">
            <div className="Boxs"></div> 
            <div>
            <div className="line">
            <div className="TextI">메뉴명</div>
            <input className="Write1" type="text" value={text10} onChange={(e) => {setText10(e.target.value);}}/>
            </div>
            <div className="line">
            <div className="TextI">가격</div>
            <input className="Write5" type="text" value={text11} onChange={(e) => {setText11(e.target.value);}}/>
            </div>
            </div>
          </div>
         </div>  
        </div>
        </PostRContainer>
        </>
    )
};

export default PostReview;