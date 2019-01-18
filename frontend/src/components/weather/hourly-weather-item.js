import React from "react";
import addIcon from "../../images/weather-icons/add-icons";

const HourlyWeatherItem = ({ time, icon, temperature }) => {
  const getTime = timeString => {
    const time = new Date(timeString * 1000).getHours();
    const actualTime = new Date().getHours();
    if (time === actualTime) return "Nu";
    if (time < 10) return `0${time}`;
    return time;
  };

  return (
    <div className="hourly-weather-item">
      <h5>{getTime(time)}</h5>
      <img src={addIcon(icon)} alt="" />
      <h5>{Math.round(temperature)}°</h5>
    </div>
  );
};

export default HourlyWeatherItem;
