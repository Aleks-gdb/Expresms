import React, { Component } from 'react';
import {Form, Col, Button, Modal} from 'react-bootstrap';

export default class TextingForm extends Component{
    emptyItem = {
      text: '',
      language: '',
      number: '',
      translatedText: ''
  };

  constructor(props, context) {
      super(props, context);
      this.state = {
          item: this.emptyItem,
          show: false,
          msg: null
      };
      this.handleClose = this.handleClose.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSend = this.handleSend.bind(this);
  }

  handleClose() {
      this.setState({ show: false });
  }

  handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      let item = {...this.state.item};
      item[name] = value;
      console.log(item);
      this.setState({item});
  }

  async handleSubmit(event) {
      event.preventDefault();
      const {item} = this.state;

      await fetch('http://localhost:3000/', {
          method: 'PUT',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(item)
      })
          .then(response => response.json())
          .then(data => this.setState({msg: data.translatedText}));
    (this.state.show ? this.setState({show: false}) : this.setState({show: true}));
  }  

  async handleSend(event) {
    event.preventDefault();
    const {item} = this.state;
    this.state.item.translatedText = this.state.msg;
    (this.state.show ? this.setState({show: false}) : this.setState({show: true}));
    await fetch('http://localhost:3000/', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
    .then(response => response.json());
    } 
  
    render(){
        return(
            <div className="textingform">
            <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label id="formLabel">TO</Form.Label>
                <Form.Control type="email" placeholder="Enter recipient phone number" id="formBox" name="number" onChange={this.handleChange.bind(this)}/>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                <Form.Label id="formLabel">LANGUAGE</Form.Label>
                <Form.Control as="select" id="formBox" name="language" onChange={this.handleChange.bind(this)}>
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
                <Form.Control as="textarea" rows="4" placeholder="Write your text message here (any language)" id="formBox" name="text" onChange={this.handleChange.bind(this)}/>
            </Form.Group>

            <Button variant="dark" onClick={this.handleSubmit}>
                SEND
            </Button>

          <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.show} onHide={this.handleClose} id="modalbody">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Would you like to send this message?</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalbody">{this.state.msg}</Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={this.handleSend}>
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
