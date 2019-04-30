import LoggedInNav from "./LoggedInNavbar";
import React, { Component } from 'react';
// import ListGroup from 'react-bootstrap/ListGroup';
// import {Tab, Row, Col, Nav} from 'react-bootstrap';
// import Messages from './MessageList';
// import Numbers from './NumberList';
//https://scrimba.com/p/pbNpTv/cm2a6f9
//https://stackoverflow.com/questions/31234500/create-react-component-dynamically

export default class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            messages: []
        }
    }
    
    componentDidMount(){
        fetch('http://localhost:3000/messages', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'include'
        })
            .then(response => response.json())
            .then(data => {this.setState({messages: data}); console.log(this.state.messages)});
    }

    // deleteMsg(){
    //     fetch('http://localhost:3000/messages/8', {
    //         method: 'DELETE',
    //         credentials: 'include'
    //     })
    //         .then(response => response.json())
    //         .then(data => {this.setState({messages: data}); console.log(this.state.messages)});
    // }

    handleShow(){
        return(
            <table className="table table-hover">
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Language</th>
                    <th>Original text</th>
                    <th>Translated text</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
            {
                this.state.messages.map(msg =>
                <tr>
                <td>{msg.number}</td>
                <td>{msg.language}</td>
                <td>{msg.text}</td>
                <td>{msg.translatedText}</td>
                <td>{msg.timeStamp}</td>
                </tr>)
            }
            </tbody>
            </table>
        );
    }

    render(){
        return(
             <div>
             <LoggedInNav/>
             <h1 id="dashboardHeader">Dashboard</h1>
             <div id="messageList">
             
                {this.state.messages.length > 0 ? (this.handleShow()) : <h2 id="noMessages">You have no messages sent!</h2>}
             </div>
             {/* <Button onClick={this.deleteMsg.bind(this)}>
             Delete
             </Button> */}
             </div>
        );
    }
}
