import styled from "styled-components";

export const BestmenuTab = styled.div`
  font-family: "Spoqa Han Sans Neo Bold";
  font-style: normal;
  font-size: 28px;
  color: ${({ tab }) => (tab === 0 ? "#FFBA94" : "#464646")};
  padding-bottom: 5px;
  border-bottom: ${({ tab }) => (tab === 0 ? "1px solid #FFBA94" : "0")};
`;

export const ReviewTab = styled.div`
  font-family: "Spoqa Han Sans Neo Bold";
  font-style: normal;
  font-size: 28px;
  color: ${({ tab }) => (tab === 1 ? "#FFBA94" : "#464646")};
  padding-bottom: 5px;
  border-bottom: ${({ tab }) => (tab === 1 ? "1px solid #FFBA94" : "0")};
`;

export const Container = styled.div`
  display: grid;
  width: 95%;
  height: 10%;
  margin: 3% 5% 0 5%;
`;

export const BottomBox = styled.div`
  max-width: 1500px;
  margin: 0;
  background: #ffffff;
  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
`;

export const ContentArea = styled.div`
  margin: 10px 0 30px 0;
`;
export const TabCol = styled.div`
  display: grid;
  margin: 20px 3% 0 3%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas: "row1 row2";
`;

export const TabRow1 = styled.div`
  grid-area: row1;
  text-align: center;
`;

export const TabRow2 = styled.div`
  grid-area: row2;
  text-align: center;
`;

export const InfoCol = styled.div`
  display: grid;
  grid-template-rows: 80px 180px 180px;
  grid-template-columns :repeat(2, 1fr);
  grid-template-areas: "row1 row2" "row3 row4" "row5 row6";
`;
export const Row1 = styled.div`
  align-self: center;
  grid-area: row1;
`;

export const Row2 = styled.div`
  grid-area: row3;
  align-self: center;
`;

export const Row3 = styled.div`
  margin-top: 24px;
  grid-area: row4;
`;

export const Row4 = styled.div`
  grid-area: row2;
  align-self: center;
`;

export const Row5 = styled.div`
  grid-area: row5;
  align-self: center;
`;

export const Row6 = styled.div`
  grid-area: row6;
  align-self: center;
`;


export const DetailName = styled.div`
  float: left;
  margin-right: 10px;
  font-family: "Spoqa Han Sans Neo Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 23px;
  line-height: 32px;
  /* or 114% */

  font-feature-settings: "pnum" on, "lnum" on;

  color: #424242;
  padding-left : 80px;
  padding-bottom : 20px;

`;

export const Category = styled.div`
  margin-top: 5px;
  font-family: "Spoqa Han Sans Neo Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  padding-bottom : 20px;
  /* or 24px */
  color: #000000;
`;
export const MapPinIMG = styled.img`
  float: left;
  max-width: 22px;
  margin-right: 10px;
  padding-left:82px;
`;

export const ClockIMG = styled.img`
  float: left;
  max-width: 22px;
  margin-right: 10px;
`;

export const ParkingIMG = styled.img`
  float: left;
  max-width: 22px;
  margin-right: 10px;
`;

export const PhoneIMG = styled.img`
  float: left;
  ax-width: 13px;
  margin-right: 10px;
  padding-left : 80px;
`;

export const MenuIMG = styled.img`
  float: left;
  ax-width: 17px;
  margin-right: 10px;
  padding-left : 80px;
`;

export const StarIMG = styled.img`
  float: left;
  max-width: 22px;
  margin-right: 10px;
  padding-left : 80px;
`;

export const Star = styled.div`
  max-width: 1000px;
  font-family: "Spoqa Han Sans Neo Regular";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  padding-bottom : 20px;
  /* or 27px */

  color: #424242;
`;


export const Address = styled.div`
  max-width: 1000px;
  font-family: "Spoqa Han Sans Neo Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  padding-left : 113px;
  /* or 27px */

  color: #424242;
`;

export const Detailaddress = styled.div`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  text-align: left;
  padding-left : 113px;
  padding-bottom : 16px;
  color: #424242;
`;

export const Tel = styled.div`
  max-width: 1000px;
  font-family: "Spoqa Han Sans Neo Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  padding-left : 113px;
  padding-bottom : 20px;
  /* or 27px */

  color: #424242;
`;

export const Menu1 = styled.div`
  max-width: 1000px;
  font-family: "Spoqa Han Sans Neo Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  padding-left : 113px;
  padding-top : 5px;
  /* or 27px */

  color: #424242;
`;

export const Menu2 = styled.div`
  max-width: 1000px;
  font-family: "Spoqa Han Sans Neo Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  padding-left : 117px;
  /* or 27px */

  color: #424242;
`;

export const Menu3 = styled.div`
  max-width: 1000px;
  font-family: "Spoqa Han Sans Neo Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  padding-left : 117px;
  /* or 27px */

  color: #424242;
`;

export const Clock = styled.div`
  max-width: 1000px;
  font-family: "Spoqa Han Sans Neo Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* or 27px */

  color: #424242;
`;

export const Addhours = styled.div`
  max-width: 1000px;
  font-family: "Spoqa Han Sans Neo Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;

  padding-left : 30px;
  padding-bottom : 20px;
  /* or 27px */

  color: #424242;
`;

export const Parking = styled.div`
  max-width: 1000px;
  font-family: "Spoqa Han Sans Neo Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* or 27px */

  color: #424242;
`;