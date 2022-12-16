import styled from "styled-components";
import { Link, Link as LinkRouter } from "react-router-dom";

export const Nav = styled.nav`
  background: white;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;

  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavBarContainer = styled.div`
  display: flex;
  height: 80px;
  z-index: 999;
  width: 100%;
  padding: 0 0 0 24px;
  max-width: 1920px;
`;

export const NavLogo = styled(LinkRouter)`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 3%;
`;

export const LogoImg = styled.img`
  width: 140px;
`;

export const NavUpload = styled(LinkRouter)`
  display: flex;
  width: 10%;
  max-width: 130px;
  align-items: center;
  margin: 0 1% 0 0px;
  color: #ffba94;
  font-size: 21px;
  font-style: normal;
  font-family: "Spoqa Han Sans Neo Bold";
  &:hover {
    color: #ff9d66;
  }
`;

export const NavList = styled(LinkRouter)`
  display: flex;
  width: 10%;
  max-width: 130px;
  align-items: center;
  color: #ffba94;
  font-size: 21px;
  font-style: normal;
  font-family: "Spoqa Han Sans Neo Bold";
  &:hover {
    color: #ff9d66;
  }
`;

export const UserMSG = styled.div`
  display: flex;
  max-width: 130px;
  align-items: center;
  margin: 0 7px 0 50%;
  color: #727272;
  font-size: 14px;
  font-style: normal;
  font-family: "Spoqa Han Sans Neo Bold";
`;

export const Logout = styled.div`
  display: flex;
  max-width: 130px;
  align-items: center;
  margin-right: 30px;  
  font-family: "Spoqa Han Sans Neo Bold";
  font-size: 14px;
  float: left;
  text-decoration-line: underline;
  color: #ffa574;
  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ffba94;
    border: none;
  }
`;

export const NavLogin = styled.div`
  display: flex;
  max-width: 50px;
  align-items: center;
`;

export const BlackOut = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1010;
  background-color: rgba(0, 0, 0, 0.446);
`;


