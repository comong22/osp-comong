import { GlobalFonts } from "../../fonts/font";
import "./PostReview.css";
import {useState, useEffect} from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { FaStar} from 'react-icons/fa';
import { BsPlusSquare } from "react-icons/bs";
 
const PostRContainer = styled.div`
  background: #fff7ef;
  display: flex;
  height: 90%;
  width: 100%;
  z-index: 3;
  scroll-snap-align: start;
`;

const ButtonR = styled.button`
background-color: #ffa574;
color: white;
font-family: 'Spoqa Han Sans Neo';
font-style: normal;
font-weight: 700;  
font-size: 20px;
font-size: 14px;
padding: 10px 25px;
border: none;
border-radius: 5px;
color: white;
cursor: pointer;
&:hover{
    background-color: #FAD4B2;
}
`;

const Wrap = styled.div`
text-align: center;
margin 30px auto;
`;

const Wraps = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const Stars = styled.div`
  display: flex;
  padding-top: 5px;
  padding-left: 15px;

  & svg {
    color: white;
    cursor: pointer;
  }

  :hover svg {
    color: #ffa574;
  }

  & svg:hover ~ svg {
    color: white;
  }

  .colorStar {
    color: #ffa574;
  }
`;

const ARRAY = [0, 1, 2, 3, 4];

function PostReview(){

  const [text1,setText1] = useState('');
  const [text2,setText2] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  const onClickButton = () => {
    setIsOpen(true);
  };

  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  useEffect(() => {
    sendReview();
  }, [clicked]); 

  const sendReview = () => {
    let score = clicked.filter(Boolean).length;
  };

    return(
        <>
        <GlobalFonts />
        <PostRContainer>
        <div className="postReviewBG">
        
        <div className="column">
         <div className="Box">
          <div className="File"><BsPlusSquare size={40}/></div>
          </div>  
        </div>

         <div className="info">
          <div className="line">
            <div className="TextI">닉네임</div>
            <input className="Write1" type="text" placeholder="김이화" value={text1} onChange={(e) => {setText1(e.target.value);}}/>
            <div className="TextI">메뉴이름</div>
            <input className="Write2" type="text" placeholder="정확한 메뉴명을 입력해주세요!" value={text2} onChange={(e) => {setText2(e.target.value);}}/>
          </div>

            <Wraps>
            <div className="TextI">별점</div>
              <Stars>
                {ARRAY.map((el, idx) => {
                  return (
                  <FaStar
                  key={idx}
                  size="30"
                  onClick={() => handleStarClick(el)}
                  className={clicked[el] && 'colorStar'}/>
                  ); })}
                  </Stars>
                  </Wraps>  
                    <div className="TextI">리뷰 내용</div>
                    <textarea className="textArea"
                    placeholder="내용을 입력해주세요!"
                    required
                    maxLenth="100"/>
                    
          <Wrap>
            <ButtonR onClick={onClickButton}>등록하기</ButtonR>
          {isOpen && (<Modal open={isOpen} onClose = {() => {setIsOpen(false);}}/>)}
          </Wrap>
         </div>  
        </div>
        </PostRContainer>
        </>
    )
};

export default PostReview;