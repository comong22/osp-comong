# [2022-2] 이화여자대학교 오픈 SW 플랫폼 13조 커몽
이대 맛집 궁금하다면? 커몽으로 COME ON! 

## ℹ️ 프로젝트 소개
이화여자대학교 캠퍼스 맛집 소개 웹어플리케이션으로 인증된 사용자들이 직접 맛집을 등록할 수 있고, 맛집 리스트를 통해 맛집의 상세정보를 제공하는 프로젝트이다. 

타 웹사이트들은 보통 맛집을 구역별로 세분화하지 않고 '이대 부근'의 가게들을 전체적으로 보여주는 반면, 커몽의 프로젝트는 '이화여자대학교 캠퍼스 맛집 소개'의 목적에 맞게 gps 기능을 사용하지 않고도 이대 정문, 이대 후문, 신촌 지역의 맛집을 구분하여 보여준다. 

이를 통해 주 타켓층인 이화여대 학생들에게 편리함을 제공한다.

## 👩🏻‍💻 팀원 소개 
<table cellspacing="0" cellpadding="0" width="100%">
  <tr width="100%">
    <td align="center">
      <a>이주연</a>
    </td>
    <td align="center">
      <a>노수진</a>
    </td>
    <td align="center">
      <a>이해원</a>
    </td>
    <td align="center">
      <a>유지민</a>
    </td>
    <td align="center">
      <a>허채린</a>
    </td>
    <td align="center">
      <a>황재령</a>
    </td>
  </tr>
   <tr width="100%">
    <td align="center">
      <img src="https://user-images.githubusercontent.com/94354545/197943299-23693d7a-cf6a-4dc2-ae81-634df461896a.PNG" width="80px"/>
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/94354545/197943284-efc14202-a8b6-4f5f-bc21-3af09bfb8acb.PNG" width="80px"/>
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/94354545/197942728-9696e298-c9a9-4128-a8cd-08a23d2cf0eb.png" width="80px"/>
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/94354545/197943293-7dc9f577-cbcc-4454-b7a6-aa0c346610d9.PNG" width="80px"/>
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/94354545/197943288-2f89c150-336d-4927-ab46-fa06221a942c.PNG" width="80px"/>
    </td>
    <td align="center">
      <img src="https://user-images.githubusercontent.com/94354545/197943291-b155714d-eb85-4e56-a24a-b994912ab3c3.PNG" width="80px"/>
    </td>
  </tr><tr width="100%">
    <td align="center">
      <a href="https://github.com/leekrkr">@leekrkr</a>
    </td>
    <td align="center">
      <a href="https://github.com/sujinRo">@sujinRo</a>
    </td>
    <td align="center">
      <a href="https://github.com/Haewonny">@Haewonny</a>
    </td>
    <td align="center">
      <a href="https://github.com/Yu-jimin">@Yu-jimin</a>
    </td>
    <td align="center">
      <a href="https://github.com/julia-heo">@julia-heo</a>
    </td>
    <td align="center">
      <a href="https://github.com/Hwang-Jaeryeong">@Hwang-Jaeryeong</a>
    </td>
  </tr>
  <tr width="100%">
    <td align="center">
      <a>세부 화면, 리뷰 등록/조회 화면</a>
    </td>
    <td align="center">
      <a>세부 화면, 리뷰 등록/조회 화면</a>
    </td>
    <td align="center">
      <a>메인 화면, 맛집리스트 화면</a>
    </td>
    <td align="center">
      <a>맛집 등록 화면, 대표메뉴 조회 화면</a>
    </td>
    <td align="center">
      <a>맛집 등록 화면, 대표메뉴 조회 화면</a>
    </td>
    <td align="center">
      <a>메인 화면, 맛집리스트 화면</a>
    </td>
  </tr>

</table>

## 🎨 디자인
<div align="center">
<img width="629" alt="comong design" src="https://user-images.githubusercontent.com/94354545/200033842-fb555364-829b-4e39-81dc-8fcef0e1171c.png">
</div>

