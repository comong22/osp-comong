import styled from "styled-components";
import { Link } from "react-scroll";
import { useState } from "react";
import { auth } from "../../firebase";
const BG = styled.div`
  position: relative;
  top: 80px;
  width: 100vw;
  height: 100vh;
  background: #fff7ef;
`;

const Label = styled.label`
  font-family: "Spoqa Han Sans Neo";
  font-weight: 10px;
  text-align: center;
  margin: 30px 10px 0px 20px;
`;

const InputBox = styled.input`
  border-radius: 8px;
  border-color: transparent;
  width: 300px;
  height: 30px;
  resize: none;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 10px;
  text-align: center;
  margin-top: 10px;
`;

const Button1 = styled(Link)`
  background: #ffa574;
  border-radius: 50px;
  white-space: nowrap;
  padding: 13px 30px;
  color: white;
  margin: 20px 0 0 350px;
  display: block;
  font-family: "Spoqa Han Sans Neo Bold";
  font-size: 18px;
  font-weight: 400;
  line-height: 22px;
  cursor: pointer;
  width: 64px;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ffba94;
    color: white;
    border: none;
  }
`;
function SignUp() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");
  return (
    <>
      <BG>
        <h2>회원가입 임시</h2>
        <Label>닉네임</Label>
        <InputBox placeholder="닉네임 입력" onChange={(e) => {
            setNickName(e.target.value);
        }}/>
        <Label>이메일</Label>
        <InputBox placeholder="올바른 이메일 입력" onChange={(e) => {
            setEmail(e.target.value);
        }}/>
        <Label>비밀번호</Label>
        <InputBox placeholder="비밀번호 입력" onChange={(e) => {
            setPassword(e.target.value);
        }}/>
        <Button1>회원가입</Button1>
      </BG>
    </>
  );
}

export default SignUp;
