import React from "react";
import styled from "styled-components"; 
import { FaTimes} from "react-icons/fa";

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

function Modal({onClose}){
    const handleClose = () => {
        onClose?.();
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
                    <Button onClick={handleClose}>리뷰 등록하기</Button>
                </Contents>
            </ModalWrap>
        </OverLay>
    );
}

export default Modal;