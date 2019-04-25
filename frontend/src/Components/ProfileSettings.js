import LoggedInNav from "./LoggedInNavbar";
import ChangePassword from "./ChangePassword";
import React, { Component } from 'react';
import { Card, Button, Container, Row, Col} from "react-bootstrap";

export default class ProfileSettings extends Component{
    render(){
        return(
             <div>
             <LoggedInNav/>
             <div id="settings">
            <Container>
                <Row>
                <Card>
                    <Card.Header>Change Password</Card.Header>
                    <Card.Body>
                        <ChangePassword/>
                    </Card.Body>
                </Card>
                </Row>
                <Row id="deleteButtons">
                <Col>
                <Button>Delete all messages</Button>
                </Col>
                <Col>
                <Button>Delete the account</Button>
                </Col>
                </Row>
            </Container>
             </div>
            </div>
        );
    }
}
