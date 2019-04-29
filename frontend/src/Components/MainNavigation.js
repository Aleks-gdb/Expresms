import React, { Component } from "react";
import { Navbar, NavItem, Button } from "react-bootstrap";
import Logo from "../Logo.png";
export default class MainNavigation extends Component {
  render() {
    return (
      <div className="mainnavbar">
        <Navbar collapseOnSelect fixedTop className="justify-content-between">
        <Navbar.Brand href="/"><img alt="logo" src={Logo} className="logo"/></Navbar.Brand>
        <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavItem pullRight>
              <Button className="loginbutton" variant="dark" href="/login">LOGIN</Button>
              <Button className="registerbutton" variant="dark" href="/register">REGISTER</Button>
            </NavItem>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
