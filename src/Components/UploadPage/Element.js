import styled from "styled-components";

export const UploadImg = styled.div`
  margin-top: 90px;
`;

export const Button = styled.button`
  background-color: #ffa574;
  color: #fff7ef;
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-family: "Spoqa Han Sans Neo";
  align-content: center;
  font-weight: 700;
  width: 100px;
  height: 40px;
  &:hover {
    background-color: #fad4b2;
  }
`;

export const SelectBox = styled.div`
  display: inline-block;
  position: relative;
  float: left;
  left: 0px;
  width: 115px;
  height: 30px;
  padding: 2.7px;
  margin-left: 15px;
  align-self: center;
  border-radius: 6px;

  box-sizing: border-box;
  z-index: 999;
  background-color: #ffffff;
  align-self: center;
  cursor: pointer;

  &::before {
    content: "⌵";
    position: absolute;
    top: -1px;
    right: 8px;
    color: #ffa574;
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Label2 = styled.label`
  display: flex;
  font-size: 15px;
  padding: 0 15x 0 15px;
  // margin: 5px;
  color: rgb(125, 125, 125);
  align-items: center;
  justify-content: center;
  width: 90px;
  font-family: "Spoqa Han Sans Neo Regular";
  margin: 5px;
`;

export const SelectOptions = styled.ul`
  position: absolute;
  list-style: none;
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
