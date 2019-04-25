import LoggedInNav from "./LoggedInNavbar";
import React, { Component, Sonnet } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import {Tab, Row, Col, Nav} from 'react-bootstrap';
import Messages from './MessageList';
import Numbers from './NumberList';
//https://scrimba.com/p/pbNpTv/cm2a6f9
//https://stackoverflow.com/questions/31234500/create-react-component-dynamically
/*var NumberList = React.createClass({
    render: function(){
        var nums = this.props.data["items"].map(function(itemDate){
            var component = Components[number['itemClass']];
            return React.createElement(component, {
                data: itemData,
                key: number['id']
            });
        });
    }
}); */
export default class Profile extends Component{
    render(){
        return(
             <div>
             <LoggedInNav/>
             <h1 id="dashboardHeader">Dashboard</h1>
             <div id="numberList">
             <Tab.Container id="left-tabs-example" defaultActiveKey="#link1">
                <Row>
                    <Col sm={2}>
                        <Numbers/>
                    </Col>
                    <Col sm={8}>
                    <Tab.Content>
                        <Tab.Pane eventKey="number">

                        </Tab.Pane>
                        <Tab.Pane eventKey="number2">
                        <Messages/>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </Tab.Container>
                </div>
            </div>
        );
    }
}
