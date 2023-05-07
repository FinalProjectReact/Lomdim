import React from "react";
import "./header.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">בית</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">התחברות</Nav.Link>
            <Nav.Link href="#link">תלמידים ממליצים</Nav.Link>
            <NavDropdown title="חומרי לימוד" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">אנגלית</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">מתמטיקה</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">עברית</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">הבעה</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}