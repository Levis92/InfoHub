import React, { Component } from 'react';
import Vasttrafik from '../components/vasttrafik';
import Clock from '../components/clock';
import Twitter from '../components/twitter';
import Weather from '../components/weather';

class Home extends Component {
  
  render() {
    return (
      <div>
        <Twitter />
        <Vasttrafik />
        <Weather />
        <Clock />
      </div>
    );
  }
}

export default Home;
