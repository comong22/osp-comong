import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { dbService, storageService } from "../../firebase";
import { storage } from "../../firebase";
import {
  UploadImg,
  BG,
  Label,
  InputBox,
  Button,
  SelectBox,
  Label2,
  SelectOptions,
  Option,
} from "./sampleElement";

function Sample() {
  // console에 DB에서 불러온 데이터 출력
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

  // 이미지 업로드 관련  -------------------------------------
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
      (snapshot) => {},
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
  // -----------------------------------------------------------

  // 맛집 등록 관련
  let [name, setName] = useState("");
  let [addr, setAddr] = useState("");
  let [category, setCategory] = useState("");
  let [parking, setParking] = useState("");
  let [tel, setTel] = useState("");

  // 위치별로 저장될 DB 정하기 ----------------------------------------
  const [currentValue, setCurrentValue] = useState("이대 정문"); // SelectBox 선택된 값
  const [showOptions, setShowOptions] = useState(false);
  const [place, setPlace] = useState(0); // 0 : 정문, 1 : 후문, 2 : 신촌
  let DBselect;
  // (** 짱 중요 **) 리스트에서 식당 위치 구분하려고 DB 3개 사용
  if (place == 0) 
    DBselect = "place01"; // 이대 정문 DB
  else if (place == 1) 
    DBselect = "place02"; // 이대 후문 DB
  else if (place == 2) 
    DBselect = "place03"; // 신촌 DB

  const bucket = db.collection(DBselect); // 어느 DB에 저장할지 선택
  // -----------------------------------------------------------

  return (
    <>
      <BG>
        <br />
        <div>console에서 불러온 데이터 확인!</div>
        <br />
        <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
          <Label2>{currentValue}</Label2>
          <SelectOptions show={showOptions}>
            <Option onClick={() => (setCurrentValue("이대 정문"), setPlace(0))}>
              이대 정문
            </Option>
            <Option onClick={() => (setCurrentValue("이대 후문"), setPlace(1))}>
              이대 후문
            </Option>
            <Option onClick={() => (setCurrentValue("신촌"), setPlace(2))}>
              신촌
            </Option>
          </SelectOptions>
        </SelectBox>
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
        {/* 밑에는 onChange 추가 안 해서 등록 안 됩니다. 나중에 등록 페이지 구현하실 때 알아서 추가해주세요! */}
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
                name, category, parking, tel, addr
              })
              .then((docRef) => {
                console.log(docRef.id);
              })
          }
        >
          등록하기
        </Button>{" "}
        {/* 버튼 누르면 DB에 내용 저장됨 */}
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
