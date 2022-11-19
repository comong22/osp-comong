import { Route, Routes } from "react-router-dom";
import DetailPage from "./Components/DetailPage/Pages";
import ListPage from "./Components/ListPage/ListPage";
import MainPage from "./Components/MainPage/MainPage";
import NavBar from "./Components/NavBar/NavBar";
import PostReview from "./Components/PostReviewPage/PostReview";
import UploadPage from "./Components/UploadPage/UploadPage";
import { main_data } from "./Components/MainPage/data";
import { useEffect, useState } from "react";
import Sample from "./Components/FireBase/sample";
import { db } from './firebase';

function App() {
  let [MainData, setMainData] = useState(main_data); // data.js에 있는 데이터

  useEffect(()=> {
    const restaurant = db.collection("restaurant");

    restaurant.get().then((docs) => {
      docs.forEach((doc) => {
        if(doc.exists){
          console.log(doc.data());
          console.log(doc.id);
        }
      });
    });

  });

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/review" element={<PostReview />} />
        <Route
          path="/detail/:id"
          element={<DetailPage MainData={MainData} />}
        />
        <Route path="/sample" element={<Sample/>} />
      </Routes>
    </>
  );
}

export default App;
