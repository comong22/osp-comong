import { useState } from "react";
import { GlobalFonts } from "../../fonts/font";
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
import 고삼이 from "../../images/list/고삼이.jpg";
import yellowhouse from "../../images/list/yellowhouse.jpg";
import 담산 from "../../images/list/담산.jpg";
import 대치영지 from "../../images/list/대치영지.jpg";
import 돈부리모노 from "../../images/list/돈부리모노.jpg";
import 돈천동 from "../../images/list/돈천동.jpg";
import 딸기골 from "../../images/list/딸기골.jpg";
import 란주탕슉 from "../../images/list/란주탕슉.jpg";
import 로드샌드위치 from "../../images/list/로드샌드위치.jpg";
import momigi from "../../images/list/momigi.jpg";
import 미도인 from "../../images/list/미도인.jpg";
import 소신이쏘 from "../../images/list/소신이쏘.jpg";
import 스탠바이키친 from "../../images/list/스탠바이키친.jpg";
import 스튜디오웝 from "../../images/list/스튜디오웝.jpg";
import 식탁 from "../../images/list/식탁.jpg";
import 어바웃샤브 from "../../images/list/어바웃샤브.jpg";
import 원즈오운 from "../../images/list/원즈오운.jpg";
import 유소바 from "../../images/list/유소바.jpg";
import yuyake from "../../images/list/yuyake.jpg";
import 정통집 from "../../images/list/정통집.jpg";
import 존재의이유 from "../../images/list/존재의이유.jpg";
import 파이홀 from "../../images/list/파이홀.jpg";
import 포티드 from "../../images/list/포티드.jpg";
import 하노이의아침 from "../../images/list/하노이의아침.jpg";
import heart from "../../images/list/heart.jpg";
import 한끼마끼 from "../../images/list/한끼마끼.jpg";
import 헐리우드 from "../../images/list/헐리우드.jpg";
import clock from "../../images/main/clock.svg";
import mappin from "../../images/main/mappin.svg";
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
              <HeartIMG src={heart} alt="heart" />
              <InfoText>{place01_data[0].signature_menu}</InfoText>
            </Rrow3>
          </InsideInfo>
        </Row1>
        <Row2>
        <MainIMG
          src = {momigi}
          />
        </Row2>
        <Row3>
        <MainIMG
          src = {yuyake}
          />
        </Row3>
     </InsidePage>
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