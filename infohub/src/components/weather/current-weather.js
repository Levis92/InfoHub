import React, { Component } from 'react';
import '../../App.css';
import addIcon from '../../images/weather-icons/add-icons';


class CurrentWeather extends Component {

  render() {
    const locationName = this.props.location.name;
    const latitude = this.props.data.latitude;
    const longitude = this.props.data.longitude;
    const icon = this.props.currently.icon;
    const temperature = this.props.currently.temperature;
    const summary = this.props.currently.summary;
    const windSpeed = this.props.currently.windSpeed;
    const humidity = this.props.currently.humidity*100;

    function checkLength(input, maxLength) {
      if (input) {
        if (input.length > maxLength)
          return true;
      } else return false;
    }

    return (
      <div className="current-weather">
        <div className="main">
          <h2>{locationName}</h2>
          <h6>{latitude},{longitude}</h6>
          <img src={addIcon(icon)} alt="" />
        </div>
        <div className="sidebar">
          <div>
            <h1>{Math.round(temperature)}°</h1>
            {
              checkLength(summary, 16) ?
                <h4 style={{fontSize: 0.8 + 'rem'}}>{summary}</h4> :
                <h4>{summary}</h4>
            }
            <h5>Vindhastighet: {Math.round(windSpeed*10)/10} m/s</h5>
            <h5>Luftfuktighet: {Math.round(humidity*10)/10}%</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default CurrentWeather;
