import React, { Component } from 'react';
import {Form, Col, Button, Modal} from 'react-bootstrap';

export default class TextingForm extends Component{
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
            <div className="textingform">
            <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label id="formLabel">TO</Form.Label>
                <Form.Control type="email" placeholder="Enter recipient phone number" id="formBox" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label id="formLabel">LANGUAGE</Form.Label>
                <Form.Control as="select" id="formBox">
                    <option>Choose...</option>
                    <option>English</option>
                </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridTextarea1">
                <Form.Label id="formLabel">MESSAGE</Form.Label>
                <Form.Control as="textarea" rows="4" placeholder="Write your text message here (any language)" id="formBox"/>
            </Form.Group>

            <Button variant="primary" onClick={this.handleShow} className="sendButton">
                SEND
            </Button>

          <Modal show={this.state.show} onHide={this.handleClose} id="modalbody">
          <Modal.Header closeButton>
            <Modal.Title id="modaltitle">Confirm send</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalbody">Would you like to send this message?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose} id="modalbutton">
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose} id="modalbutton">
              Send
            </Button>
          </Modal.Footer>
        </Modal>
        </Form>
        </div>
    );
  }
}
