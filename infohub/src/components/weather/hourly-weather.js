import React from "react";
import HourlyWeatherItem from "./hourly-weather-item";

const HourlyWeather = ({ data }) => {
  const addItems = () => {
    if (data) {
      return data
        .slice(0, 12)
        .map((e, i) => (
          <HourlyWeatherItem
            key={i}
            time={e.time}
            icon={e.icon}
            temperature={e.temperature}
          />
        ));
    }
  };

  return <div className="hourly-weather">{addItems()}</div>;
};

export default HourlyWeather;
