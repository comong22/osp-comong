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



