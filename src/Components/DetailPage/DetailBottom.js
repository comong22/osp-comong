import { GlobalFonts } from "../../fonts/font";
import styled from "styled-components";

import "./DetailPage.css";

const BottomContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  z-index: 3;
  scroll-snap-align: start;
`;

function DetailBottom() {
  return (
    <>
      <GlobalFonts />
      <BottomContainer>
        <div className="detailBG">
          <div className="bottomBox">
            <div>sample</div>
          </div>
        </div>
      </BottomContainer>
    </>
  );
}

export default DetailBottom;
