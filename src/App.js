import { Route, Routes } from "react-router-dom";
import DetailPage from "./Components/DetailPage/Pages";
import ListPage from "./Components/ListPage/ListPage";
import MainPage from "./Components/MainPage/MainPage";
import NavBar from "./Components/NavBar/NavBar";
import PostReview from "./Components/PostReviewPage/PostReview";
import UploadPage from "./Components/UploadPage/UploadPage";
import { main_data } from "./Components/MainPage/data";
import { useState } from "react";

function App() {
  let [MainData, setMainData] = useState(main_data); // data.js에 있는 데이터

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
      </Routes>
    </>
  );
}

export default App;
