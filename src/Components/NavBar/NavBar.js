import { LogoImg, Nav, NavBarContainer, NavItem, NavList, NavLogo, NavMenu, NavUpload } from "./NavBarElement";
import logo from "../../images/logo.png";
import upload from "../../images/upload.svg";
import listbtn from "../../images/listbtn.svg";
function NavBar(){

    return(
        <Nav>
            <NavBarContainer>
                <NavLogo to="/">
                    <LogoImg src={logo} alt="logo"/>
                </NavLogo>
                <NavUpload to="/upload">
                    <img src={upload} alt="uploadbtn"/>
                </NavUpload>
                <NavList to="/list">
                    <img src={listbtn} alt="listbtn"/>
                </NavList>
            </NavBarContainer>
        </Nav>
    )
}

export default NavBar;