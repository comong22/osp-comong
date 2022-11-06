import { useState } from "react";
import { GlobalFonts } from "../../fonts/font";
import './ListPage.css';
import {
  ListName,
  Column1,
  Column2,
  Row1,
  Row2,
  Row3,
  Container,
  ListBG,
  ListBox,
  ListContents,
  ListPlace01,
  ListPlace02,
  ListPlace03,
  ListRow,
  PageRow,
  IMGform,
  MapPinIMG,
  ClockIMG,
  InfoText,
  MainIMG,
  InsidePage,
  InsideInfo,
  Rrow1,
  Rrow2,
  Rrow3,
  RestName,
  HeartIMG,
} from "./ListStyle";
import p3_9 from "../../images/list/p3_9.jpg";
import yellowhouse from "../../images/list/yellowhouse.jpg";
import p3_1 from "../../images/list/p3_1.jpg";
import p2_7 from "../../images/list/p2_7.jpg";
import p3_4 from "../../images/list/p3_4.jpg";
import p1_7 from "../../images/list/p1_7.jpg";
import p2_4 from "../../images/list/p2_4.jpg";
import p1_8 from "../../images/list/p1_8.jpg";
import p2_3 from "../../images/list/p2_3.jpg";
import momigi from "../../images/list/momigi.jpg";
import p3_7 from "../../images/list/p3_7.jpg";
import p3_8 from "../../images/list/p3_8.jpg";
import p2_1 from "../../images/list/p2_1.jpg";
import p2_5 from "../../images/list/p2_5.jpg";
import p2_9 from "../../images/list/p2_9.jpg";
import p1_6 from "../../images/list/p1_6.jpg";
import p1_4 from "../../images/list/p1_4.jpg";
import p1_9 from "../../images/list/p1_9.jpg";
import yuyake from "../../images/list/yuyake.jpg";
import p3_3 from "../../images/list/p3_3.jpg";
import p2_2 from "../../images/list/p2_2.jpg";
import p3_5 from "../../images/list/p3_5.jpg";
import p3_6 from "../../images/list/p3_6.jpg";
import p2_6 from "../../images/list/p2_6.jpg";
import heartt from "../../images/list/heartt.svg";
import p1_5 from "../../images/list/p1_5.jpg";
import p2_8 from "../../images/list/p2_8.jpg";
import p3_2 from "../../images/list/p3_2.jpg";
import clock from "../../images/main/clock.svg";
import mappin from "../../images/main/mappin.svg";
import line from "../../images/list/line.svg";
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
    <Container>
     <ListName>이대 정문 맛집</ListName>
     <InsidePage>
        <Row1>
        <MainIMG
          src = {yellowhouse}
          />
          <InsideInfo>
            <Rrow1>
              <RestName>{place01_data[0].name}</RestName>
            </Rrow1>
            <Rrow2>
              <MapPinIMG src={mappin} alt="mappin" />
              <InfoText>{place01_data[0].address}</InfoText>
              
              <ClockIMG src={clock} alt="clock" />
              <InfoText>{place01_data[0].business_hours}</InfoText>
            </Rrow2>
            <Rrow3>
              <HeartIMG src={heartt} alt="heart" />
              <InfoText>대표메뉴 - {place01_data[0].signature_menu}</InfoText>
            </Rrow3>
          </InsideInfo>
        </Row1>
        
        <Row2>
        <MainIMG
          src = {momigi}
          />
          <InsideInfo>
            <Rrow1>
              <RestName>{place01_data[1].name}</RestName>
            </Rrow1>
            <Rrow2>
              <MapPinIMG src={mappin} alt="mappin" />
              <InfoText>{place01_data[1].address}</InfoText>
              
              <ClockIMG src={clock} alt="clock" />
              <InfoText>{place01_data[1].business_hours}</InfoText>
            </Rrow2>
            <Rrow3>
              <HeartIMG src={heartt} alt="heart" />
              <InfoText>대표메뉴 - {place01_data[1].signature_menu}</InfoText>
            </Rrow3>
          </InsideInfo>
        </Row2>
        
        <Row3>
        <MainIMG
          src = {yuyake}
          />
          <InsideInfo>
            <Rrow1>
              <RestName>{place01_data[2].name}</RestName>
            </Rrow1>
            <Rrow2>
              <MapPinIMG src={mappin} alt="mappin" />
              <InfoText>{place01_data[2].address}</InfoText>
              
              <ClockIMG src={clock} alt="clock" />
              <InfoText>{place01_data[2].business_hours}</InfoText>
            </Rrow2>
            <Rrow3>
              <HeartIMG src={heartt} alt="heart" />
              <InfoText>대표메뉴 - {place01_data[2].signature_menu}</InfoText>
            </Rrow3>

          </InsideInfo>
        </Row3>

     </InsidePage>
     </Container>
    </>
  );
}

