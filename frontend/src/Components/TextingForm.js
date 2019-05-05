import React, { Component } from 'react';
import {Form, Col, Button, Modal} from 'react-bootstrap';

/*The form user fills out in order to send the message*/
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
          showC: false,
          showE: false,
          msg: null
      };
      this.handleClose = this.handleClose.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleSend = this.handleSend.bind(this);
  }
  //Handling closing the modal that displays the translated text and a success or an error message
  handleClose() {
      this.setState({ show: false });
      this.setState({ showC: false });
      this.setState({ showE: false });
  }
  //Handling user input into the form
  handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      let item = {...this.state.item};
      item[name] = value;
      this.setState({item});
  }
  //Handling data submission to the server to receive the translated text
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
    //Displaying the translated text back to the user for confirmation
    (this.state.show ? this.setState({show: false}) : this.setState({show: true}));
  }  
  //Handling the sending of the text once the user confirms they would like to proceed with the message
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
    //Error checking, displaying appropriate messages back to the user about succession or failure of the action
    .then(response => {
        response.json();
        if(response.status === 200)
        {
            (this.state.showC ? this.setState({showC: false}) : this.setState({showC: true}));
        }else{
            (this.state.showE ? this.setState({showE: false}) : this.setState({showE: true}));
        }    
    });
    this.setState({name: '', language:'', phone: ''});
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
                {/*The language menu*/}
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
          {/*First modal displayed to the user as a confirmation for sending the translated text*/}
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
        {/*Modal displayed when the message is sent with no issues*/}
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showC} onHide={this.handleClose} id="modalbody">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Success!</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalbody">Your message has been sent!</Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={this.handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
        {/*The modal displayed when the message has not been sent due to issues*/}
        <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.showE} onHide={this.handleClose} id="modalbody">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Oh no!</Modal.Title>
          </Modal.Header>
          <Modal.Body id="modalbody">Something went wrong and we couldn't send the message.</Modal.Body>
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
