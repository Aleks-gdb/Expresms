import LoggedInNav from "./LoggedInNavbar";
import React, { Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

export default class MessageList extends Component{
    render(){
        return(
            <div id="messageList">
             <ListGroup>
                    <ListGroup.Item>
                        Message 1
                    </ListGroup.Item>
                    <ListGroup.Item>
                        Message 2
                    </ListGroup.Item>
            </ListGroup>
            </div>
        );
    }
}
