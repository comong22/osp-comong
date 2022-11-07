import styled from "styled-components";

export const MainBG = styled.div`
  background: white;
  width: 100vw;
  height: 200vh;
`;

export const Banner = styled.div`
  position: relative;
  background: #fff7ef;
  width: 100vw;
  height: 35vh;
`;

export const BannerText1 = styled.div`
  position: relative;
  font-family: "Spoqa Han Sans Neo Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 38px;
  text-align: center;

  color: #424242;

  top: 50%;
  z-index: 3;
`;

export const BannerText2 = styled.div`
  position: relative;
  font-family: "Spoqa Han Sans Neo Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 77px;
  /* identical to box height */

  text-align: center;

  color: #424242;

  top: 50%;
  z-index: 3;
`;

export const Title = styled.div`
  display: grid;
  position: relative;
  font-family: "Spoqa Han Sans Neo Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 38px;
  text-align: center;

  color: #424242;
  text-align: left;

  margin: 30px 0 30px 0;
  left: 6.5%;
`;

export const MainContainer = styled.div`
  display: grid;

  margin: 0 5% 5% 5%;
`;

export const MainRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "col1 col2 col3";

  margin-bottom: 4%;
`;

export const Column1 = styled.div`
  display: flex;
  position: relative;
  grid-area: col1;
  justify-content: center;
`;

export const Column2 = styled.div`
  display: flex;
  position: relative;
  grid-area: col2;
  justify-content: center;
`;

export const Column3 = styled.div`
  display: flex;
  position: relative;
  grid-area: col3;
  justify-content: center;
`;

export const IMGWrap = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const MainIMG = styled.img`
  width: 90%;

  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);
`;

export const IMGInfo = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  opacity: ${({ info }) => (info === true ? 0.9 : 1)};
  visibility: ${({ info }) => (info === true ? "visible" : "hidden")};
  top: ${({ info }) => (info === true ? "50%" : 0)};
  width: ${({ info }) => (info === true ? "90%" : 0)};
  height: ${({ info }) => (info === true ? "50%" : 0)};
  background: ${({ info }) => (info === true ? "rgba(255, 255, 255, 0.9)" : 0)};
`;

export const InfoContainer = styled.div`
  display: grid;
  width: 90%;
  margin: 5% 0 1% 0;
`;

export const InfoCol = styled.div`
  display: grid;

  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: "row1" "row2" "row3";
`;

export const Row1 = styled.div`
  align-self: center;

  grid-area: row1;
`;

export const Row2 = styled.div`
  grid-area: row2;
  align-self: center;
`;

export const Row3 = styled.div`
  grid-area: row3;
  align-self: center;
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

export const RestCategory = styled.div`
  margin-top: 5px;
  font-family: "Spoqa Han Sans Neo Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */

  color: #000000;
`;

export const MapPinIMG = styled.img`
  float: left;
  max-width: 22px;
  margin-right: 10px;
`;

export const ClockIMG = styled.img`
  float: left;
  max-width: 22px;
  margin-right: 10px;
`;

export const InfoText = styled.div`
  max-width: 1000px;
  font-family: "Spoqa Han Sans Neo Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  /* or 27px */

  color: #000000;
`;

export const Footer = styled.div`
  background: #fff7ef;
  width: 100vw;
  height: 100px;
`;

export const FooterText = styled.div`
  text-align: center;
  font-family: "Spoqa Han Sans Neo Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 100px;

  color: white;
`;
