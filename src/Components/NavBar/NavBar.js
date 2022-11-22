import {
  LogoImg,
  Nav,
  NavBarContainer,
  NavItem,
  NavList,
  NavLogin,
  NavLogo,
  NavMenu,
  NavText1,
  NavText2,
  NavUpload,
} from "./NavBarElement";
import logo from "../../images/logo.png";
import user from "../../images/user.svg";
function NavBar() {
  return (
    <Nav>
      <NavBarContainer>
        <NavLogo to="/">
          <LogoImg src={logo} alt="logo" />
        </NavLogo>
        <NavUpload to="/upload">맛집 등록</NavUpload>
        <NavList to="/list">맛집 리스트</NavList>
        <NavLogin to="/signin">
          <img src={user} alt="login" />
        </NavLogin>
      </NavBarContainer>
    </Nav>
  );
}

export default NavBar;
