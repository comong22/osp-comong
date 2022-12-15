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
import user from "../../images/user.svg";
import LoginModal from "./LoginModal";

function NavBar() {
  // 모달
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = (active) => {
    setIsOpen(active);
  };

  // 로그아웃
  const logout = async () => {
    try {
      auth().signOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">
            <LogoImg src={logo} alt="logo" />
          </NavLogo>
          <NavUpload to="/upload"># 맛집 등록</NavUpload>
          <NavList to="/list"># 맛집 리스트</NavList>
          {
            // 여기에 로그인된 상태면 보이게 하고 로그인 된 상태 아니면 안 보이게!
            <>
              <UserMSG>김코몽 님</UserMSG>
              <Logout onClick={logout}>로그아웃</Logout>
            </>
          }
          <NavLogin
            onClick={() => {
              openModalHandler(true);
            }}
          >
            <img src={user} alt="login" />
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
