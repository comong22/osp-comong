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
  import { React } from "react";

  
  const Review1 = (doc) => {

    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    const { id } = useParams(); // 유저가 URL 파라미터에 입력한 거 가져올 때 사용하는 훅
    const ref = db.collectionGroup("review01");// "컬렉션명" 일단 임의로
    const [items, setItems] = useState(3);
    const [page, setPage] = useState(1);
    const handlePageChange = (page) => {
      setPage(page);
    };

    var count = 0;
    for (let i = 0; i < data.length; i++) {
      count = i + 1;
    }
    var arr = [0];
    for (let i = 0; i < data.length; i++) {
      arr[i] = i + 1;
    }
    
     //review
     function getData() {
      ref
      .onSnapshot((querySnapshot) => {
        const items = [];
        querySnapshot.forEach((doc) => {
          items.push(doc.data());
        });
        setData(items);
        setLoader(false);
      });
    }
  
    useEffect(() => {
      getData();
      console.log(data);
    }, []);
  
  
    //이미지
  
    return (
      <div>
        <Container1>
          {loader === false && data.slice(items * (page - 1), items * (page - 1) + items).map((rest) => (
                <div key={rest.name}>
                  <ReviewCol>
                    <RvRow1>
                      <div>
                        <img src={rest.url} className="reviewimg" id="img" />
                      </div>
                      <div className="enter" />
                    </RvRow1>
                    <RvRow2>
                      <FeatherIMG src={feather} alt="feather" />
                      <div className="NickName">{rest.text1}</div>
                      <div className="star">평점 #{rest.star}</div>
                      <div className="enter" />
                    </RvRow2>
                    <RvRow3>
                      <div className="ReviewM">메뉴: {rest.text3}</div>
                      <div className="ReviewC">{rest.content}</div>
                      <div className="enter" />
                    </RvRow3>
                  </ReviewCol>
                </div>
              ))}
          <Pagination
            activePage={page}
            itemsCountPerPage={3}
            totalItemsCount={count}
            pageRangeDisplayed={4}
            prevPageText="‹"
            nextPageText="›"
            onChange={handlePageChange}
          />
        </Container1>
      </div>
    );
  };
  
  export default Review1;