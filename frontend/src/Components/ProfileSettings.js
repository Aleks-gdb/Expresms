import LoggedInNav from "./LoggedInNavbar";
import ChangePassword from "./ChangePassword";
import React, { Component } from 'react';
import { Card, Button, Container, Row, Col, Modal} from "react-bootstrap";

export default class ProfileSettings extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }
    
    render(){
        return(
             <div>
             <LoggedInNav/>
             <div id="settings">
            <Container>
                <Row>
                <Card id="passChangeCard">
                    <Card.Header>Change Password</Card.Header>
                    <Card.Body>
                        <ChangePassword/>
                    </Card.Body>
                </Card>
                </Row>
                <Row id="settingsButtons">
                <Col id="deleteButtons">
                <Button variant="dark" onClick={this.handleShow}>Delete all messages</Button>
                </Col>
                <Col>
                <Button variant="dark" onClick={this.handleShow}>Delete the account</Button>
                </Col>
                </Row>
            </Container>
            <Modal show={this.state.show} onHide={this.handleClose} id="modalbody">
            <Modal.Header closeButton>
                <Modal.Title id="modaltitle">Confirm</Modal.Title>
            </Modal.Header>
            <Modal.Body id="modalbody">Would you like to proceed?</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose} id="modalbutton">
                Confirm delete
                </Button>
                <Button variant="primary" onClick={this.handleClose} id="modalbutton">
                Cancel
                </Button>
            </Modal.Footer>
            </Modal>
             </div>
            </div>
        );
    }
}
