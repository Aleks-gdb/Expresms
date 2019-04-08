import React, { Component } from "react";
import LoggedInNav from "./LoggedInNavbar";

export default class AccountMainPage extends Component{
    render(){
        return(
            <div className = "accountMain">
            <LoggedInNav/>
            </div>
        );
    }
}