import styled from "styled-components";



export const ListBG = styled.div`
  background: #fff7ef;
  width: 100vw;
<<<<<<< HEAD
  height: 200vh;
=======
  height: 100vh;
>>>>>>> f3f46feebb6812625277fa0f761c69b10861ed4a
`;

export const RestName = styled.div`
  float: left;
  margin-right: 10px;
  font-family: "Spoqa Han Sans Neo Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  /* or 114% */

  font-feature-settings: "pnum" on, "lnum" on;

  color: #000000;
`;

export const ListName = styled.div`
  margin: 2% 0 0 5%;
  font-family: "Spoqa Han Sans Neo Bold";
  font-style: normal;
  font-size: 40px;
  line-height: 170%;
  color: #ffba94;
  font-weight: 700;
`;


export const Container = styled.div`
  display: grid;
  width: 100%;
`;

export const PageRow = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  margin: 10% 2% 0 2%;
  grid-template-areas: "col1 col2 col2 col2 col2 col2 col2 col2 col2";
`;

export const Column1 = styled.div`
  grid-area: col1;
`;

export const Column2 = styled.div`
  padding: 0;
  grid-area: col2;
`;

export const InsidePage = styled.div`
  display: grid;
<<<<<<< HEAD
  margin-top: 10px;
  grid-template-rows: 0.5fr 0.5fr 0.5fr;
=======
  margin: 0 3% 0 3%;
  grid-template-rows: repeat(3, 1fr);
>>>>>>> f3f46feebb6812625277fa0f761c69b10861ed4a
  grid-template-areas: "rrow1" "rrow2" "rrow3"; 
`;

export const InsideInfo = styled.div`
  display: grid;
<<<<<<< HEAD
  margin-left: 75px;
  grid-template-rows: 2fr 2fr 3fr;
=======
  margin: 2% 0 2% 5%;
  grid-template-rows: repeat(3, 1fr);
>>>>>>> f3f46feebb6812625277fa0f761c69b10861ed4a
  grid-template-areas: "rrrow1" "rrrow2" "rrrow3"; 
`;

export const Rrow1 = styled.div`
  padding: 0;
  display: flex;
  position: relative;
  align-self: center;
  grid-area: rrrow1;
`;

export const Rrow2 = styled.div`
  padding: 0;
  display: flex;
  position: relative;
  align-self: center;
  grid-area: rrrow2;
`;

export const Rrow3 = styled.div`
  padding: 0;
  display: flex;
  position: relative;
  align-self: center;

  grid-area: rrrow3;
`;

export const Row1 = styled.div`
  padding: 0;
  display: flex;
  position: relative;
  grid-area: rrow1;
  border-bottom: 1px solid #D9D9D9;

`;

export const Row2 = styled.div`
  padding: 0;
  display: flex;
  position: relative;
  grid-area: rrow2;
  border-bottom: 1px solid #D9D9D9;

`;

export const Row3 = styled.div`
  padding: 0;
  display: flex;
  position: relative;
  grid-area: rrow3;
`;

export const ListContents = styled.div`
  z-index: 3;
  max-width: 1200px;
  flex-direction: column;
`;

export const ListRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  grid-template-areas: "row1 row1" "row2 row2" "row3 row3";
`;

export const ListPlace01 = styled.div`
  grid-area: row1;
  max-width: 100px;
  margin: 0px 0 0px 0;
  text-align: center;
  
  font-family: "Spoqa Han Sans Neo Bold";
  font-style: normal;
  font-weight: ${({ tab }) => (tab === 0 ? 700 : 600)};
  font-size: 24px;
  line-height: 150%;
  color: ${({ tab }) => (tab === 0 ? "#FFBA94" : "#464646")};
  &:hover {
    font-family: "Spoqa Han Sans Neo Bold";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    /* identical to box height, or 30px */
    color: #ffba94;
  }
`;
export const MainIMG = styled.img`
<<<<<<< HEAD
  width: 130px;
  height: 130px;
  margin: 10px 0 10px 75px;
=======
  width: 150px;
  height: 150px;
  margin: 2% 0 2% 5%;
>>>>>>> f3f46feebb6812625277fa0f761c69b10861ed4a
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
`;
export const ListPlace02 = styled.div`
  grid-area: row2;
  max-width: 100px;
  margin: 20px 0 0px 0;
  text-align: center;
  font-family: "Spoqa Han Sans Neo Bold";
  font-style: normal;
  font-weight: ${({ tab }) => (tab === 1 ? 700 : 600)};
  font-size: 24px;
  line-height: 150%;
  color: ${({ tab }) => (tab === 1 ? "#FFBA94" : "#464646")};
  &:hover {
    font-family: "Spoqa Han Sans Neo Bold";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    /* identical to box height, or 30px */
    color: #ffba94;
  }
`;

export const ListPlace03 = styled.div`
  grid-area: row3;
  max-width: 100px;
  margin: 20px 0 0px 0;
  text-align: center;
  font-family: "Spoqa Han Sans Neo Bold";
  font-style: normal;
  font-weight: ${({ tab }) => (tab === 2 ? 700 : 600)};
  font-size: 24px;
  line-height: 150%;
  color: ${({ tab }) => (tab === 2 ? "#FFBA94" : "#464646")};
  &:hover {
    font-family: "Spoqa Han Sans Neo Bold";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 150%;
    /* identical to box height, or 30px */
    color: #ffba94;
  }
`;

export const ListBox = styled.div`
<<<<<<< HEAD
  max-width: 1200px;
  height: 1000px;
=======
  max-width: 1469px;
  // height: 500px;
>>>>>>> f3f46feebb6812625277fa0f761c69b10861ed4a
  margin: 0 0 0 30px;
  background: #ffffff;
  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
`;

export const IMGform = styled.div`
  width: 100%;
  aspect-ratio: 1;
`;

export const MapPinIMG = styled.img`
  float: left;
  max-width: 22px;
<<<<<<< HEAD
  margin: 0 10px 30px 0;
=======
  margin-right: 10px;
>>>>>>> f3f46feebb6812625277fa0f761c69b10861ed4a
`;
export const ClockIMG = styled.img`
  float: left;
  max-width: 22px;
  margin-right: 10px;
`;

export const HeartIMG = styled.img`
  float: left;
<<<<<<< HEAD
  max-width: 22px;
  margin: 0 10px 60px 0;
=======
  max-width: 23px;
  margin-right: 10px;
>>>>>>> f3f46feebb6812625277fa0f761c69b10861ed4a
`;

export const InfoText = styled.div`
  max-width: 1000px;
  font-family: "Spoqa Han Sans Neo Regular";
  margin-right: 20px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* or 27px */
  color: #000000;
`;
<<<<<<< HEAD

export const LineText = styled.div`
  max-width: 1000px;
  font-family: "Spoqa Han Sans Neo Regular";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 10%;
  /* or 27px */
  color: #000000;
  margin: 0 5px 50px 5px;
`;
=======
>>>>>>> f3f46feebb6812625277fa0f761c69b10861ed4a
