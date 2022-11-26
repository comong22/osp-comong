import { GlobalFonts } from "../../fonts/font";
import {
  BtnWrap,
  Button1,
  InputBox,
  Label1,
  Label2,
  LoginContent1,
  LoginContent2,
  Minitext,
  ModalContainer,
  SignupText,
  TextWrap,
  XBtn,
  SignUp,
  NickNameLabel,
  NicknameInputBox,
  SignUpWrap,
  EmailLabel,
  EmailInputBox,
  PWInputBox,
  PWLabel1,
  PWLabel2,
} from "./ModalElement";
import { useNavigate } from "react-router-dom";

import x from "../../images/xBtn.svg";
import { useState } from "react";
const LoginModal = ({ openModalHandler }) => {
  let navigate = useNavigate();
  const [tab, setTab] = useState(1); // 0 : login , 1 : signup

  return (
    <>
      <GlobalFonts />
      <ModalContainer>
        <XBtn src={x} onClick={() => openModalHandler(false)} />
        {tab ? (
          <>
            <LoginContent1>이대 맛집은 커몽으로</LoginContent1>
            <LoginContent2>COME-ON!</LoginContent2>
            <Label1>이메일(아이디)</Label1>
            <InputBox placeholder="comong1886@ewhain.net" name="email" />
            <Label2>비밀번호</Label2>
            <InputBox placeholder="comong1234" name="password" />
            <BtnWrap>
              <Button1
                onClick={() => {
                  alert("로그인 성공");
                }}
              >
                로그인
              </Button1>
            </BtnWrap>
            <TextWrap>
              <Minitext>회원이 아니신가요?</Minitext>
              <SignupText
                onClick={() => {
                  setTab(0);
                }}
              >
                회원가입
              </SignupText>
            </TextWrap>
          </>
        ) : (
          <div>
            <SignUp>회원가입</SignUp>
            <SignUpWrap>
              <NickNameLabel>닉네임</NickNameLabel>
              <NicknameInputBox placeholder="김코몽" name="nickname" />
            </SignUpWrap>
            <SignUpWrap>
              <EmailLabel>이메일(아이디)</EmailLabel>
              <EmailInputBox placeholder="comong1886@ewhain.net" name="email" />
            </SignUpWrap>
            <SignUpWrap>
              <PWLabel1>비밀번호</PWLabel1>
              <PWInputBox placeholder="비밀번호 입력하기" name="password" />
            </SignUpWrap>
            <SignUpWrap>
              <PWLabel2>비밀번호 확인</PWLabel2>
              <PWInputBox placeholder="비밀번호 확인" name="password" />
            </SignUpWrap>
            <BtnWrap>
              <Button1
                onClick={() => {
                  alert("회원가입 성공");
                  openModalHandler(false);
                }}
              >
                회원가입
              </Button1>
            </BtnWrap>
          </div>
        )}
      </ModalContainer>
    </>
  );
};
export default LoginModal;
