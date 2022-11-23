import styled from "styled-components";
import { Link } from "react-scroll";

export const ModalContainer = styled.div`
  display: grid;
  background-color: white;
  width: 40%;
  max-width: 600px;
  height: 50%;
  filter: drop-shadow(0px 7px 22px rgba(20, 20, 43, 0.1));
  border-radius: 35px;
  align-content: start;
  overflow-y: auto;
  position: fixed;
  left: 50%;
  top: 50%;
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
  margin: 25px 0 5px 0;
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
  margin: 30px 10px 0 18%;
  color: #333333;
`;
export const Label2 = styled.label`
  font-family: "Spoqa Han Sans Neo Regular";
  font-weight: 10px;
  margin: 20px 10px 0 18%;
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
  margin: 10px 0 0 18%;
`;

export const BtnWrap = styled.div`
  height: 40px;
  display: flex;

  margin-top: 40px;
  align-items: center;
  justify-content: center;
`;

export const Button1 = styled(Link)`
  background: #ffa574;
  border-radius: 50px;
  white-space: nowrap;
  padding: 13px 30px;
  color: white;
  font-family: "Spoqa Han Sans Neo Bold";
  font-size: 18px;
  font-weight: 400;
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
  margin: 20px 0 0 0%;
  float: left;
  color: #333333;
`;

export const SignupText = styled.div`
  font-family: "Spoqa Han Sans Neo Regular";
  font-size: 15px;
  margin: 20px 0 0 3px;
  float: left;
  text-decoration-line: underline;
  color: #ffba94;
`;
