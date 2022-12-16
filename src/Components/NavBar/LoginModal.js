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
  PWcheck,
} from "./ModalElement";
import x from "../../images/xBtn.svg";

import { GlobalFonts } from "../../fonts/font";
import { auth, db } from "../../firebase";
import { useState } from "react";

const LoginModal = ({ openModalHandler }) => {
  const [tab, setTab] = useState(1); // 0 : login , 1 : signup

  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [user, setUser] = useState({});

  auth().onAuthStateChanged((currentUser) => {
    // dispatch(addUser(currentUser));
    setUser(currentUser);
  });

  // user db 만들기
  const createUserDocument = async (user, additionalData) => {
    if (!user) return;

    const userRef = db.doc(`users/${user.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
      const { email } = user;
      const { nickname } = additionalData;
      try {
        userRef.set({
          nickname,
          email,
          createAt: new Date(),
        });
      } catch (error) {
        console.log("Error in creating user", error);
      }
    }
  };

  // 회원가입
  const signUP = async () => {
    try {
      const { user } = await auth().createUserWithEmailAndPassword(
        email,
        password1
      );
      console.log(user);
      await createUserDocument(user, { nickname });
    } catch (error) {
      console.log(error.message);
    }
  };

  // 로그인
  const login = async () => {
    try {
      const user = await auth().signInWithEmailAndPassword(email, password1);
      // console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  // 비밀번호 확인
  function passwordCheck() {
    if (password1 != password2 && password1.length > 1 && password2.length > 1)
      return true;
  }

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
              onChange={(e) => setPassword1(e.target.value)}
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
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
              />
            </SignUpWrap>
            <SignUpWrap>
              <PWLabel2>비밀번호 확인</PWLabel2>
              <PWInputBox
                placeholder="비밀번호 입력하기"
                name="password"
                type="password"
                value={password2}
                onChange={(e) => {
                  setPassword2(e.target.value);
                  passwordCheck();
                }}
              />
            </SignUpWrap>
            {passwordCheck() ? (
              <PWcheck>비밀번호가 일치하지 않습니다.</PWcheck>
            ) : (
              <></>
            )}
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