## 📚 디렉토리 구조
<details>
<summary>펼쳐 보기</summary>
<div markdown="1">
      📦 src<br>
      ┣ 📂 Components<br>
      ┃ ┣ 📂 DetailPage <br>
      ┃ ┃ ┣ 📄 DetailBottom.js<br>
      ┃ ┃ ┣ 📄 DetailPage.css<br>
      ┃ ┃ ┣ 📄 DetailStyle.js<br>
      ┃ ┃ ┣ 📄 DetailTop.js<br>
      ┃ ┃ ┣ 📄 Pages.js<br>
      ┃ ┃ ┣ 📄 ReviewPage.css<br>
      ┃ ┃ ┗ 📄 ReviewPage.js<br>
      ┃ ┣ 📂 ListDetailPage<br>
      ┃ ┃ ┣ 📄 ListDetailBottom1.js<br>
      ┃ ┃ ┣ 📄 ListDetailBottom2.js<br>
      ┃ ┃ ┣ 📄 ListDetailBottom3.js<br>
      ┃ ┃ ┣ 📄 ListDetailPage.css<br>
      ┃ ┃ ┣ 📄 ListDetailStyle.js<br>
      ┃ ┃ ┣ 📄 ListDetailTop1.js<br>
      ┃ ┃ ┣ 📄 ListDetailTop2.js<br>
      ┃ ┃ ┣ 📄 ListDetailTop3.js<br>
      ┃ ┃ ┣ 📄 Pages1.js<br>
      ┃ ┃ ┣ 📄 Pages2.js<br>
      ┃ ┃ ┣ 📄 Pages3.js<br>
      ┃ ┃ ┣ 📄 ReviewPage.css<br>
      ┃ ┃ ┣ 📄 ReviewPage1.js<br>
      ┃ ┃ ┣ 📄 ReviewPage2.js<br>
      ┃ ┃ ┗ 📄 ReviewPage3.js<br>
      ┃ ┣ 📂 ListPage<br>
      ┃ ┃ ┣ 📄 ListPage.css<br>
      ┃ ┃ ┣ 📄 ListPage.js<br>
      ┃ ┃ ┗ 📄 ListStyle.js<br>
      ┃ ┣ 📂 MainPage<br>
      ┃ ┃ ┣ 📄 MainPage.js<br>
      ┃ ┃ ┣ 📄 MainStyle.js<br>
      ┃ ┃ ┗ 📄 data.js<br>
      ┃ ┣ 📂 NavBar<br>
      ┃ ┃ ┣ 📄 LoginModal.js<br>
      ┃ ┃ ┣ 📄 ModalElement.js<br>
      ┃ ┃ ┣ 📄 NavBar.js<br>
      ┃ ┃ ┗ 📄 NavBarElement.js<br>
      ┃ ┣ 📂 PostReviewPage<br>
      ┃ ┃ ┣ 📄 Modal.js<br>
      ┃ ┃ ┣ 📄 PostReview.css<br>
      ┃ ┃ ┗ 📄 PostReview.js<br>
      ┃ ┗ 📂 UploadPage<br>
      ┃ ┃ ┣ 📄Element.js<br>
      ┃ ┃ ┣ 📄UploadPage.css<br>
      ┃ ┃ ┗ 📄UploadPage.js<br>
      ┣ 📂 fonts<br>
      ┃ ┣ 📄 SpoqaHanSansNeo-Bold.woff<br>
      ┃ ┣ 📄 SpoqaHanSansNeo-Regular.woff<br>
      ┃ ┗ 📄 font.js<br>
      ┣ 📂 images<br>
      ┃ ┣ 📂 detail<br>
      ┃ ┣ 📂 detail_bestmenu<br>
      ┃ ┣ 📂 list<br>
      ┃ ┣ 📂 main<br>
      ┃ ┗ 📂 review<br>
      ┃<br>
      ┣ 📄 .DS_Store<br>
      ┣ 📄 App.js<br>
      ┣ 📄 App.test.js<br>
      ┣ 📄 firebase.js<br>
      ┣ 📄 index.css<br>
      ┣ 📄 index.js<br>
      ┣ 📄 reportWebVitals.js<br>
      ┗ 📄 setupTests.js<br>
</div>
</details>

## 📝 기술 블로그
[![Notion Badge](https://img.shields.io/badge/-Notion-92a8d1?logo=notion&logoColor=white&link=https://haewonny.notion.site/COMONG-Blog-b35da2cbafa24d658550bc8fc9e4372b
)](https://haewonny.notion.site/COMONG-Blog-b35da2cbafa24d658550bc8fc9e4372b
)
