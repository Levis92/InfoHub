import React, { Component } from "react";
import addIcon from "../../images/weather-icons/add-icons";

class HourlyWeatherItem extends Component {
  getTime(timeString) {
    let time = new Date(timeString * 1000).getHours();
    let actualTime = new Date().getHours();
    if (time === actualTime) {
      return "Nu";
    } else if (time < 10) {
      return "0" + time;
    } else {
      return time;
    }
  }

  render() {
    const { time, icon, temperature } = this.props.data;

    return (
      <div className="hourly-weather-item">
        <h5>
          {this.getTime(time)}
        </h5>
        <img src={addIcon(icon)} alt="" />
        <h5>
          {Math.round(temperature)}°
        </h5>
      </div>
    );
  }
}

export default HourlyWeatherItem;
