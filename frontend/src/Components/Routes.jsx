import React, { Component } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
import Login from "./Login";
import Session from "./Session";
import Profile from "./Profile";

/*class to route to other components and link them to pages*/
export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>          
        <div style={{width:"100%"}}>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/session" component={Session} />
        </div>
      </BrowserRouter>
    );
  }
}
