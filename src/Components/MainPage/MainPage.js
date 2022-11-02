import { GlobalFonts } from "../../fonts/font";
import { main_data } from "./data";
import {
  Banner,
  BannerText1,
  BannerText2,
  ClockIMG,
  Column1,
  Column2,
  Column3,
  Footer,
  FooterText,
  IMGInfo,
  IMGWrap,
  InfoCol,
  InfoContainer,
  InfoText,
  MainBG,
  MainContainer,
  MainIMG,
  MainRow,
  MapPinIMG,
  RestCategory,
  RestName,
  Row1,
  Row2,
  Row3,
  Title,
} from "./MainStyle";
import main0 from "../../images/main/main0.jpg";
import main1 from "../../images/main/main1.jpg";
import main2 from "../../images/main/main2.jpg";
import main3 from "../../images/main/main3.jpg";
import main4 from "../../images/main/main4.jpg";
import main5 from "../../images/main/main5.jpg";
import main6 from "../../images/main/main6.jpg";
import main7 from "../../images/main/main7.jpg";
import main8 from "../../images/main/main8.jpg";
import clock from "../../images/main/clock.svg";
import mappin from "../../images/main/mappin.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  let [info, setInfo] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  let [MainData, setMainData] = useState(main_data); // data.js에 있는 데이터

  function outMouseOver(index) {
    let newInfo = [...info];
    newInfo[index] = false;
    setInfo(newInfo);
  }
  function isMouseOver(index) {
    let newInfo = [...info];
    newInfo[index] = true;
    setInfo(newInfo);
  }
  let navigate = useNavigate(); // 페이지 이동

  return (
    <>
      <GlobalFonts />
      <MainBG>
        <Banner>
          <BannerText1>무엇을 먹을지 고민될 때는?</BannerText1>
          <BannerText2>"커몽으로 COME ON"</BannerText2>
        </Banner>
        <Title>커몽 추천 맛집</Title>
        <MainContainer>
          <MainRow>
            <Column1>
              <IMGWrap>
                <MainIMG
                  src={main0}
                  onMouseOver={() => {
                    isMouseOver(0);
                  }}
                  onClick={()=>{
                    navigate(`/detail/${MainData[0].id}`);
                  }}
                />
              </IMGWrap>
              <IMGInfo
                info={info[0]}
                onMouseOut={() => {
                  outMouseOver(0);
                }}
              >
                <InfoContainer>
                  <InfoCol>
                    <Row1>
                      <RestName>{MainData[0].name}</RestName>
                      <RestCategory>| {MainData[0].category}</RestCategory>
                    </Row1>
                    <Row2>
                      <MapPinIMG src={mappin} alt="mappin" />
                      <InfoText>{MainData[0].address}</InfoText>
                    </Row2>
                    <Row3>
                      <ClockIMG src={clock} alt="clock" />
                      <InfoText>{MainData[0].business_hours}</InfoText>
                    </Row3>
                  </InfoCol>
                </InfoContainer>
              </IMGInfo>
            </Column1>
            <Column2>
              <IMGWrap>
                <MainIMG
                  src={main1}
                  onMouseOver={() => {
                    isMouseOver(1);
                  }}
                  onClick={()=>{
                    navigate(`/detail/${MainData[1].id}`);
                  }}
                />
              </IMGWrap>
              <IMGInfo
                info={info[1]}
                onMouseOut={() => {
                  outMouseOver(1);
                }}
              >
                <InfoContainer>
                  <InfoCol>
                    <Row1>
                      <RestName>{MainData[1].name}</RestName>
                      <RestCategory>| {MainData[1].category}</RestCategory>
                    </Row1>
                    <Row2>
                      <MapPinIMG src={mappin} alt="mappin" />
                      <InfoText>{MainData[1].address}</InfoText>
                    </Row2>
                    <Row3>
                      <ClockIMG src={clock} alt="clock" />
                      <InfoText>{MainData[1].business_hours}</InfoText>
                    </Row3>
                  </InfoCol>
                </InfoContainer>
              </IMGInfo>
            </Column2>
            <Column3>
              <IMGWrap>
                <MainIMG
                  src={main2}
                  onMouseOver={() => {
                    isMouseOver(2);
                  }}
                  onClick={()=>{
                    navigate(`/detail/${MainData[2].id}`);
                  }}
                />
              </IMGWrap>
              <IMGInfo
                info={info[2]}
                onMouseOut={() => {
                  outMouseOver(2);
                }}
              >
                <InfoContainer>
                  <InfoCol>
                    <Row1>
                      <RestName>{MainData[2].name}</RestName>
                      <RestCategory>| {MainData[2].category}</RestCategory>
                    </Row1>
                    <Row2>
                      <MapPinIMG src={mappin} alt="mappin" />
                      <InfoText>{MainData[2].address}</InfoText>
                    </Row2>
                    <Row3>
                      <ClockIMG src={clock} alt="clock" />
                      <InfoText>{MainData[2].business_hours}</InfoText>
                    </Row3>
                  </InfoCol>
                </InfoContainer>
              </IMGInfo>
            </Column3>
          </MainRow>
          <MainRow>
            <Column1>
              <IMGWrap>
                <MainIMG
                  src={main3}
                  onMouseOver={() => {
                    isMouseOver(3);
                  }}
                  onClick={()=>{
                    navigate(`/detail/${MainData[3].id}`);
                  }}
                />
              </IMGWrap>
              <IMGInfo
                info={info[3]}
                onMouseOut={() => {
                  outMouseOver(3);
                }}
              >
                <InfoContainer>
                  <InfoCol>
                    <Row1>
                      <RestName>{MainData[3].name}</RestName>
                      <RestCategory>| {MainData[3].category}</RestCategory>
                    </Row1>
                    <Row2>
                      <MapPinIMG src={mappin} alt="mappin" />
                      <InfoText>{MainData[3].address}</InfoText>
                    </Row2>
                    <Row3>
                      <ClockIMG src={clock} alt="clock" />
                      <InfoText>{MainData[3].business_hours}</InfoText>
                    </Row3>
                  </InfoCol>
                </InfoContainer>
              </IMGInfo>
            </Column1>
            <Column2>
              <IMGWrap>
                <MainIMG
                  src={main4}
                  onMouseOver={() => {
                    isMouseOver(4);
                  }}
                  onClick={()=>{
                    navigate(`/detail/${MainData[4].id}`);
                  }}
                />
              </IMGWrap>
              <IMGInfo
                info={info[4]}
                onMouseOut={() => {
                  outMouseOver(4);
                }}
              >
                <InfoContainer>
                  <InfoCol>
                    <Row1>
                      <RestName>{MainData[4].name}</RestName>
                      <RestCategory>| {MainData[4].category}</RestCategory>
                    </Row1>
                    <Row2>
                      <MapPinIMG src={mappin} alt="mappin" />
                      <InfoText>{MainData[4].address}</InfoText>
                    </Row2>
                    <Row3>
                      <ClockIMG src={clock} alt="clock" />
                      <InfoText>{MainData[4].business_hours}</InfoText>
                    </Row3>
                  </InfoCol>
                </InfoContainer>
              </IMGInfo>
            </Column2>
            <Column3>
              <IMGWrap>
                <MainIMG
                  src={main5}
                  onMouseOver={() => {
                    isMouseOver(5);
                  }}
                  onClick={()=>{
                    navigate(`/detail/${MainData[5].id}`);
                  }}
                />
              </IMGWrap>
              <IMGInfo
                info={info[5]}
                onMouseOut={() => {
                  outMouseOver(5);
                }}
              >
                <InfoContainer>
                  <InfoCol>
                    <Row1>
                      <RestName>{MainData[5].name}</RestName>
                      <RestCategory>| {MainData[5].category}</RestCategory>
                    </Row1>
                    <Row2>
                      <MapPinIMG src={mappin} alt="mappin" />
                      <InfoText>{MainData[5].address}</InfoText>
                    </Row2>
                    <Row3>
                      <ClockIMG src={clock} alt="clock" />
                      <InfoText>{MainData[5].business_hours}</InfoText>
                    </Row3>
                  </InfoCol>
                </InfoContainer>
              </IMGInfo>
            </Column3>
          </MainRow>
          <MainRow>
            <Column1>
              <IMGWrap>
                <MainIMG
                  src={main6}
                  onMouseOver={() => {
                    isMouseOver(6);
                  }}
                  onClick={()=>{
                    navigate(`/detail/${MainData[6].id}`);
                  }}
                />
              </IMGWrap>
              <IMGInfo
                info={info[6]}
                onMouseOut={() => {
                  outMouseOver(6);
                }}
              >
                <InfoContainer>
                  <InfoCol>
                    <Row1>
                      <RestName>{MainData[6].name}</RestName>
                      <RestCategory>| {MainData[6].category}</RestCategory>
                    </Row1>
                    <Row2>
                      <MapPinIMG src={mappin} alt="mappin" />
                      <InfoText>{MainData[6].address}</InfoText>
                    </Row2>
                    <Row3>
                      <ClockIMG src={clock} alt="clock" />
                      <InfoText>{MainData[6].business_hours}</InfoText>
                    </Row3>
                  </InfoCol>
                </InfoContainer>
              </IMGInfo>
            </Column1>
            <Column2>
              <IMGWrap>
                <MainIMG
                  src={main7}
                  onMouseOver={() => {
                    isMouseOver(7);
                  }}
                  onClick={()=>{
                    navigate(`/detail/${MainData[7].id}`);
                  }}
                />
              </IMGWrap>
              <IMGInfo
                info={info[7]}
                onMouseOut={() => {
                  outMouseOver(7);
                }}
              >
                <InfoContainer>
                  <InfoCol>
                    <Row1>
                      <RestName>{MainData[7].name}</RestName>
                      <RestCategory>| {MainData[7].category}</RestCategory>
                    </Row1>
                    <Row2>
                      <MapPinIMG src={mappin} alt="mappin" />
                      <InfoText>{MainData[7].address}</InfoText>
                    </Row2>
                    <Row3>
                      <ClockIMG src={clock} alt="clock" />
                      <InfoText>{MainData[7].business_hours}</InfoText>
                    </Row3>
                  </InfoCol>
                </InfoContainer>
              </IMGInfo>
            </Column2>
            <Column3>
              <IMGWrap>
                <MainIMG
                  src={main8}
                  onMouseOver={() => {
                    isMouseOver(8);
                  }}
                  onClick={()=>{
                    navigate(`/detail/${MainData[8].id}`);
                  }}
                />
              </IMGWrap>
              <IMGInfo
                info={info[8]}
                onMouseOut={() => {
                  outMouseOver(8);
                }}
              >
                <InfoContainer>
                  <InfoCol>
                    <Row1>
                      <RestName>{MainData[8].name}</RestName>
                      <RestCategory>| {MainData[8].category}</RestCategory>
                    </Row1>
                    <Row2>
                      <MapPinIMG src={mappin} alt="mappin" />
                      <InfoText>{MainData[8].address}</InfoText>
                    </Row2>
                    <Row3>
                      <ClockIMG src={clock} alt="clock" />
                      <InfoText>{MainData[8].business_hours}</InfoText>
                    </Row3>
                  </InfoCol>
                </InfoContainer>
              </IMGInfo>
            </Column3>
          </MainRow>
        </MainContainer>
        {/* <Footer>
          <FooterText>
            Copyright © 2022 EWHA comong. All rights reserved.
          </FooterText>
        </Footer> */}
      </MainBG>
    </>
  );
}

export default MainPage;
