import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase";
import {
  LogoImg,
  Nav,
  NavBarContainer,
  NavList,
  NavLogin,
  NavLogo,
  NavUpload,
  BlackOut,
  UserMSG,
  Logout,
} from "./NavBarElement";
import logo from "../../images/logo.png";
import userimg from "../../images/user.svg";
import LoginModal from "./LoginModal";

function NavBar() {
  // 모달
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = (active) => {
    setIsOpen(active);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // 로그아웃
  const logout = async () => {
    try {
      auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  // login한 경우 체크
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState({});
  const [user, setUser] = useState({});
  function getData() {
    const bucket = db.collection("users");
    bucket
      .doc(user.uid)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data().nickname);
          setUsername(doc.data().nickname);
        }
      });
  }

  useEffect(() => {
    auth().onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setIsLoggedIn(true);
        closeModal();
      } else {
        setIsLoggedIn(false);
      }
      setUser(currentUser);
    });
    getData();
  }, [isLoggedIn]);

  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">
            <LogoImg src={logo} alt="logo" />
          </NavLogo>
          <NavUpload to="/upload"># 맛집 등록</NavUpload>
          <NavList to="/list" isLoggedIn={isLoggedIn}>
            # 맛집 리스트
          </NavList>
          {isLoggedIn ? (
            <>
              <UserMSG>{username + "님"}</UserMSG>
              <Logout onClick={logout}>로그아웃</Logout>
            </>
          ) : (
            <></>
          )}
          <NavLogin
            onClick={() => {
              openModalHandler(true);
            }}
          >
            <img src={userimg} alt="login" />
          </NavLogin>
        </NavBarContainer>
      </Nav>
      {isOpen && <BodyBlackoutStyle openModalHandler={openModalHandler} />}
      {isOpen && <LoginModal openModalHandler={openModalHandler} />}
    </>
  );
}
export const BodyBlackoutStyle = ({ openModalHandler }) => {
  return <BlackOut onClick={() => openModalHandler(false)} />;
};

export default NavBar;