function Place02() {
   return (
    <>
    <Container>
      <ListName>이대 후문 맛집</ListName>
      <InsidePage>
        <Row1>
        <MainIMG
          src = {p2_1}
          />
          <InsideInfo>
            <Rrow1>
              <RestName>{place02_data[0].name}</RestName>
            </Rrow1>
            <Rrow2>
              <MapPinIMG src={mappin} alt="mappin" />
              <InfoText>{place02_data[0].address}</InfoText>
              
              <ClockIMG src={clock} alt="clock" />
              <InfoText>{place02_data[0].business_hours}</InfoText>
            </Rrow2>
            <Rrow3>
              <HeartIMG src={heartt} alt="heart" />
              <InfoText>대표메뉴 - {place02_data[0].signature_menu}</InfoText>
            </Rrow3>

          </InsideInfo>
        </Row1>
        <Row2>
        <MainIMG
          src = {p2_2}
          />
          <InsideInfo>
            <Rrow1>
              <RestName>{place02_data[1].name}</RestName>
            </Rrow1>
            <Rrow2>
              <MapPinIMG src={mappin} alt="mappin" />
              <InfoText>{place02_data[1].address}</InfoText>
              
              <ClockIMG src={clock} alt="clock" />
              <InfoText>{place02_data[1].business_hours}</InfoText>
            </Rrow2>
            <Rrow3>
              <HeartIMG src={heartt} alt="heart" />
              <InfoText>대표메뉴 - {place02_data[1].signature_menu}</InfoText>
            </Rrow3>

          </InsideInfo>
        </Row2>
        <Row3>
        <MainIMG
          src = {p2_3}
          />
          <InsideInfo>
            <Rrow1>
              <RestName>{place02_data[2].name}</RestName>
            </Rrow1>
            <Rrow2>
              <MapPinIMG src={mappin} alt="mappin" />
              <InfoText>{place02_data[2].address}</InfoText>
              <ClockIMG src={clock} alt="clock" />
              <InfoText>{place02_data[2].business_hours}</InfoText>
            </Rrow2>
            <Rrow3>
              <HeartIMG src={heartt} alt="heart" />
              <InfoText>대표메뉴 - {place02_data[2].signature_menu}</InfoText>
            </Rrow3>

          </InsideInfo>
        </Row3>
     </InsidePage>
     </Container>
    </>
  );
}

function Place03() {
  return (
    <>
    <Container>
      <ListName>신촌 맛집</ListName>
      <InsidePage>
        <Row1>
        <MainIMG
          src = {p3_1}
          />
          <InsideInfo>
            <Rrow1>
              <RestName>{place03_data[0].name}</RestName>
            </Rrow1>
            <Rrow2>
              <MapPinIMG src={mappin} alt="mappin" />
              <InfoText>{place03_data[0].address}</InfoText>
              
              <ClockIMG src={clock} alt="clock" />
              <InfoText>{place03_data[0].business_hours}</InfoText>
            </Rrow2>
            <Rrow3>
              <HeartIMG src={heartt} alt="heart" />
              <InfoText>대표메뉴 - {place03_data[0].signature_menu}</InfoText>
            </Rrow3>

          </InsideInfo>
        </Row1>
        <Row2>
        <MainIMG
          src = {p3_2}
          />
          <InsideInfo>
            <Rrow1>
              <RestName>{place03_data[1].name}</RestName>
            </Rrow1>
            <Rrow2>
              <MapPinIMG src={mappin} alt="mappin" />
              <InfoText>{place03_data[1].address}</InfoText>
              
              <ClockIMG src={clock} alt="clock" />
              <InfoText>{place03_data[1].business_hours}</InfoText>
            </Rrow2>
            <Rrow3>
              <HeartIMG src={heartt} alt="heart" />
              <InfoText>대표메뉴 - {place03_data[1].signature_menu}</InfoText>
            </Rrow3>

          </InsideInfo>
        </Row2>
        <Row3>
        <MainIMG
          src = {p3_3}
          />
          <InsideInfo>
            <Rrow1>
              <RestName>{place03_data[2].name}</RestName>
            </Rrow1>
            <Rrow2>
              <MapPinIMG src={mappin} alt="mappin" />
              <InfoText>{place03_data[2].address}</InfoText>
              
              <ClockIMG src={clock} alt="clock" />
              <InfoText>{place03_data[2].business_hours}</InfoText>
            </Rrow2>
            <Rrow3>
              <HeartIMG src={heartt} alt="heart" />
              <InfoText>대표메뉴 - {place03_data[2].signature_menu}</InfoText>
            </Rrow3>

          </InsideInfo>
        </Row3>
     </InsidePage>
     </Container>
    </>
  );
}

export default ListPage;
