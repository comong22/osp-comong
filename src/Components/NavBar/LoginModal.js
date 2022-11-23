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
  ModalContent1,
  SignupText,
  TextWrap,
  XBtn,
} from "./ModalElement";
import { useNavigate } from "react-router-dom";

import x from "../../images/xBtn.svg";
const LoginModal = ({ openModalHandler }) => {
  let navigate = useNavigate();

  return (
    <>
      <GlobalFonts />
      <ModalContainer>
        <XBtn src={x} onClick={() => openModalHandler(false)} />
        <LoginContent1>이대 맛집은 커몽으로</LoginContent1>
        <LoginContent2>COME-ON!</LoginContent2>
        <Label1>이메일</Label1>
        <InputBox placeholder="comong1886@ewhain.net" name="email" />
        <Label2>비밀번호</Label2>
        <InputBox placeholder="comong1234" name="password" />
        <BtnWrap>
          <Button1
            onClick={() => {
              navigate("/");
            }}
          >
            로그인
          </Button1>
        </BtnWrap>
        <TextWrap>
          <Minitext>회원이 아니신가요?</Minitext>
          <SignupText onClick={() => {
              navigate("/signup");
              openModalHandler(false)
            }}>회원가입</SignupText>
        </TextWrap>
      </ModalContainer>
    </>
  );
};
export default LoginModal;
