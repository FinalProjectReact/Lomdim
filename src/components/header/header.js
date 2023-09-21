import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./headerStyle";
import logoImg from "../picthers/logoImg.png";

const Header = () => {
  return (
    <>
      <Nav>
        <Bars />
        <img id="logo" alt="logo" src={logoImg} />
        <NavMenu>
          <NavLink to="/" activeStyle>
            בית
          </NavLink>
          <NavLink to="/about" activeStyle>
            אודות
          </NavLink>
          <NavLink to="/contact_us" activeStyle>
            צור קשר
          </NavLink>
          <NavLink to="/blog" activeStyle>
            בלוג
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink
            to={localStorage.getItem("loggedin") === null ? "/login" : ""}
          >
            התחברות
          </NavBtnLink>
          <NavBtnLink
            to={localStorage.getItem("loggedin") === null ? "/register" : ""}
          >
            משתמש חדש
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Header;
