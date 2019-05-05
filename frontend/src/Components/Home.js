import React, { Component } from 'react';
import TextingForm from './TextingForm';
import Navigation from './MainNavigation';

/*Homepage, what everyone sees when they open the website*/
export default class Home extends Component {
  render() {
    return (
      <div className="formbody">
      <Navigation/> {/*calling the navigation component to display*/}
      <TextingForm /> {/*calling the texting form component to display*/}
      </div>
    );
  }
}