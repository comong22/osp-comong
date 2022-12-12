import React from "react";
import styled from "styled-components";

import { GlobalFonts } from "../../fonts/font";
import DetailBottom from "./ListDetailBottom1";
import DetailTop from "./ListDetailTop1";

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

function ListDetailPage() {
  return (
    <PageContainer>
      <GlobalFonts />
      <DetailTop />
      <DetailBottom />
    </PageContainer>
  );
}

export default ListDetailPage;
