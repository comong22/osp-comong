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
  Line,
} from "./ListStyle";
import 고삼이 from "../../images/list/고삼이.jpg";
import yellowhouse from "../../images/list/yellowhouse.jpg";
import p3_1 from "../../images/list/p3_1.jpg";
import 대치영지 from "../../images/list/대치영지.jpg";
import 돈부리모노 from "../../images/list/돈부리모노.jpg";
import 돈천동 from "../../images/list/돈천동.jpg";
import 딸기골 from "../../images/list/딸기골.jpg";
import 란주탕슉 from "../../images/list/란주탕슉.jpg";
import p2_3 from "../../images/list/p2_3.jpg";
import momigi from "../../images/list/momigi.jpg";
import 미도인 from "../../images/list/미도인.jpg";
import 소신이쏘 from "../../images/list/소신이쏘.jpg";
import p2_1 from "../../images/list/p2_1.jpg";
import 스튜디오웝 from "../../images/list/스튜디오웝.jpg";
import 식탁 from "../../images/list/식탁.jpg";
import 어바웃샤브 from "../../images/list/어바웃샤브.jpg";
import 원즈오운 from "../../images/list/원즈오운.jpg";
import 유소바 from "../../images/list/유소바.jpg";
import yuyake from "../../images/list/yuyake.jpg";
import p3_3 from "../../images/list/p3_3.jpg";
import p2_2 from "../../images/list/p2_2.jpg";
import 파이홀 from "../../images/list/파이홀.jpg";
import 포티드 from "../../images/list/포티드.jpg";
import 하노이의아침 from "../../images/list/하노이의아침.jpg";
import heartt from "../../images/list/heartt.svg";
import 한끼마끼 from "../../images/list/한끼마끼.jpg";
import 헐리우드 from "../../images/list/헐리우드.jpg";
import p3_2 from "../../images/list/p3_2.jpg";
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
