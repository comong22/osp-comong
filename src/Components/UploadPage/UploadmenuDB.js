import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

const UploadmenuDB = () => {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const ref = db.collection("restaurants"); // "컬렉션명"

  function getData() {
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
      setLoader(false);
    });
  }

 useEffect(() => {
  getData()
 }, [])
  return (
    <div>
      <h1>firestore DB</h1>
      { 
        loader === false && (data.map((rest) => (
          <div key={rest.id}>
            <div>식당 이름 : {rest.name}</div>
            <div>카테고리 : {rest.cate}</div>
            <div>주차 여부 : {rest.park}</div>
            <div>주소 : {rest.addr}</div>
            <div>전화번호 : {rest.tel}</div>
            <div>최저 가격 : {rest.price1}</div>
            <div>최고 가격 : {rest.price2}</div>
            <div>영업 시간 : {rest.time}</div>
            <div>사이트 : {rest.site}</div>
            <br></br>
          </div>
          
        )))
}
    </div>
  );
};

export default UploadmenuDB;
