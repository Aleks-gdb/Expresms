import React, { Component } from "react";
import { Nav, Navbar, NavItem, Button, Modal } from "react-bootstrap";
import Logo from "../Logo.png";
import {withRouter} from 'react-router';
/*Navigation displayed to the logged in user*/
class LoggedInNavbar extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
        show: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
}

  handleClose(){
    this.setState({show: false});
}

  async handleSubmit(event) {
    event.preventDefault();
    await fetch('http://localhost:3000/messages', {
        method: 'GET',
        headers: {
            'Authorization': 'Basic dTp1',
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    .then(response => {
        response.json();
        if(response.status !== 200)
        {
            let path = `/`;
            this.props.history.push(path);
        }else{
            (this.state.show ? this.setState({show: false}) : this.setState({show: true}));
        }
    });
  }

  render() {
    return (
      <div className="mainnavbar">
        <Navbar collapseOnSelect fixedTop className="justify-content-between">
        <Navbar.Brand href="/session"><img alt="logo" src={Logo} className="logoAcc"/></Navbar.Brand>
        <Navbar.Toggle/>
          <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavItem className="pull-right">
              <Button className="loggedinbutton" variant="dark" href="/profile">MESSAGES</Button>s
              <Button className="loggedinbutton" variant="dark" onClick={this.handleSubmit}>LOGOUT</Button>
            </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.show} onHide={this.handleClose} id="modalbody">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Something went wrong!</Modal.Title>
                </Modal.Header>
                <Modal.Body id="modalbody">Sorry we couldn't log you out--internal error.</Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={this.handleClose}>
                    Ok
                    </Button>
                </Modal.Footer>
                </Modal>
      </div>
    );
  }
}
export default withRouter(LoggedInNavbar);