import React, { Component } from "react";
import { Nav, Navbar, NavItem, Button } from "react-bootstrap";
import Logo from "../Logo.png";
export default class LoggedInNavbar extends Component {
  
  render() {
    return (
      <div className="mainnavbar">
        <Navbar collapseOnSelect fixedTop className="justify-content-between">
        <Navbar.Brand href="/session"><img alt="logo" src={Logo} className="logoAcc"/></Navbar.Brand>
        <Navbar.Toggle/>
          <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavItem className="pull-right">
              <Button className="loggedinbutton" variant="dark" href="/profile">MESSAGES</Button>
              {/* <Button className="loggedinbutton" variant="dark" href="/settings">SETTINGS</Button> */}
              <Button className="loggedinbutton" variant="dark" value="Sign Out" href="/">LOGOUT</Button>
            </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}