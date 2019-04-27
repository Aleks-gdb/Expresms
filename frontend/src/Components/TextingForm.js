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
                    <option>Arabic</option> 
                    <option>Chinese(Simpl.)</option>
                    <option>Chinese(Trad.)</option>
                    <option>Czech</option>
                    <option>Danish</option>
                    <option>Dutch</option>
                    <option>English</option>
                    <option>Finnish</option>
                    <option>French</option>
                    <option>German</option>
                    <option>Hebrew</option>
                    <option>Indonesian</option>
                    <option>Italian</option>
                    <option>Japanese</option>
                    <option>Korean</option>
                    <option>Polish</option>
                    <option>Portugese</option>
                    <option>Russian</option>
                    <option>Spanish</option>
                    <option>Swedish</option>
                    <option>Turkish</option>
                </Form.Control>
                </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridTextarea1">
                <Form.Label id="formLabel">MESSAGE</Form.Label>
                <Form.Control as="textarea" rows="4" placeholder="Write your text message here (any language)" id="formBox"/>
            </Form.Group>

            <Button variant="dark" onClick={this.handleShow}>
                SEND
            </Button>

          <Modal show={this.state.show} onHide={this.handleClose} id="modalbody">
          <Modal.Header closeButton>
            <Modal.Title id="modaltitle">Confirm send</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalbody">Would you like to send this message?</Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={this.handleClose}>
              Send
            </Button>
            <Button variant="dark" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        </Form>
        </div>
    );
  }
}
