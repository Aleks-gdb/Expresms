import LoggedInNav from "./LoggedInNavbar";
import React, { Component, Sonnet } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {Tab, Row, Col} from 'react-bootstrap';
//https://scrimba.com/p/pbNpTv/cm2a6f9
export default class AccountMainPage extends Component{
    render(){
        return(
             <div id="numberList">
             <LoggedInNav/>
             <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={4}>
                    <ListGroup>
                        <ListGroup.Item action href="#link1">
                        Link 1
                        </ListGroup.Item>
                        <ListGroup.Item action href="#link2">
                        Link 2
                        </ListGroup.Item>
                    </ListGroup>
                    </Col>
                </Row>
                </Tab.Container>
            </div>
        );
    }
}
