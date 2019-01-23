import React from 'react';
import './App.sass';
import Home from './pages/home.js';
import Vasttrafik from './components/vasttrafik';
import Clock from './components/clock';
import Twitter from './components/twitter';
import Weather from './components/weather';
import News from './components/news';

const App = () => {
  return (
    <Home>
      <Twitter />
      <Vasttrafik />
      <Clock top={<News />} />
      <Weather />
    </Home>
  );
};

export default App;
