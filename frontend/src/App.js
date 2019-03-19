import React, { Component } from 'react';
import Navigation from './Navigation';
import TextingForm from './TextingForm';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="mainnavbar">
      <Navigation />
      <div className="formbody">
      <TextingForm />
      </div>
      </div>
    );
  }
}

export default App;
