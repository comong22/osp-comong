import { useState } from "react";
import { GlobalFonts } from "../../fonts/font";
import {
  ListName,
  Column1,
  Column2,
  Container,
  ListBG,
  ListBox,
  ListContents,
  ListPlace01,
  ListPlace02,
  ListPlace03,
  ListRow,
  PageRow,
} from "./ListStyle";
import { place01_data, place02_data, place03_data } from "./data";
function ListPage() {
  let [tab, setTab] = useState(0); // 0 정문, 1 후문, 2 신촌
  return (
    <>
      <GlobalFonts />
      <ListBG>
        <Container>
          <PageRow>
            <Column1>
              <ListContents>
                <ListRow>
                  <ListPlace01
                    tab={tab}
                    onClick={() => {
                      setTab(0);
                    }}
                  >
                    이대 정문
                  </ListPlace01>
                  <ListPlace02
                    tab={tab}
                    onClick={() => {
                      setTab(1);
                    }}
                  >
                    이대 후문
                  </ListPlace02>
                  <ListPlace03
                    tab={tab}
                    onClick={() => {
                      setTab(2);
                    }}
                  >
                    신촌
                  </ListPlace03>
                </ListRow>
              </ListContents>
            </Column1>
            <Column2>
              <ListBox>
                <TabContent tab={tab} />
              </ListBox>
            </Column2>
          </PageRow>
        </Container>
      </ListBG>
    </>
  );
}

function TabContent(props) {
  return (
    <div>
      {
        [
          <div>
            <Place01 />
          </div>,
          <div>
            <Place02 />
          </div>,
          <div>
            <Place03 />
          </div>,
        ][props.tab]
      }
    </div>
  );
}

function Place01() {
  let [Place01Data, setPlace01Data] = useState(place01_data); // 정문 맛집 데이터
  return (
    <>
    <ListName>이대 정문 맛집</ListName>
    </>
  );
}

function Place02() {
  let [Place02Data, setPlace02Data] = useState(place02_data); // 후문 맛집 데이터
  return (
    <>
      <ListName>이대 후문 맛집</ListName>
    </>
  );
}

function Place03() {
  let [Place03Data, setPlace03Data] = useState(place03_data); // 신촌 맛집 데이터
  return (
    <>
      <ListName>신촌 맛집</ListName>
      <div>{Place03Data[0].name}</div>
    </>
  );
}
export default ListPage;


// let [MainData, setMainData] = useState(main_data); // data.js에 있는 데이터