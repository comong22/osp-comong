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
import { auth } from "../../firebase";

import x from "../../images/xBtn.svg";
import { useState } from "react";
import { signUp, signIn } from "../../auth";
const LoginModal = ({ openModalHandler }) => {
  const [tab, setTab] = useState(1); // 0 : login , 1 : signup
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState({});

  auth().onAuthStateChanged((currentUser) => {
    setUser(currentUser);
  });
  const login = async () => {
    try {
      const user = await auth().signInWithEmailAndPassword(email, password);
      console.log(user);
    } catch (error) {
      // console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      auth().signOut();
    } catch (error) {
      // console.log(error.message);
    }
  };
  const handleOnChange = (e) => {
    // 변경 감지
    const type = e.target.name;
    if (type == "email") {
      setEmail(e.target.value);
    } else if (type == "password") {
      setPassword(e.target.value);
    }
  };

  const handleOnSubmit = async (e) => {
    // 회원가입
    e.preventDefault();
    if (email !== "" && password !== "") {
      try {
        await signUp(email, password);
      } catch (error) {
        console.log(error);
      }
    }
  };

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
            <InputBox
              placeholder="comong1886@ewhain.net"
              name="email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Label2>비밀번호</Label2>
            <InputBox
              placeholder="comong1234"
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <BtnWrap>
              <Button1 type="button" onClick={login}>
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
            {/* 아래 두 줄 임시 */}
            <div>로그인 확인 : {user?.email}</div>
            <SignupText onClick={logout}>로그아웃</SignupText>
          </>
        ) : (
          <div>
            <SignUp>회원가입</SignUp>
            <form onSubmit={handleOnSubmit}>
              <SignUpWrap>
                <NickNameLabel>닉네임</NickNameLabel>
                <NicknameInputBox placeholder="김코몽" name="nickname" />
              </SignUpWrap>
              <SignUpWrap>
                <EmailLabel>이메일(아이디)</EmailLabel>
                <EmailInputBox
                  placeholder="comong1886@ewhain.net"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleOnChange}
                />
              </SignUpWrap>
              <SignUpWrap>
                <PWLabel1>비밀번호</PWLabel1>
                <PWInputBox
                  placeholder="비밀번호 입력하기"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleOnChange}
                />
              </SignUpWrap>
              <SignUpWrap>
                <PWLabel2>비밀번호 확인</PWLabel2>
                <PWInputBox placeholder="비밀번호 확인" name="password" />
              </SignUpWrap>
              <BtnWrap>
                <Button1 type="submit">회원가입</Button1>
              </BtnWrap>
            </form>
          </div>
        )}
      </ModalContainer>
    </>
  );
};
export default LoginModal;
