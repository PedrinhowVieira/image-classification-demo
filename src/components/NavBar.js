import React, { Component } from "react";
import { Nav, Navbar, NavDropdown, Image } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <Image src={require('./../Images/logo.png')} width="40" height="40" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Mobile Machine Learning Classification Tool</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="User" id="basic-nav-dropdown" alignRight>
              <NavDropdown.Item href="#action/3.1">Next Image</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Refresh</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Log Off</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
