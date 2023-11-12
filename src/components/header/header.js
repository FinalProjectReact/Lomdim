
// import { Outlet } from 'react-router-dom';
import { Link } from "react-router-dom";
import React from 'react';
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, NavDropdownItem,NavDropdownMenu } from './headerStyle';
import logoImg from '../picthers/logoImg.png'

import { Dropdown, Menu } from 'semantic-ui-react'



const Header = () => {
  const options = [
    { key: 1, text: 'אנגלית', value: 1 },
    { key: 2, text: 'מתמטיקה', value: 2 },
    { key: 3, text: 'עברית', value: 3 },
    { key: 4, text: 'מדעים', value: 4 },
]

  return (
    <>
      <Nav>
        <Bars />
        <img id='logo' alt='logo' src={logoImg}/>
        <NavMenu>
          <NavLink to='/'  >
            בית
          </NavLink>
          
          {/* <NavLink to='/חומרי_לימוד' >
            חומרי לימוד
          </NavLink> */}
          {/* <NavLink>
            <Menu compact>
            <Dropdown  text='Dropdown' options={options} simple item>
              <Dropdown.Menu>
                <Dropdown.Item>אנגלית</Dropdown.Item>
                <Dropdown.Item>מתמטיקה</Dropdown.Item>
                <Dropdown.Item>עברית</Dropdown.Item>
                <Dropdown.Item>מדעים</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </Menu>
          </NavLink> */}
          
          <NavLink to="/about" >
            אודות
          </NavLink>
          <NavLink to="/contact_us" >
            צור קשר
          </NavLink>
          <NavLink to='/blog' >
            בלוג
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/login">התחברות</NavBtnLink>
          <NavBtnLink to="/register"> משתמש חדש</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Header;
