import {
  Container1,
  ReviewCol,
  RvRow1,
  RvRow2,
  RvRow3,
  FeatherIMG,
} from "./ListDetailStyle";
import "./ReviewPage.css";
import styled from "styled-components";
import feather from "../../images/review/Feather.svg";
import { useState, useEffect } from "react";
import Pagination from "react-js-pagination";
import { db } from "../../firebase";
import { useParams} from "react-router-dom";

const Review2 = () => {
  const { id } = useParams(); // 유저가 URL 파라미터에 입력한 거 가져올 때 사용하는 훅
  const ref = db.collectionGroup("review02");// "컬렉션명"
  const [items, setItems] = useState(3);
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };

const [docId, setDocId] = useState([]);
const [loader, setLoader] = useState(true);


const bucket = db.collection("place02"); // "컬렉션명"
function getData() {
  bucket.onSnapshot((querySnapshot) => {
    const ids = [];
    querySnapshot.forEach((doc) => {
      ids.push(doc.id);
    });
    setDocId(ids);
    setLoader(false);
  });
}


// 문서 id에 맞는 리뷰데이터 가져오기
const [data, setData] = useState([]);

function getData1() {
  const bucket2 = db.collection("place02");
  bucket2
    .doc(docId[id])
    .collection("review02")
    .onSnapshot((querySnapshot) => {
      const item = [];
      querySnapshot.forEach((doc) => {
        item.push(doc.data());
      });
      setData(item);
      setLoader(false);
    });
}

  useEffect(() => {
    getData();
    getData1();
  }, [data]);


  //이미지

  return (
    <div>
      <Container1>
        {loader === false && 
        data
        .slice(items * (page - 1), items * (page - 1) + items)
        .map((v, i) => (
              <div key={i}>
                <ReviewCol>
                  <RvRow1>
                    <div>
                      <img src={v.url} className="reviewimg" id="img" />
                    </div>
                    <div className="enter" />
                  </RvRow1>
                  <RvRow2>
                    <FeatherIMG src={feather} alt="feather" />
                    <div className="NickName">{v.text1}</div>
                    <div className="star">평점 #{v.star}</div>
                    <div className="enter" />
                  </RvRow2>
                  <RvRow3>
                    <div className="ReviewM">메뉴: {v.text3}</div>
                    <div className="ReviewC">{v.content}</div>
                    <div className="enter" />
                  </RvRow3>
                </ReviewCol>
              </div>
            ))}
        <Pagination
          activePage={page}
          itemsCountPerPage={3}
          totalItemsCount={data.length}
          pageRangeDisplayed={4}
          onChange={handlePageChange}
        />
      </Container1>
    </div>
  );
};

export default Review2;