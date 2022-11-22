import React, { useEffect, useState } from "react";
import { db } from "../../firebase";

const FirebaseDB = () => {
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
            <div>카테고리 : {rest.category}</div>
            <div>주소 : {rest.addr}</div>
            <div>전화번호 : {rest.tel}</div>
            <div>주차 여부 : {rest.parking}</div>
            <br></br>
          </div>
          
        )))
}
    </div>
  );
};

export default FirebaseDB;
