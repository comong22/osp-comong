import { useEffect, useState } from "react";
import { db } from "../../firebase";
import styled from "styled-components";
import {dbService, storageService } from "../../firebase";
import {storage} from "../../firebase";

const UploadImg = styled.div`
  margin-top : 90px;
`;

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
  margin: 30px 10px 0 20px;
  float: left;
`;

const InputBox = styled.input`
  border-radius: 8px;
  border-color: transparent;
  width: 100px;
  height: 30px;
  resize: none;
  display: block;
  font-family: "Spoqa Han Sans Neo";
  font-weight: 10px;
  text-align: center;
  margin-top: 20px;
`;

const Button = styled.button`
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
function Sample() {
  useEffect(() => {
    const bucket = db.collection("restaurant");
    bucket
      .doc("TlukAhFbDxaQoMth0ZMe")
      .get()
      .then((doc) => {
        if (doc.exists) {
          // .exist로 데이터 유무 확인
          console.log(doc.data());
        }
      });
  });
  const bucket = db.collection("restaurant");

const [progress, setProgress] = useState(0);
const formHandler = (e) => {
  e.preventDefault();
  const file = e.target[0].files[0];
  uploadeFiles(file);
};

const uploadeFiles = (file) => {
  const uploadTask = storage.ref(`files/${file.name}`).put(file);
  uploadTask.on(
    "state_changed", 
    (snapshot) => {

    }, 
    (error) => console.log(error),
    () => {
      storage
      .ref("files")
      .child(file.name)
      .getDownloadURL()
      .then((url) => {
        console.log(url);
      });
    }
  );
};

  let [name, setName] = useState("");
  let [addr, setAddr] = useState("");
  let [category, setCategory] = useState("");
  let [parking, setParking] = useState("");
  let [tel, setTel] = useState("");

  return (
    <>
      <BG>
        <br />
        <div>console에서 불러온 데이터 확인!</div>
        <br />
        <div>Label : 필드</div>
        <Label>name</Label>
        <InputBox
          placeholder="식당 이름"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Label>addr</Label>
        <InputBox
          placeholder="주소"
          name="addr"
          onChange={(e) => {
            setAddr(e.target.value);
          }}
        />
        <Label>category</Label>
        <InputBox
          placeholder="카테고리"
          name="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <Label>parking</Label>
        <InputBox
          placeholder="주차여부"
          name="parking"
          onChange={(e) => {
            setParking(e.target.value);
          }}
        />
        <Label>tel</Label>
        <InputBox
          placeholder="전화번호"
          name="tel"
          onChange={(e) => {
            setTel(e.target.value);
          }}
        />
        <Label>min_price</Label>
        <InputBox placeholder="최저가" name="min_price" />
        <Label>max_price</Label>
        <InputBox placeholder="최고가" name="max_price" />
        <Label>business_hour</Label>
        <InputBox placeholder="영업시간" name="business_hour" />
        <Label>site</Label> <InputBox placeholder="사이트" name="site" />
        <Label>best_menu</Label>
        <InputBox placeholder="대표메뉴명" name="best_menu" />
        <Label>best_menu_price</Label>
        <InputBox placeholder="대표메뉴 가격" name="best_menu_price" />
        <Button
          onClick={() =>
            bucket
              .add({
                name: { name },
                addr: { addr },
                category: { category },
                parking: { parking },
                tel: { tel },
              })
              .then((docRef) => {
                console.log(docRef.id);
              })
          }
        >
          등록하기
        </Button>
        <UploadImg>
          <form onSubmit={formHandler}>
            <input type="file" className="input" />
            <button type="submit">Upload</button>
          </form>
        </UploadImg>
      </BG>
    </>
  );
}

export default Sample;
