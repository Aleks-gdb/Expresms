import LoggedInNav from "./LoggedInNavbar";
import React, { Component, Sonnet } from 'react';
import {Tab, Row, Col, Nav} from 'react-bootstrap';
//https://scrimba.com/p/pbNpTv/cm2a6f9
export default class AccountMainPage extends Component{
    render(){
        return(
             <Tab.Container id="left-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={2}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        <Nav.Link eventKey="number">
                            Number 1
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="number2">
                            Number 2
                        </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                </Row>
                </Tab.Container>
        );
    }
}
