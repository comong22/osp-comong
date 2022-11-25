import './UploadPage.css';
import Add from '../../images/add.svg';
import React, { useEffect, useState, useRef } from 'react';
import { db } from "../../firebase";
import { dbService, storageService } from "../../firebase";
import { storage } from "../../firebase";
import ModalBasic from './Modal.js';
import { BsPlusSquare } from "react-icons/bs";
import firebaseApp from "../../firebase"
import {
    UploadImg,
    Button,
    SelectBox,
    SelectOptions,
    Label2,
    Option
} from "./Element";

function UploadPage() {

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
                setPreview2(reader2.result)
            };
            reader2.readAsDataURL(imageUrl2);
        } else {
            setPreview2(null);
        }
    }, [imageUrl2]);    
    // -----------------------------------------------------------

    // 맛집 등록 관련
    let [name, setName] = useState("");
    let [cate, setCate] = useState("");
    let [park, setPark] = useState("");
    let [addr, setAddr] = useState("");
    let [tel, setTel] = useState("");
    let [price1, setPrice1] = useState("");
    let [price2, setPrice2] = useState("");
    let [time, setTime] = useState("");
    let [site, setSite] = useState("");

    //대표메뉴 등록 관련
    let [bestmenuname, setBestmenuname] = useState("");
    let [bestmenuprice, setBestmenuprice] = useState("");


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


    const [modal, setModal] = useState(false);
    const showModal = () => {
        setModal(true);
    };
    return (
        <div className='uploadBG'>
            <div className='item'>
                <div className="Box">
                    {preview ? (<img src={preview} onClick={() => { setImageUrl(null); }} />
                    ) : (
                        <BsPlusSquare size={40} onClick={(event) => { event.preventDefault(); ImgInput.current.click(); }} className="File" />
                    )}
                    <input ref={ImgInput} type='file' accept="image/*" className="fileSize"
                        onChange={(event) => {
                            const file = ImgInput.current.files[0];
                            if (file) {
                                setImageUrl(file)
                            }
                            else {
                                setImageUrl(null);
                            }
                        }} style={{ display: "none" }} />
                </div>
                <div className='title'>대표사진</div>
            </div>
            <div className='item'>
                <div>
                    <span style={{ marginRight: "30px" }}>
                        <span className='text'>식당이름</span>
                        <input name="name" className="inputText" style={{ textAlign: 'center' }} type='text' size="35" onChange={(e) => { setName(e.target.value) }}></input>
                    </span>
                    <span style={{ marginRight: "40px" }}>
                        <span className='text'>카테고리</span>
                        <input className="inputText" style={{ textAlign: 'center' }} type='text' name="cate" onChange={(e) => { setCate(e.target.value) }} placeholder="일식" ></input>
                    </span>
                    <span>
                        <span className='text'>주차여부</span>
                        <input className="inputText" style={{ textAlign: 'center' }} type='text' size="6" placeholder="Y" name="park" onChange={(e) => { setPark(e.target.value) }}></input>
                    </span>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <span style={{ float: 'left', color: 'rgb(125, 125, 125)', fontWeight: 'bold', fontFamily: 'Spoqa Han Sans Neo', marginTop: '10px', marginLeft: '94px' }}>식당 위치</span>
                    <SelectBox onClick={() => setShowOptions((prev) => !prev)}>
                        <Label2>{currentValue}</Label2>
                        <SelectOptions show={showOptions}>
                            <Option onClick={() => (setCurrentValue("이대 정문"), setPlace(0))}>
                                <span className='selecttext'>이대 정문</span>
                            </Option>
                            <Option onClick={() => (setCurrentValue("이대 후문"), setPlace(1))}>
                                <span className='selecttext'>이대 후문</span>
                            </Option>
                            <Option onClick={() => (setCurrentValue("신촌"), setPlace(2))}>
                                <span className='selecttext'>신촌</span>
                            </Option>
                        </SelectOptions>
                    </SelectBox>
                    <span style={{ marginTop: '10px' }} >
                        <span className='text'>주소</span>
                        <input className="inputText" type='text' name="addr" onChange={(e) => { setAddr(e.target.value) }} size='59' placeholder="정확한 주소를 입력해주세요!" ></input>
                    </span>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <span style={{ marginRight: "40px" }}>
                        <span className='text'>전화번호</span>
                        <input className="inputText" type='text' size='33' placeholder="010-1234-5678" style={{ textAlign: 'center' }} name="tel" onChange={(e) => { setTel(e.target.value) }}></input>
                    </span>

                    <span>
                        <span className='text'>가격대</span>
                        <input style={{ textAlign: 'center' }} className="inputText" type='text' size='15px' placeholder="최저가" name="price1" onChange={(e) => { setPrice1(e.target.value) }}></input>
                    </span>
                    <span>
                        <span className='text'>~</span>
                        <input style={{ textAlign: 'center' }} className="inputText" type='text' size='15px' placeholder="최고가" name="price2" onChange={(e) => { setPrice2(e.target.value) }}></input>
                    </span>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <span style={{ marginRight: "40px" }}>
                        <span className='text'>영업시간</span>
                        <input className="inputText" type='text' size='30' placeholder="09:00~21:00" style={{ textAlign: 'center' }} name="time" onChange={(e) => { setTime(e.target.value) }}></input>
                    </span>
                    <span>
                        <span className='text'>사이트</span>
                        <input className="inputText" type='text' size='50' placeholder="인스타그램, 대표사이트" style={{ textAlign: 'center' }} name="site" onChange={(e) => { setSite(e.target.value) }}></input>
                    </span>
                </div>

                <div className='HR'>
                    <div ><hr className='hr1'></hr></div>
                    <div className='title' > 대표메뉴 등록하기</div>
                    <div ><hr className='hr2'></hr></div>
                </div>

                <div className='addMenu' style={{ justifyContent: "center" }}>
                    <div className='it1'>
                        <div className="bottomBox">
                            {preview2 ? (<img src={preview2} onClick={() => { setImageUrl2(null); }} />
                            ) : (
                                <BsPlusSquare size={5} onClick={(event) => { event.preventDefault(); ImgInput2.current.click(); }} className="File" />
                            )}
                            <input ref={ImgInput2} type='file' accept="image/*" className="fileSize"
                                onChange={(event) => {
                                    const file2 = ImgInput2.current.files[0];
                                    if (file2) {
                                        setImageUrl2(file2)
                                    }
                                    else {
                                        setImageUrl2(null);
                                    }
                                }} style={{ display: "none" }} />
                        </div>
                    </div>
                    <div>
                        <span>
                            <div><br /><br /></div>
                            <span className='text'>메뉴명</span>
                            <input className="inputText" type='text' name="bestmenuname" onChange={(e) => { setBestmenuname(e.target.value) }}></input>
                        </span>
                    </div>
                    <div>
                        <span>
                            <span className='text'>가격</span>
                            <input className="inputText" type='text' name="bestmenuprice" onChange={(e) => { setBestmenuprice(e.target.value) }}></input>
                        </span>
                    </div>
                    <div className='it4'>
                        <Button onClick={() =>
                            bucket
                                .add({
                                    name, cate, park, addr, tel, price1, price2, time, site, bestmenuname, bestmenuprice
                                })
                                .then((docRef) => {
                                    console.log(docRef.id)
                                })
                        }
                        >등록하기
                        </Button>
                        {modal && <ModalBasic setModal={setModal} />}
                    </div>
                </div>
            </div>
        </div>

    );
}
export default UploadPage;

