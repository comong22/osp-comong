import './UploadPage.css';
import Add from '../../images/add.svg';
import { useEffect, useState } from 'react';
import { db } from "../../firebase";
import { dbService, storageService } from "../../firebase";
import { storage } from "../../firebase";
import ModalBasic from './Modal.js';
import {
    UploadImg,
    Button,
    SelectBox,
    Label2,
    SelectOptions,
    Option,
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
            (snapshot) => { },
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


    function mouseOver(e) {
        e.currentTarget.style.backgroundColor = "#FFBA94";
    }
    function mouseOut(e) {
        e.currentTarget.style.backgroundColor = "#ffa574";
    }

    function AddBox(props) {
        return (
            <div><div style={{ height: props.size, width: props.size }} className='box'><img src={Add} alt="add"></img></div></div>
        )
    }
    function InputBox(props) {
        return (
            <span style={{ marginRight: props.margin }}>
                <span className='text'>{props.title}</span>
                <input className="inputText" type='text' size={props.size} placeholder={props.value} ></input>
            </span>
        )
    }


    function UploadPage() {
        const [modal, setModal] = useState(false);
        const showModal = () => {
            setModal(true);
        };
        return (
            <div className='uploadBG'>
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
                <div className='item'>
                    <AddBox size="400px">
                        <UploadImg>
                            <form onSubmit={formHandler}>
                                <input type="file" className="input" />
                                <button type="submit">Upload</button>
                            </form>
                        </UploadImg>
                    </AddBox>
                    <div className='title' style={{ marginLeft: "80px", marginTop: "20px" }}>대표사진</div>
                </div>
                <div className='item' >
                    <div>
                        <InputBox title="식당이름" name="name" onChange={(e) => { setName(e.target.value) }} margin="30px" size="25"></InputBox>
                        <InputBox title="카테고리" name="cate" onChange={(e) => { setCate(e.target.value) }} value="일식" margin="40px"></InputBox>
                        <InputBox title="주차여부" name="park" onChange={(e) => { setPark(e.target.value) }} value="Y" size="6"></InputBox>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <InputBox title="주소" name="addr" onChange={(e) => { setAddr(e.target.value) }} value="정확한 주소를 입력해주세요!" size='90'></InputBox>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <InputBox title="전화번호" name="tel" onChange={(e) => { setTel(e.target.value) }} value="010-1234-5678" size='35' margin="40px"></InputBox>
                        <InputBox title="가격대" name="price1" onChange={(e) => { setPrice1(e.target.value) }} value="최저가" size='15'></InputBox>
                        <InputBox title="~" name="price2" onChange={(e) => { setPrice2(e.target.value) }} value="최고가" size='15'></InputBox>
                    </div>
                    <div style={{ marginTop: '20px' }}>
                        <InputBox title="영업시간" name="time" onChange={(e) => { setTime(e.target.value) }} value="09:00~21:00" size='18' margin="40px"></InputBox>
                        <InputBox title="사이트" name="site" onChange={(e) => { setSite(e.target.value) }} value="인스타그램, 대표사이트" size='53'></InputBox>
                    </div>

                    <div className='HR'>
                        <div ><hr className='hr1'></hr></div>
                        <div className='title' > 대표메뉴 등록하기</div>
                        <div ><hr className='hr2'></hr></div>
                    </div>

                    <div className='addMenu' style={{ justifyContent: "center" }}>
                        <div className='it1'>
                            <AddBox size="150px"></AddBox>
                        </div>
                        <div>
                            <div style={{ margin: "35px" }}></div>
                            <InputBox title="메뉴명" name="bestmenuname" onChange={(e) => { setBestmenuname(e.target.value) }}></InputBox>
                        </div>
                        <div>
                            <InputBox title="가격" name="bestmenuprice" onChange={(e) => { setBestmenuprice(e.target.value) }} size="15" ></InputBox>
                        </div>
                        <div className='it4'>
                            <Button onClick={() => 
                                bucket
                                 .add({ name, cate, park, addr, tel, price1, price2, time, site, bestmenuname, bestmenuprice 
                                 })
                                 .then((docRef) => { 
                                    console.log(docRef.id)
                                  })}
                                  onMouseOver={(e) => mouseOver(e)} onMouseOut={(e) => mouseOut(e)} className='submitButton' >등록하기</Button>
                            {modal && <ModalBasic setModal={setModal} />}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default UploadPage;

