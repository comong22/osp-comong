import styled from "styled-components";
import { Link } from "react-scroll";

export const ModalContainer = styled.div`
  display: grid;
  background-color: white;
  width: 40vw;
  max-width: 600px;
  height: 60vh;
  filter: drop-shadow(0px 7px 22px rgba(20, 20, 43, 0.1));
  border-radius: 35px;
  align-content: start;
  overflow-y: auto;
  position: fixed;
  left: 50vw;
  top: 50vh;
  padding: 5px;
  transform: translate(-50%, -50%);
  z-index: 1011;
`;

export const XBtn = styled.img`
  max-width: 25px;
  display: grid;
  margin: 20px 0 0 90%;
`;

export const LoginContent1 = styled.div`
  display: grid;
  text-align: center;
  margin: 4% 0 5px 0;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 130%;
  /* or 42px */

  letter-spacing: 0.008em;

  color: #333333;
`;

export const LoginContent2 = styled.div`
  display: grid;
  text-align: center;
  font-family: "Spoqa Han Sans Neo Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 130%;
  /* or 42px */

  letter-spacing: 0.008em;

  color: #333333;
`;

export const Label1 = styled.label`
  font-family: "Spoqa Han Sans Neo Regular";
  font-weight: 10px;
  margin: 4% 10px 0 18%;
  color: #333333;
`;
export const Label2 = styled.label`
  font-family: "Spoqa Han Sans Neo Regular";
  font-weight: 10px;
  margin: 3% 10px 0 18%;
  color: #333333;
`;

export const InputBox = styled.input`
  border: 2px solid #fff7ef;
  border-radius: 10px;
  width: 65%;
  max-width: 600px;
  height: 35px;
  resize: none;
  display: block;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 10px;
  text-align: center;
  margin: 2% 0 0 18%;
`;

export const BtnWrap = styled.div`
  height: 40px;
  display: flex;

  margin-top: 6%;
  align-items: center;
  justify-content: center;
`;

export const Button1 = styled.button`
  background: #ffa574;
  border-radius: 50px;
  white-space: nowrap;
  padding: 13px 30px;
  color: white;
  font-family: "Spoqa Han Sans Neo Bold";
  font-size: 18px;
  font-weight: 400;
  border: none;
  line-height: 22px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #ffba94;
    color: white;
    border: none;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  justify-content: center;
`;
export const Minitext = styled.div`
  font-family: "Spoqa Han Sans Neo Regular";
  width: 130px;
  font-size: 15px;
  margin: 3% 0 0 0;
  float: left;
  color: #333333;
`;

export const SignupText = styled.div`
  font-family: "Spoqa Han Sans Neo Regular";
  font-size: 15px;
  margin: 3% 0 0 3px;
  float: left;
  text-decoration-line: underline;
  color: #ffa574;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ffba94;
    border: none;
  }
`;

export const SignUp = styled.div`
  display: grid;
  text-align: center;
  margin: 4% 0 4% 0;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 130%;
  /* or 42px */

  letter-spacing: 0.008em;

  color: #333333;
`;

export const SignUpWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const NickNameLabel = styled.label`
  font-family: "Spoqa Han Sans Neo Regular";
  font-weight: 10px;
  float: left;
  width: 45px;
  margin: 2% 0px 0 24%;
  color: #333333;
`;

export const EmailLabel = styled.label`
  font-family: "Spoqa Han Sans Neo Regular";
  font-weight: 10px;
  float: left;
  width: 100px;
  margin: 2% 0px 0 24%;
  color: #333333;
`;

export const PWLabel1 = styled.label`
  font-family: "Spoqa Han Sans Neo Regular";
  font-weight: 10px;
  float: left;
  width: 59px;
  margin: 2% 0px 0 24%;
  color: #333333;
`;
export const PWLabel2 = styled.label`
  font-family: "Spoqa Han Sans Neo Regular";
  font-weight: 10px;
  float: left;
  width: 92px;
  margin: 2% 0px 0 24%;
  color: #333333;
`;

export const NicknameInputBox = styled.input`
  border: 2px solid #fff7ef;
  border-radius: 10px;
  float: left;
  width: 20%;
  max-width: 100px;
  height: 35px;
  resize: none;
  display: block;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 10px;
  text-align: center;
  margin: 2% 0 0 2%;
`;

export const EmailInputBox = styled.input`
  border: 2px solid #fff7ef;
  border-radius: 10px;
  float: left;
  width: 40%;
  max-width: 200px;
  height: 35px;
  resize: none;
  display: block;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 10px;
  text-align: center;
  margin: 2% 0 0 2%;
`;
export const PWInputBox = styled.input`
  border: 2px solid #fff7ef;
  border-radius: 10px;
  float: left;
  width: 30%;
  max-width: 200px;
  height: 35px;
  resize: none;
  display: block;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 10px;
  text-align: center;
  margin: 2% 0 0 2%;
`;

export const PWcheck = styled.div`
  font-family: "Spoqa Han Sans Neo Regular";
  font-size: 13px;
  margin: 5px 0px 0 43%;
  float: left;
  color: red;
`;

export const ModalContent1 = styled.div`
  display: grid;
  text-align: center;
  font-family: "Spoqa Han Sans Neo Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 130%;
  /* or 42px */
  margin: 35px 0 20px 0;
  letter-spacing: 0.008em;

  color: #333333;
`;

export const ModalContent2 = styled.div`
  font-family: "Spoqa Han Sans Neo Bold";
  font-size: 20px;
  text-align: center;
  float: left;
  margin: 25px 0 0 0;
  color: #ffa574;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ffba94;
    border: none;
  }
`;

export const Logout = styled.div`
  max-width: 130px;
  text-align: center;
  float: left;
  font-family: "Spoqa Han Sans Neo Bold";
  font-size: 14px;
  text-decoration-line: underline;
  color: #727272;
  margin: 60px 0 0 38%;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #000000;
    border: none;
  }
`;
