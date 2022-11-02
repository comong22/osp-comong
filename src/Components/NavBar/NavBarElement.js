import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const Nav = styled.nav`
  background: white;
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavBarContainer = styled.div`
  display: flex;
  height: 80px;
  z-index: 999;
  width: 100%;
  padding: 0 24px;
  max-width: 1920px;
`;

export const NavLogo = styled(LinkRouter)`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 150px;
`

export const NavUpload = styled(LinkRouter)`
  margin-left: 82%;
  margin-right: 3%;
  display: flex;
  max-width: 20px;
  align-items: center;
`;

export const NavList = styled(LinkRouter)`
  display: flex;
  max-width: 50px;
  align-items: center;
`;