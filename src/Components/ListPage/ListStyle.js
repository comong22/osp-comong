import styled from "styled-components";

export const ListBG = styled.div`
  background: #fff7ef;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  display: grid;
  width: 90%;
  margin: 0 5% 0 5%;
`;

export const PageRow = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  margin-top: 10%;
  grid-template-areas: "col1 col2 col2 col2 col2 col2 col2 col2 col2 col2";

`;

export const Column1 = styled.div`
  grid-area: col1;
`;

export const Column2 = styled.div`
  padding: 0;
  grid-area: col2;
`;

export const ListContents = styled.div`
  z-index: 3;
  max-width: 1200px;

  flex-direction: column;
`;

export const ListRow = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "row1 row1 row1" "row2 row2 row2" "row3 row3 row3";

`;

export const ListPlace01 = styled.div`
  grid-area: row1;
  max-width: 100px;
  margin: 10px 0 0px 50px;
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

    color: #FFBA94;
  }
`;

export const ListPlace02 = styled.div`
  grid-area: row2;
  max-width: 100px;
  margin: 20px 0 0px 50px;
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

    color: #FFBA94;
  }
`;
export const ListPlace03 = styled.div`
  grid-area: row3;
  max-width: 100px;
  margin: 20px 0 0px 50px;
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

    color: #FFBA94;
  }
`;

export const ListBox = styled.div`
  max-width: 1469px;
  height: 800px;
  margin: 0 0 0 50px;
  background: #FFFFFF;
  box-shadow: 0px 4px 22px rgba(0, 0, 0, 0.25);
  border-radius: 25px;

`;
