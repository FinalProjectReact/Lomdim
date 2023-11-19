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

          to={"/login"}
            // to={localStorage.getItem("loggedin") === null ? "/login" : "/register"}

            //to={localStorage.getItem("loggedin")&&"/login" }
          >
            התחברות
          </NavBtnLink>
          <NavBtnLink

          to={"/register"}

            // to={localStorage.getItem("loggedin") === null ? "/register" : "/register"}

            //to={localStorage.getItem("loggedin")&&"/register"}
          >
            משתמש חדש
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Header;
