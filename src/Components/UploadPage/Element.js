import styled from "styled-components";

export const UploadImg = styled.div`
  margin-top: 90px;
`;

export const Button = styled.button`
  background-color: #ffa574;
  color: white;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  font-size: 14px;
  padding: 10px 25px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  margin: 30px 0 0 30px;
  float: left;
  &:hover {
    background-color: #fad4b2;
  }
`;

export const SelectBox = styled.div`
  position: relative;
  width: 120px;
  padding: 10px;
  margin: 0 0 20px 20px;
  border-radius: 6px;
  border: 1px solid rgba(0, 16, 61, 0.12);
  box-sizing: border-box;
  z-index: 999;
  background-color: #ffffff;
  align-self: center;
  cursor: pointer;

  &::before {
    content: "⌵";
    position: absolute;
    top: 4px;
    right: 10px;
    color: #ffa574;
    font-size: 20px;
    font-weight: bold;
  }
`;



export const Label2 = styled.label`
  font-family: "SUIT Regular";

  font-size: 15px;
  margin-left: 10px;
  text-align: center;
`;


export const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
  top: 30px;
  left: 0;
  width: 100%;
  overflow: hidden;
  max-height: ${(props) => (props.show ? "none" : "0")};
  padding: 0;
  border-radius: 6px;
  border: ${(props) =>
    props.show ? "1px solid rgba(0, 16, 61, 0.12)" : "none"};

  background-color: #ffffff;
`;

export const Option = styled.li`
  font-family: "SUIT Regular";

  font-size: 14px;
  padding: 10px;
  text-align: center;
  transition: background-color 0.2s ease-in;
  &:hover {
    background-color: #fff7ef;
  }
`;
