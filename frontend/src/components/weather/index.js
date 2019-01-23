import React, { Component } from 'react';
import CurrentWeather from './current-weather';
import HourlyWeather from './hourly-weather';
import { weatherLocation } from '../widget-settings';
import './weather.sass';

class Weather extends Component {
  state = {
    data: {},
    currently: {},
    hourlyData: []
  };

  fetchData() {
    fetch(`/darksky/${weatherLocation.coordinates}`, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(res => {
        this.setState({
          data: res,
          currently: res.currently,
          hourlyData: res.hourly.data
        });
      })
      .catch(error => console.error(error));
  }

  componentWillMount() {
    this.fetchData();
  }

  componentDidMount() {
    window.setInterval(() => {
      this.fetchData();
    }, 300000);
  }

  render() {
    const { data: DATA, currently: CURRENTLY, hourlyData: HOURLY } = this.state;

    return (
      <div className="widget weather">
        <CurrentWeather
          location={weatherLocation}
          data={DATA}
          currently={CURRENTLY}
        />
        <HourlyWeather data={HOURLY} />
      </div>
    );
  }
}

export default Weather;
