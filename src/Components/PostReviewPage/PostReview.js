import { GlobalFonts } from "../../fonts/font";
import "./PostReview.css";
import {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import Modal from "./Modal";
import { FaStar} from 'react-icons/fa';
import { BsPlusSquare } from "react-icons/bs";
import { db } from "../../firebase";
import { dbService, storageService } from "../../firebase";
import { storage } from "../../firebase";
 
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

const PostReview = (props) => {

  //모달창
  const [isOpen, setIsOpen] = useState(false);
 
  //별점
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

  //별점 서버로 보내기
  const sendReview = () => {
    let score = [star];
    score = clicked.filter(Boolean).length;
    setStar(score);
  };
  
  //사진 미리보기
  const [imageUrl, setImageUrl] = useState(null);
  const ImgInput = useRef();
  const [preview, setPreview] = useState();

  useEffect(()=>{
    if(imageUrl){
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(imageUrl);
    } else{
      setPreview(null);
    }
    }, [imageUrl]);

    //사진 업로드
    const [progress, setProgress] = useState(0);
    const formHandler = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        uploadeFiles(file);
    };

    const uploadeFiles = (file) => {
        const uploadTask = storage.ref(`files/${file.name}`).put(file);
        uploadTask.on(
            "state_changed",
            (snapshot) => { },
            (error) => console.log(error),
            () => {
                storage
                    .ref("files")
                    .child(file.name)
                    .getDownloadURL()
                    .then((url) => {
                        console.log(url);
                    });
            }
        );
    };
    //-------------------------------------------
  
  //리뷰 등록 관련
  const [text1,setText1] = useState('');
  const [text2,setText2] = useState('');
  const [content,setContent] = useState('');
  const [star, setStar] = useState();
  
  const bucket = db.collection("review"); 

  const onClickButton = () => {
    setIsOpen(true);

    bucket
    .add({
      text1, text2, content, star
    })
    .then((docRef) => {
      console.log(docRef.id);
    }); uploadeFiles(ImgInput.current.files[0]);
  };

    return(
        <>
        <GlobalFonts />
        <PostRContainer>
        <div className="postReviewBG">
        
        <div className="column">
         <div className="Box">
         {preview ? (<img src={preview} onClick={() => {setImageUrl(null);}}/>
          ) : (
            <BsPlusSquare size={40} onClick = {(event) => {event.preventDefault(); ImgInput.current.click();}} className="File"/>
          )}
          <input ref={ImgInput} type='file' accept="image/*" className="fileSize"
          onChange={(event)=> { const file = ImgInput.current.files[0];  
          if (file) { 
            setImageUrl(file)
;          }
          else{
            setImageUrl(null);
          }}} style={{ display: "none"}}/>
          </div>  
        </div>

         <div className="info">
          <div className="line">
            <label className="TextI">닉네임</label>
            <input className="Write1" type="text" placeholder="김이화" value={text1} onChange={(e) => {setText1(e.target.value);}}/>
            <label className="TextI">메뉴이름</label>
            <input className="Write2" type="text" placeholder="정확한 메뉴명을 입력해주세요!" value={text2} onChange={(e) => {setText2(e.target.value);}}/>
          </div>

            <Wraps>
            <label className="TextI">별점</label>
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

                    <label className="TextI">리뷰 내용</label>
                    <textarea className="textArea"
                    placeholder="내용을 입력해주세요!"
                    value={content}
                    onChange = {(e) =>{setContent(e.target.value)}}
                    required
                    maxLenth="100"
                    />
                    
          <Wrap>
            <ButtonR type="submit" onClick={onClickButton} >등록하기</ButtonR>
          {isOpen && (<Modal open={isOpen} onClose = {() => {setIsOpen(false);}}/>)}
          </Wrap>
         </div>  
        </div>
        </PostRContainer>
        </>
    )
};

export default PostReview;