import React, {Component} from 'react';
import {Form, Button} from 'react-bootstrap';
export default class ChangePassword extends Component{
render(){
    return(
        <Form>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Current password</Form.Label>
                <Form.Control type="password" placeholder="Enter current password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>New password</Form.Label>
                <Form.Control type="password" placeholder="Enter new password" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Confirm new password" />
            </Form.Group>

            <Button variant="dark" type="submit">
                Submit
            </Button>
        </Form>
        );
    }
}