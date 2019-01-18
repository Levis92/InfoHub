import React from 'react';
import './App.sass';
import Home from './pages/home.js';
import Vasttrafik from './components/vasttrafik';
import Clock from './components/clock';
import Twitter from './components/twitter';
import Weather from './components/weather';

const App = () => {
  return (
    <Home>
      <Twitter />
      <Vasttrafik />
      <Clock />
      <Weather />
    </Home>
  );
};

export default App;
