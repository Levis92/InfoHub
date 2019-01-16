import React, { Component } from "react";
import CurrentWeather from "./current-weather";
import HourlyWeather from "./hourly-weather";
import { API, weatherLocation } from "../widget-settings";
import request from "superagent";
import './weather.sass';

class Weather extends Component {
  state = {
      data: {},
      currently: {},
      hourlyData: []
  };

  fetchData() {
    request
      .get(API + "/darksky/" + weatherLocation.coordinates)
      .accept("json")
      .end((err, res) => {
        if (res) {
          res = JSON.parse(res.text);
          this.setState({
            data: res,
            currently: res.currently,
            hourlyData: res.hourly.data
          });
        };
      });
  }

  componentWillMount() {
    this.fetchData();
  }

  componentDidMount() {
    window.setInterval(
      function() {
        this.fetchData();
      }.bind(this),
      300000
    );
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
        <a id="darksky-link" href="https://darksky.net/poweredby/">
          Powered by Dark Sky
        </a>
      </div>
    );
  }
}

export default Weather;
