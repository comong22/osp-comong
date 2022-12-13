import React, { useState, useEffect } from "react";
import firebase from "firebase";
import "firebase/auth";

import {
  LogoImg,
  Nav,
  NavBarContainer,
  NavList,
  NavLogin,
  NavLogo,
  NavUpload,
  BlackOut
} from "./NavBarElement";
import logo from "../../images/logo.png";
import user from "../../images/user.svg";
import LoginModal from "./LoginModal";
import { GlobalFonts } from "../../fonts/font";

function NavBar() {
  // 모달
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = (active) => {
    setIsOpen(active);
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
  return (
    <BlackOut onClick={() => openModalHandler(false)}/>
  );
};

export default NavBar;
