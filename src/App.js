import { Route, Routes } from "react-router-dom";
import DetailPage from "./Components/DetailPage/Pages";

import ListPage from "./Components/ListPage/ListPage";
import MainPage from "./Components/MainPage/MainPage";
import NavBar from "./Components/NavBar/NavBar";
import PostReview from "./Components/PostReviewPage/PostReview";
import UploadPage from "./Components/UploadPage/UploadPage";
import { main_data } from "./Components/MainPage/data";
import { useState } from "react";
import Sample from "./Components/FireBase/sample";

import FirebaseDB from "./Components/FireBase/FirebaseDB";
import SignUp from "./Components/NavBar/Signup";

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
        <Route path="/signup" element={<SignUp/>}/>
        {/* sample, db는 나중에 지워야 함! */}
        <Route path="/sample" element={<Sample/>} />
        <Route path="/db" element={<FirebaseDB/>}/>
      </Routes>
    </>
  );
}

export default App;
