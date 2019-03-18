import React, { Component } from "react";
import { Navbar, NavItem, Button } from "react-bootstrap";
import Logo from "./Logo.png";
export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect fixedTop className="justify-content-between">
        <Navbar.Brand><img alt="logo" src={Logo} className="logo"/></Navbar.Brand>
        <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavItem pullRight>
              <Button className="loginbutton" variant="dark">LOGIN</Button>
            </NavItem>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
