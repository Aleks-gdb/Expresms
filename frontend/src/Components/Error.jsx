import React, { Component } from 'react';
import {Button, Modal} from 'react-bootstrap';

export default class Error extends Component{

    constructor(){
        super();
        this.state = {
            show: true
        }
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(){
        this.setState({ show: false });
    }

    render(){
        return(
            <div>
            <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" centered show={this.state.show} onHide={this.handleClose} id="modalbody">
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Something went wrong!</Modal.Title>
                </Modal.Header>
                <Modal.Body id="modalbody">Sorry, the request couldn't be processed.</Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={this.handleClose}>
                    Ok
                    </Button>
                </Modal.Footer>
            </Modal>
            </div>
        )
    }
}