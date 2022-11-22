import React from "react";
import { useState } from "react";
import styled from "styled-components";

import { GlobalFonts } from "../../fonts/font";
import { main_data } from "../MainPage/data";
import DetailBottom from "./ListDetailBottom2";
import DetailTop from "./ListDetailTop2";

const PageContainer = styled.div`
  scroll-snap-typimport React from "react";
  e: y mandatory;
  overflow-y: visible;
  overflow-y: scroll;
  height: 100vh;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
  }
`;

function ListDetailPage(){
    let [MainData, setMainData] = useState(main_data);
    return(
        <PageContainer>
            <GlobalFonts/>
            <DetailTop MainData={MainData}/>
            <DetailBottom MainData={MainData}/>
        </PageContainer>
    )
}

export default ListDetailPage;
