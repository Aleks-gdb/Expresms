import React, { Component } from 'react';
import {Form, Col, Button} from 'react-bootstrap';

export default class TextingForm extends Component{
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
                <Form.Control as="textarea" rows="4" placeholder="Write your text message here" id="formBox"/>
            </Form.Group>

            <Button variant="primary" type="submit" className="sendButton">
                SEND
            </Button>
            </Form>
            </div>
        );
    }
}