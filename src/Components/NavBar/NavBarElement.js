import styled from "styled-components";
import { Link, Link as LinkRouter } from "react-router-dom";

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
  display: grid;
  align-items: center;
  margin-right: 40px;
`;

export const NavText1 = styled.div`
  display: grid;
  width: 90px;
  color: #ffba94;
  font-size: 20px;
  font-style: normal;
  font-family: "Spoqa Han Sans Neo Bold";
`;
export const NavText2 = styled.div`
  display: grid;
  width: 100px;
  margin: 0 0 0 20px;
  color: #ffba94;
  font-size: 20px;
  font-style: normal;
  font-family: "Spoqa Han Sans Neo Bold";
`;
export const LogoImg = styled.img`
  width: 150px;
`;

export const NavUpload = styled(LinkRouter)`
  display: grid;
  max-width: 100px;
  align-items: center;
  margin: 0 0 0 30px;
  color: #ffba94;
  font-size: 20px;
  font-style: normal;
  font-family: "Spoqa Han Sans Neo Bold";
  &:hover {
    color: #FF9D66;
  }
`;

export const NavList = styled(LinkRouter)`
  display: grid;
  max-width: 100px;
  align-items: center;
  margin: 0 0 0 30px;
  color: #ffba94;
  font-size: 20px;
  font-style: normal;
  font-family: "Spoqa Han Sans Neo Bold";
  &:hover {
    color: #FF9D66;
  }
`;

export const NavLogin = styled(LinkRouter)`
  display: flex;
  max-width: 50px;
  align-items: center;
  margin-left: 64%;
`;
