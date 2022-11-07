import { useState } from "react";
import { GlobalFonts } from "../../fonts/font";
import Pagination from "react-js-pagination";
import "./ListPage.css";
import {
  ListName,
  Column1,
  Column2,
  Container,
  ListBG,
  ListBox,
  ContentsWrap,
  ListContents,
  ListPlace01,
  ListPlace02,
  ListPlace03,
  ListRow,
  PageRow,
  MapPinIMG,
  ClockIMG,
  MainIMG,
  HeartIMG,
  DataContainer,
  ListPageRow,
  Col1,
  Col2,
  Border,
  InfoText,
  RestName,
  PageContainer,
} from "./ListStyle";
import heartt from "../../images/list/heartt.svg";
import clock from "../../images/main/clock.svg";
import mappin from "../../images/main/mappin.svg";
import { place01_data, place02_data, place03_data } from "./data";
function ListPage() {
  let [tab, setTab] = useState(0); // 0 정문, 1 후문, 2 신촌
  return (
    <>
      <GlobalFonts />
      <ListBG>
        <PageContainer>
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
        </PageContainer>
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
  let [place01Data, setPlace01Data] = useState(place01_data); // 정문 맛집 데이터
  const [items, setItems] = useState(3);
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };
  const Place01img = [
    { id: 0, src: require("../../images/list/yellowhouse.jpg") },
    { id: 1, src: require("../../images/list/momigi.jpg") },
    { id: 2, src: require("../../images/list/yuyake.jpg") },
    { id: 3, src: require("../../images/list/p1_4.jpg") },
    { id: 4, src: require("../../images/list/p1_5.jpg") },
    { id: 5, src: require("../../images/list/p1_6.jpg") },
    { id: 6, src: require("../../images/list/p1_7.jpg") },
    { id: 7, src: require("../../images/list/p1_8.jpg") },
    { id: 8, src: require("../../images/list/p1_9.jpg") },
  ];
  return (
    <>
      <Container>
        <ListName>이대 정문 맛집</ListName>
        <ContentsWrap>
          {place01Data
            .slice(items * (page - 1), items * (page - 1) + items)
            .map((v, i) => {
              return (
                <div key={i}>
                  <DataContainer>
                    <ListPageRow>
                      <Col1>
                        <MainIMG src={Place01img[v.id].src} />
                      </Col1>
                      <Col2>
                        <RestName>{v.name}</RestName>
                        <MapPinIMG src={mappin} />
                        <InfoText>{v.address}</InfoText>
                        <ClockIMG src={clock} />
                        <InfoText>{v.business_hours}</InfoText>
                        <HeartIMG src={heartt} />
                        <InfoText>대표 메뉴 - {v.signature_menu}</InfoText>
                      </Col2>
                    </ListPageRow>
                  </DataContainer>
                  <Border />
                </div>
              );
            })}
        </ContentsWrap>
        <Pagination
          activePage={page}
          itemsCountPerPage={items}
          totalItemsCount={place01Data.length - 1}
          pageRangeDisplayed={3}
          onChange={handlePageChange}
        ></Pagination>
      </Container>
    </>
  );
}

function Place02() {
  let [place02Data, setPlace02Data] = useState(place02_data); // 정문 맛집 데이터
  const [items, setItems] = useState(3);
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };
  const Place02img = [
    { id: 0, src: require("../../images/list/p2_1.jpg") },
    { id: 1, src: require("../../images/list/p2_2.jpg") },
    { id: 2, src: require("../../images/list/p2_3.jpg") },
    { id: 3, src: require("../../images/list/p2_4.jpg") },
    { id: 4, src: require("../../images/list/p2_5.jpg") },
    { id: 5, src: require("../../images/list/p2_6.jpg") },
    { id: 6, src: require("../../images/list/p2_7.jpg") },
    { id: 7, src: require("../../images/list/p2_8.jpg") },
    { id: 8, src: require("../../images/list/p2_9.jpg") },
  ];
  return (
    <>
      <Container>
        <ListName>이대 후문 맛집</ListName>
        <ContentsWrap>
          {place02Data
            .slice(items * (page - 1), items * (page - 1) + items)
            .map((v, i) => {
              return (
                <div key={i}>
                  <DataContainer>
                    <ListPageRow>
                      <Col1>
                        <MainIMG src={Place02img[v.id].src} />
                      </Col1>
                      <Col2>
                        <RestName>{v.name}</RestName>
                        <MapPinIMG src={mappin} />
                        <InfoText>{v.address}</InfoText>
                        <ClockIMG src={clock} />
                        <InfoText>{v.business_hours}</InfoText>
                        <HeartIMG src={heartt} />
                        <InfoText>대표 메뉴 - {v.signature_menu}</InfoText>
                      </Col2>
                    </ListPageRow>
                  </DataContainer>
                  <Border />
                </div>
              );
            })}
        </ContentsWrap>
        <Pagination
          activePage={page}
          itemsCountPerPage={items}
          totalItemsCount={place02Data.length - 1}
          pageRangeDisplayed={3}
          onChange={handlePageChange}
        ></Pagination>
      </Container>
    </>
  );
}

function Place03() {
  let [place03Data, setPlace03Data] = useState(place03_data); // 정문 맛집 데이터
  const [items, setItems] = useState(3);
  const [page, setPage] = useState(1);
  const handlePageChange = (page) => {
    setPage(page);
  };
  const Place03img = [
    { id: 0, src: require("../../images/list/p3_1.jpg") },
    { id: 1, src: require("../../images/list/p3_2.jpg") },
    { id: 2, src: require("../../images/list/p3_3.jpg") },
    { id: 3, src: require("../../images/list/p3_4.jpg") },
    { id: 4, src: require("../../images/list/p3_5.jpg") },
    { id: 5, src: require("../../images/list/p3_6.jpg") },
    { id: 6, src: require("../../images/list/p3_7.jpg") },
    { id: 7, src: require("../../images/list/p3_8.jpg") },
    { id: 8, src: require("../../images/list/p3_9.jpg") },
  ];
  return (
    <>
      <Container>
        <ListName>신촌 맛집</ListName>
        <ContentsWrap>
          {place03Data
            .slice(items * (page - 1), items * (page - 1) + items)
            .map((v, i) => {
              return (
                <div key={i}>
                  <DataContainer>
                    <ListPageRow>
                      <Col1>
                        <MainIMG src={Place03img[v.id].src} />
                      </Col1>
                      <Col2>
                        <RestName>{v.name}</RestName>
                        <MapPinIMG src={mappin} />
                        <InfoText>{v.address}</InfoText>
                        <ClockIMG src={clock} />
                        <InfoText>{v.business_hours}</InfoText>
                        <HeartIMG src={heartt} />
                        <InfoText>대표 메뉴 - {v.signature_menu}</InfoText>
                      </Col2>
                    </ListPageRow>
                  </DataContainer>
                  <Border />
                </div>
              );
            })}
        </ContentsWrap>
        <Pagination
          activePage={page}
          itemsCountPerPage={items}
          totalItemsCount={place03Data.length - 1}
          pageRangeDisplayed={3}
          onChange={handlePageChange}
        ></Pagination>
      </Container>
    </>
  );
}

export default ListPage;
