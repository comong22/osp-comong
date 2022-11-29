import { GlobalFonts } from "../../fonts/font";
import "./PostReview.css";
import {useState, useEffect, useRef} from "react";
import styled from "styled-components";
import { FaTimes} from "react-icons/fa";
import { FaStar} from 'react-icons/fa';
import { BsPlusSquare } from "react-icons/bs";
import { db } from "../../firebase";
import { storage } from "../../firebase";
import { redirect } from "react-router-dom";
 
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

//모달창
const OverLay = styled.div`
position: fixed;
width: 100%;
height: 100%;
top:0;
bottom:0;
left:0;
right:0;
background: rgba(0,0,0,0.2);
z-index: 9999;
`;

const ModalWrap = styled.div`
width: 500px;
height: fit-content;
border-radius:20px;
background-color:#fff;
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
float:right;
width: 30px;
height:30px;
margin: 20px;
cursor: pointer;
`;

const Contents = styled.div`
margin: 60px;

h1{
    font-family: 'Spoqa Han Sans Neo';
    font-size: 20px;
    font-weight: 600;
}
h4{
    font-family: 'Spoqa Han Sans Neo';
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 60px;
}
`;

const Button = styled.button`
background-color: #ffa574;
color: white;
font-family: 'Spoqa Han Sans Neo';
font-style: normal;
font-weight: 700;  
font-size: 20px;
font-size: 14px;
padding: 10px 40px;
border: none;
border-radius: 30px;
color: white;
cursor: pointer;
&:hover{
    background-color: #FAD4B2;
}
`;

const ARRAY = [0, 1, 2, 3, 4];

const PostReview = (props) => {

  //모달창
  const [isOpen, setIsOpen] = useState(false);

  function Modal({onClose}){
    const handleClose = () => {
        onClose?.();
    };

    const handleSubmit = () => {
        onClose?.();
        onClickButton();
        setText1('');
        setText2('');
        setContent('');
        setClicked([false, false, false, false, false]);
        setImageUrl(null);
    };

    return(
        <OverLay>
            <ModalWrap>
                <CloseButton onClick={handleClose}>
                    <FaTimes size={30}/>
                </CloseButton>
                <Contents>
                    <h1>리뷰를 등록하시겠습니까?</h1>
                    <h4>업로드 후에는 수정이 불가합니다.</h4>
                    <Button onClick={handleSubmit}>리뷰 등록하기</Button>
                </Contents>
            </ModalWrap>
        </OverLay>
    );
}
 
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
                        bucket.add({url,text1, text2, content, star})
                        .then((docRef) => {
                          console.log(docRef.id);
                        });
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
  
  
var require1 = document.getElementById('text1');
var require2 = document.getElementById('text2');

var change1 = document.getElementById('Ttext1');
var change2 = document.getElementById('Ttext2');
var change3 = document.getElementById('Ttext3');

  const onClickBtn = () => {
    if(require1.value !== '' && require2.value !== '' && star !== 0){
    setIsOpen(true);
    change1.style.color = 'rgb(125, 125, 125)';
    change2.style.color = 'rgb(125, 125, 125)';
    change3.style.color = 'rgb(125, 125, 125)';
    }
    if(require1.value === ''){
        change1.style.color = '#ffa574';
      }
    if(require2.value === ''){
        change2.style.color = '#ffa574';
      }
    if(star === 0){
      change3.style.color = '#ffa574';
      }
  };

  const onClickButton = () => {
    uploadeFiles(ImgInput.current.files[0]);
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
          <input ref={ImgInput} type='file' accept="image/*" className="Box" id="fileSize"
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
            <label className="TextI" id="Ttext1">닉네임</label>
            <input className="Write1" type="text" placeholder="김이화" id="text1" value={text1} onChange={(e) => {setText1(e.target.value);}} />
            <label className="TextI" id="Ttext2">메뉴이름</label>
            <input className="Write2" type="text" placeholder="정확한 메뉴명을 입력해주세요!" id="text2" value={text2} onChange={(e) => {setText2(e.target.value);}} />
          </div>

            <Wraps>
            <label className="TextI" id="Ttext3">별점</label>
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
                    id="content"
                    placeholder="내용을 입력해주세요!"
                    value={content}
                    onChange = {(e) =>{setContent(e.target.value)}}
                    required
                    maxLenth="100"
                    />
                    
          <Wrap>
            <ButtonR type="submit" onClick={onClickBtn}>등록하기</ButtonR>
          {isOpen && (<Modal open={isOpen} onClose = {() => {setIsOpen(false);}}/>)}
          </Wrap>
         </div>  
        </div>
        </PostRContainer>
        </>
    )
};

export default PostReview;