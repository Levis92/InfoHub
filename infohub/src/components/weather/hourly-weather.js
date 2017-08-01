import React, { Component } from "react";
import "../../App.css";
import HourlyWeatherItem from "./hourly-weather-item";

class HourlyWeather extends Component {
  addItems() {
    const { data } = this.props;
    if (data) {
      let dataList = [];
      for (var i = 0; i <= 10 && i < data.length; i++) {
        dataList[i] = data[i];
      }
      return dataList.map((e, i) => <HourlyWeatherItem key={i} data={e} />);
    }
  }

  render() {
    return (
      <div className="hourly-weather">
        {this.addItems()}
      </div>
    );
  }
}

export default HourlyWeather;
