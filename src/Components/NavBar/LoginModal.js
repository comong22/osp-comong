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
import x from "../../images/xBtn.svg";

import { GlobalFonts } from "../../fonts/font";
import { auth } from "../../firebase";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import firebase from "firebase";
// 리덕스
import { useSelector, useDispatch } from "react-redux";
import { addUser } from "./store";

const LoginModal = ({ openModalHandler }) => {
  // redux state
  let state = useSelector((state) => {
    return state;
  });
  let dispatch = useDispatch();

  const [tab, setTab] = useState(1); // 0 : login , 1 : signup

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState({});

  auth().onAuthStateChanged((currentUser) => {
    // dispatch(addUser(currentUser));
    setUser(currentUser);
  });

  // 회원가입
  const signUP = async () => {
    try {
      auth().createUserWithEmailAndPassword(email, password);
      // await firebase.database().ref("users").child(user).set({
      //   nickname: nickname,
      //   email: email,
      // });
    } catch (error) {
      console.log(error.message);
    }
  };

  // 로그인
  const login = async () => {
    try {
      const user = await auth().signInWithEmailAndPassword(email, password);
      // console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  // 로그아웃
  const logout = async () => {
    try {
      auth().signOut();
    } catch (error) {
      console.log(error.message);
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
            <SignUpWrap>
              <NickNameLabel>닉네임</NickNameLabel>
              <NicknameInputBox
                placeholder="김코몽"
                name="nickname"
                type="nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </SignUpWrap>
            <SignUpWrap>
              <EmailLabel>이메일(아이디)</EmailLabel>
              <EmailInputBox
                placeholder="comong1886@ewhain.net"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </SignUpWrap>
            <SignUpWrap>
              <PWLabel1>비밀번호</PWLabel1>
              <PWInputBox
                placeholder="비밀번호 입력하기"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </SignUpWrap>
            <SignUpWrap>
              <PWLabel2>비밀번호 확인</PWLabel2>
              <PWInputBox placeholder="비밀번호 확인" name="password" />
            </SignUpWrap>
            <BtnWrap>
              <Button1 onClick={signUP}>회원가입</Button1>
            </BtnWrap>
          </div>
        )}
      </ModalContainer>
    </>
  );
};
export default LoginModal;
