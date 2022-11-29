import { Route, Routes } from "react-router-dom";
import DetailPage from "./Components/DetailPage/Pages";
import ListDetailPage1 from "./Components/ListDetailPage/Pages1";
import ListDetailPage2 from "./Components/ListDetailPage/Pages2";
import ListDetailPage3 from "./Components/ListDetailPage/Pages3";
import ListPage from "./Components/ListPage/ListPage";
import MainPage from "./Components/MainPage/MainPage";
import NavBar from "./Components/NavBar/NavBar";
import PostReview from "./Components/PostReviewPage/PostReview";
import UploadPage from "./Components/UploadPage/UploadPage";
import { main_data } from "./Components/MainPage/data";
import { useState } from "react";
import GetImg from "./Components/GetImg/FirebaseImg";
import UploadmenuDB from "./Components/UploadPage/UploadmenuDB";
import { GlobalFonts } from "./fonts/font";

function App() {
  let [MainData, setMainData] = useState(main_data); // data.js에 있는 데이터
  return (
    <>
      <GlobalFonts />
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
        <Route
          path="/listdetail01/:id"
          element={<ListDetailPage1 MainData={MainData} />}
        />
        <Route
          path="/listdetail02/:id"
          element={<ListDetailPage2 MainData={MainData} />}
        />
        <Route
          path="/listdetail03/:id"
          element={<ListDetailPage3 MainData={MainData} />}
        />
        <Route path="/db" element={<UploadmenuDB />} />
        <Route path="/img" element={<GetImg />} />
      </Routes>
    </>
  );
}

export default App;
