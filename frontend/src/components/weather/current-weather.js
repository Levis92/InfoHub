import React from "react";
import addIcon from "../../images/weather-icons/add-icons";

const CurrentWeather = ({ data, location, currently }) => {
  const { name: locationName } = location;
  const { latitude, longitude } = data;
  const { icon, temperature, summary, windSpeed, humidity } = currently;

  const checkLength = (input, maxLength) => input && input.length > maxLength;

  return (
    <div className="current-weather">
      <div className="main">
        <h2>{locationName}</h2>
        <h6>
          {latitude},{longitude}
        </h6>
        <img src={addIcon(icon)} alt="" />
      </div>
      <div className="sidebar">
        <div>
          <h1>{Math.round(temperature)}°</h1>
          {checkLength(summary, 16) ? (
            <h4 style={{ fontSize: 0.8 + "rem" }}>{summary}</h4>
          ) : (
            <h4>{summary}</h4>
          )}
          <h5>Vindhastighet: {Math.round(windSpeed * 10) / 10} m/s</h5>
          <h5>Luftfuktighet: {Math.round(humidity * 1000) / 10}%</h5>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;