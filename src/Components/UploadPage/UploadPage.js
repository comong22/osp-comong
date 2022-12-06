import "./UploadPage.css";
import styled from "styled-components";
import React, { useEffect, useState, useRef } from "react";
import { db } from "../../firebase";
import { storage } from "../../firebase";
import { BsPlusSquare } from "react-icons/bs";
import firebaseApp from "../../firebase";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import {
  UploadImg,
  Button,
  SelectBox,
  SelectOptions,
  Label2,
  Option,
} from "./Element";

// 모달창
const OverLay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 500px;
  height: fit-content;
  border-radius: 20px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
  float: right;
  width: 30px;
  height: 30px;
  margin: 20px;
  cursor: pointer;
`;

const Contents = styled.div`
  margin: 60px;

  h1 {
    font-family: "Spoqa Han Sans Neo";
    font-size: 20px;
    font-weight: 600;
  }
  h4 {
    font-family: "Spoqa Han Sans Neo";
    font-size: 13px;
    font-weight: 500;
    margin-bottom: 60px;
  }
`;

const MButton = styled.button`
  background-color: #ffa574;
  color: white;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  font-size: 14px;
  padding: 10px 40px;
  border: none;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #fad4b2;
  }
`;

function UploadPage() {
  // 모달창
  const [isOpen, setIsOpen] = useState(false);

  function Modal({ onClose }) {
    const handleClose = () => {
      onClose?.();
    };

    const handleSubmit = () => {
      onClose?.();
      onClickButton();
      setName("");
      setCate("");
      setPark("");
      setAddr("");
      setTel("");
      setPrice1("");
      setPrice2("");
      setTime("");
      setSite("");
      setBestmenuname("");
      setBestmenuprice("");
    };

    return (
      <OverLay>
        <ModalWrap>
          <CloseButton onClick={handleClose}>
            <FaTimes size={30} />
          </CloseButton>
          <Contents>
            <h1>맛집을 등록하시겠습니까?</h1>
            <h4>업로드 후에는 수정이 불가합니다.</h4>
            <MButton onClick={handleSubmit}>맛집 등록하기</MButton>
          </Contents>
        </ModalWrap>
      </OverLay>
    );
  }

  // console에 DB에서 불러온 데이터 출력
  useEffect(() => {
    const bucket = db.collection("restaurant");
    bucket
      .doc("TlukAhFbDxaQoMth0ZMe")
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());
        }
      });
  });

  // 이미지 업로드 관련  ------------------------------------
  const [progress, setProgress] = useState(0);
  const formHandler = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    uploadeFiles(file);
  };

  const uploadeFiles = (file, file2) => {
    const uploadTask1 = storage.ref(`files/${file.name}`).put(file);
    const uploadTask2 = storage.ref(`files/${file.name}`).put(file2);

    uploadTask1.on(
      "state_changed",
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            bucket.doc(name)
              .set({
                url,
                name,
                cate,
                park,
                addr,
                tel,
                price1,
                price2,
                time,
                site,
              })
              .then((docRef) => {
                console.log(docRef.id);
              });
          });
      }
    );
    uploadTask2.on(
      "state_changed",
      (snapshot) => {},
      (error) => console.log(error),
      () => {
        storage
          .ref("files")
          .child(file2.name)
          .getDownloadURL()
          .then((url2) => {
            bucket.doc(name+bestmenuname)
              .set({
                url2,
                name,
                bestmenuname,
                bestmenuprice,
              })
              .then((docRef) => {
                console.log(docRef.id);
              });
          });
      }
    );
  };

  // 이미지 preview 함수
  const [imageUrl, setImageUrl] = useState(null);
  const ImgInput = useRef();
  const [preview, setPreview] = useState();
  useEffect(() => {
    if (imageUrl) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(imageUrl);
    } else {
      setPreview(null);
    }
  }, [imageUrl]);

  const [imageUrl2, setImageUrl2] = useState(null);
  const ImgInput2 = useRef();
  const [preview2, setPreview2] = useState();
  useEffect(() => {
    if (imageUrl2) {
      const reader2 = new FileReader();
      reader2.onloadend = () => {
        setPreview2(reader2.result);
      };
      reader2.readAsDataURL(imageUrl2);
    } else {
      setPreview2(null);
    }
  }, [imageUrl2]);
  // -----------------------------------------------------------

  // 맛집 등록 관련
  const [name, setName] = useState("");
  const [cate, setCate] = useState("");
  const [park, setPark] = useState("");
  const [addr, setAddr] = useState("");
  const [tel, setTel] = useState("");
  const [price1, setPrice1] = useState("");
  const [price2, setPrice2] = useState("");
  const [time, setTime] = useState("");
  const [site, setSite] = useState("");

  // 대표메뉴 등록 관련
  const [bestmenuname, setBestmenuname] = useState("");
  const [bestmenuprice, setBestmenuprice] = useState("");

  // 위치별로 저장될 DB 정하기 ----------------------------------------
  const [currentValue, setCurrentValue] = useState("이대 정문"); // SelectBox 선택된 값
  const [showOptions, setShowOptions] = useState(false);
  const [place, setPlace] = useState(0); // 0 : 정문, 1 : 후문, 2 : 신촌
  let DBselect;

  if (place == 0) DBselect = "place01"; // 이대 정문 DB
  else if (place == 1) DBselect = "place02"; // 이대 후문 DB
  else if (place == 2) DBselect = "place03"; // 신촌 DB
  const bucket = db.collection(DBselect); // 어느 DB에 저장할지 선택
  // -----------------------------------------------------------

  // 중복 식당 검사 ------
  const [data, setData] = useState([]);

  const ref = db.collection(DBselect);
  function getData() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
    });
  }

  useEffect(() => {
    getData();
  }, [DBselect]);

  const closeModal = () => {
    setIsOpen(false);
  };

  function duplicateCheck() {
    for (var i = 0; i < data.length; i++) {
      if (name == data[i].name) {
        alert("이미 등록된 식당입니다.");
        closeModal();
      }
    }
  }

  // 맛집 등록 후 페이지 전환------------------------------------
  const navigate = useNavigate();
  const navigateToMain = () => {
    navigate("/");
  };

  // 입력 안된 항목 색 바꾸기--------------------------------------
  var require1 = document.getElementById("name");
  var require2 = document.getElementById("cate");
  var require3 = document.getElementById("park");
  var require4 = document.getElementById("addr");
  var require5 = document.getElementById("tel");
  var require6 = document.getElementById("price1");
  var require7 = document.getElementById("price2");
  var require8 = document.getElementById("time");
  var require9 = document.getElementById("site");
  var require10 = document.getElementById("bestmenuname");
  var require11 = document.getElementById("bestmenuprice");

  var change1 = document.getElementById("Ttext1");
  var change2 = document.getElementById("Ttext2");
  var change3 = document.getElementById("Ttext3");
  var change4 = document.getElementById("Ttext4");
  var change5 = document.getElementById("Ttext5");
  var change6 = document.getElementById("Ttext6");
  var change7 = document.getElementById("Ttext7");
  var change8 = document.getElementById("Ttext8");
  var change9 = document.getElementById("Ttext9");
  var change10 = document.getElementById("Ttext10");
  var change11 = document.getElementById("Ttext11");

  const onClickBtn = () => {
    change1.style.color = "rgb(125, 125, 125)";
    change2.style.color = "rgb(125, 125, 125)";
    change3.style.color = "rgb(125, 125, 125)";
    change4.style.color = "rgb(125, 125, 125)";
    change5.style.color = "rgb(125, 125, 125)";
    change6.style.color = "rgb(125, 125, 125)";
    change7.style.color = "rgb(125, 125, 125)";
    change8.style.color = "rgb(125, 125, 125)";
    change9.style.color = "rgb(125, 125, 125)";
    change10.style.color = "rgb(125, 125, 125)";
    change11.style.color = "rgb(125, 125, 125)";
    if (
      require1.value !== "" &&
      require2.value !== "" &&
      require3.value !== "" &&
      require4.value !== "" &&
      require5.value !== "" &&
      require6.value !== "" &&
      require7.value !== "" &&
      require8.value !== "" &&
      require9.value !== "" &&
      require10.value !== "" &&
      require11.value !== ""
    ) {
      setIsOpen(true);
      change1.style.color = "rgb(125, 125, 125)";
      change2.style.color = "rgb(125, 125, 125)";
      change3.style.color = "rgb(125, 125, 125)";
      change4.style.color = "rgb(125, 125, 125)";
      change5.style.color = "rgb(125, 125, 125)";
      change6.style.color = "rgb(125, 125, 125)";
      change7.style.color = "rgb(125, 125, 125)";
      change8.style.color = "rgb(125, 125, 125)";
      change9.style.color = "rgb(125, 125, 125)";
      change10.style.color = "rgb(125, 125, 125)";
      change11.style.color = "rgb(125, 125, 125)";
    }
    if (require1.value === "") {
      change1.style.color = "#ffa574";
    }
    if (require2.value === "") {
      change2.style.color = "#ffa574";
    }
    if (require3.value === "") {
      change3.style.color = "#ffa574";
    }
    if (require4.value === "") {
      change4.style.color = "#ffa574";
    }
    if (require5.value === "") {
      change5.style.color = "#ffa574";
    }
    if (require6.value === "") {
      change6.style.color = "#ffa574";
    }
    if (require7.value === "") {
      change7.style.color = "#ffa574";
    }
    if (require8.value === "") {
      change8.style.color = "#ffa574";
    }
    if (require9.value === "") {
      change1.style.color = "#ffa574";
    }
    if (require10.value === "") {
      change10.style.color = "#ffa574";
    }
    if (require11.value === "") {
      change11.style.color = "#ffa574";
    }
  };
  //---------------------------------------------
  const onClickButton = () => {
    uploadeFiles(ImgInput.current.files[0], ImgInput2.current.files[0]);
  };

  return (
    <div className="uploadBG">
      <div className="item">
        <div className="Box">
          <form onSubmit={formHandler}>
            {preview ? (
              <img style={{transform: 'translate(50, 50)' ,width: '100%', height: '100%', objectFit: 'cover',width: '450px',height: '450px'}}
                src={preview}
                onClick={() => {
                  setImageUrl(null);
                }}
              />
            ) : (
              <BsPlusSquare
                size={40}
                onClick={(event) => {
                  event.preventDefault();
                  ImgInput.current.click();
                }}
                className="File"
              />
            )}

            <input
              ref={ImgInput}
              type="file"
              accept="image/*"
              className="fileSize"
              onChange={(event) => {
                const file = ImgInput.current.files[0];
                if (file) {
                  setImageUrl(file);
                } else {
                  setImageUrl(null);
                }
              }}
              style={{ display: "none" }}
            />
          </form>
        </div>
        <div className="title">대표사진</div>
      </div>
      <div className="item">
        <div>
          <span style={{ marginRight: "30px" }}>
            <span className="text" id="Ttext1">
              식당이름
            </span>
            <input
              name="name"
              id="name"
              className="inputText"
              style={{ textAlign: "center" }}
              type="text"
              size="35"
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>
          </span>
          <span style={{ marginRight: "40px" }}>
            <span className="text" id="Ttext2">
              카테고리
            </span>
            <input
              className="inputText"
              style={{ textAlign: "center" }}
              type="text"
              name="cate"
              id="cate"
              onChange={(e) => {
                setCate(e.target.value);
              }}
              placeholder="일식"
            ></input>
          </span>
          <span>
            <span className="text" id="Ttext3">
              주차여부
            </span>
            <input
              className="inputText"
              style={{ textAlign: "center" }}
              type="text"
              size="6"
              placeholder="Y"
              name="park"
              id="park"
              onChange={(e) => {
                setPark(e.target.value);
              }}
            ></input>
          </span>
        </div>
        <div style={{ marginTop: "20px" }}>
          <span
            style={{
              float: "left",
              color: "rgb(125, 125, 125)",
              fontWeight: "bold",
              fontFamily: "Spoqa Han Sans Neo",
              marginTop: "10px",
              marginLeft: "94px",
            }}
          >
            식당 위치
          </span>
          <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
            <Label2>{currentValue}</Label2>
            <SelectOptions show={showOptions}>
              <Option
                onClick={() => (setCurrentValue("이대 정문"), setPlace(0))}
              >
                <span className="selecttext">이대 정문</span>
              </Option>
              <Option
                onClick={() => (setCurrentValue("이대 후문"), setPlace(1))}
              >
                <span className="selecttext">이대 후문</span>
              </Option>
              <Option onClick={() => (setCurrentValue("신촌"), setPlace(2))}>
                <span className="selecttext">신촌</span>
              </Option>
            </SelectOptions>
          </SelectBox>
          <span style={{ marginTop: "10px" }}>
            <span className="text" id="Ttext4">
              주소
            </span>
            <input
              className="inputText"
              type="text"
              name="addr"
              id="addr"
              onChange={(e) => {
                setAddr(e.target.value);
              }}
              size="59"
              placeholder="정확한 주소를 입력해주세요!"
            ></input>
          </span>
        </div>
        <div style={{ marginTop: "20px" }}>
          <span style={{ marginRight: "40px" }}>
            <span className="text" id="Ttext5">
              전화번호
            </span>
            <input
              className="inputText"
              type="text"
              size="33"
              placeholder="010-1234-5678"
              style={{ textAlign: "center" }}
              name="tel"
              id="tel"
              onChange={(e) => {
                setTel(e.target.value);
              }}
            ></input>
          </span>

          <span>
            <span className="text" id="Ttext6">
              가격대
            </span>
            <input
              style={{ textAlign: "center" }}
              className="inputText"
              type="text"
              size="15px"
              placeholder="최저가"
              name="price1"
              id="price1"
              onChange={(e) => {
                setPrice1(e.target.value);
              }}
            ></input>
          </span>
          <span>
            <span className="text" id="Ttext7">
              ~
            </span>
            <input
              style={{ textAlign: "center" }}
              className="inputText"
              type="text"
              size="15px"
              placeholder="최고가"
              name="price2"
              id="price2"
              onChange={(e) => {
                setPrice2(e.target.value);
              }}
            ></input>
          </span>
        </div>
        <div style={{ marginTop: "20px" }}>
          <span style={{ marginRight: "40px" }}>
            <span className="text" id="Ttext8">
              영업시간
            </span>
            <input
              className="inputText"
              type="text"
              size="30"
              placeholder="09:00~21:00"
              style={{ textAlign: "center" }}
              name="time"
              id="time"
              onChange={(e) => {
                setTime(e.target.value);
              }}
            ></input>
          </span>
          <span>
            <span className="text" id="Ttext9">
              사이트
            </span>
            <input
              className="inputText"
              type="text"
              size="50"
              placeholder="인스타그램, 대표사이트"
              style={{ textAlign: "center" }}
              name="site"
              id="site"
              onChange={(e) => {
                setSite(e.target.value);
              }}
            ></input>
          </span>
        </div>

        <div className="HR">
          <div>
            <hr className="hr1"></hr>
          </div>
          <div className="title"> 대표메뉴 등록하기</div>
          <div>
            <hr className="hr2"></hr>
          </div>
        </div>

        <div className="addMenu" style={{ justifyContent: "center" }}>
          <div className="it1">
            <div className="bottomBox">
              <form onSubmit={formHandler}>
                {preview2 ? (
                  <img style={{transform: 'translate(50, 50)' ,width: '100%',height: '100%', objectFit: 'cover',width: '150px',height: '150px'}}
                    src={preview2}
                    onClick={() => {
                      setImageUrl2(null);
                    }}
                  />
                ) : (
                  <BsPlusSquare
                    style={{marginLeft:'-12px'}}
                    size={5}
                    onClick={(event) => {
                      event.preventDefault();
                      ImgInput2.current.click();
                    }}
                    className="File"
                  />
                )}
                <input
                  ref={ImgInput2}
                  type="file"
                  accept="image/*"
                  className="fileSize"
                  onChange={(event) => {
                    const file2 = ImgInput2.current.files[0];
                    if (file2) {
                      setImageUrl2(file2);
                    } else {
                      setImageUrl2(null);
                    }
                  }}
                  style={{ display: "none" }}
                />
              </form>
            </div>
          </div>
          <div>
            <span>
              <div>
                <br />
                <br />
              </div>
              <span className="text" id="Ttext10">
                메뉴명
              </span>
              <input
                className="inputText"
                type="text"
                name="bestmenuname"
                id="bestmenuname"
                onChange={(e) => {
                  setBestmenuname(e.target.value);
                }}
              ></input>
            </span>
          </div>
          <div>
            <span>
              <span className="text" id="Ttext11">
                가격
              </span>
              <input
                className="inputText"
                type="text"
                name="bestmenuprice"
                id="bestmenuprice"
                onChange={(e) => {
                  setBestmenuprice(e.target.value);
                }}
              ></input>
            </span>
          </div>
          <div className="it4">
            <Button
              type="submit"
              onClick={() => {
                return onClickBtn(), duplicateCheck();
              }}
            >
              등록하기
            </Button>
            {isOpen && (
              <Modal
                open={isOpen}
                onClose={() => {
                  setIsOpen(false);
                  navigateToMain();
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default UploadPage;
