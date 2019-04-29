import React, { Component } from 'react';
import TextingForm from './TextingForm';
import Navigation from './MainNavigation';

export default class Home extends Component {
  render() {
    return (
      <div className="formbody">
      <Navigation/>
      <TextingForm />
      </div>
    );
  }
}