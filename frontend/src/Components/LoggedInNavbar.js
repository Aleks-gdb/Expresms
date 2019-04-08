import React, { Component } from "react";
import { Nav, Navbar, NavItem, Button } from "react-bootstrap";
import Logo from "../Logo.png";
export default class LoggedInNavbar extends Component {
  render() {
    return (
      <div className="mainnavbar">
        <Navbar expand="lg" collapseOnSelect fixedTop className="justify-content-between">
        <Navbar.Brand href="/"><img alt="logo" src={Logo} className="logoAcc"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse className="justify-content-end">
            <Nav className = "mr-auto">
            <NavItem pullRight>
              <Button className="loggedinbutton" variant="dark" href="/account">MESSAGES</Button>
              <Button className="loggedinbutton" variant="dark" href="/settings">SETTINGS</Button>
              <Button className="loggedinbutton" variant="dark" href="/">LOGOUT</Button>
            </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}