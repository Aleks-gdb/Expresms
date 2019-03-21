import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./Components/Routes";
import "./App.css";


export default class App extends Component {
  render() {
    return (
        <div className="App">
            <Routes />
        </div>
    );
  }
}