import React, { Component } from "react";
import "../../App.css";

class Clock extends Component {
  setTime() {
    var currentdate = new Date();
    var hours = currentdate.getHours();

    // correct for number over 24, and negatives
    if (hours >= 24) {
      hours -= 24;
    }
    if (hours < 0) {
      hours += 12;
    }

    // add leading zero, first convert hours to string
    hours = hours + "";
    if (hours.length === 1) {
      hours = "0" + hours;
    }

    // minutes are the same on every time zone
    var minutes = currentdate.getMinutes();

    // add leading zero, first convert hours to string
    minutes = minutes + "";
    if (minutes.length === 1) {
      minutes = "0" + minutes;
    }

    var seconds = currentdate.getSeconds();
    if (seconds < 10) seconds = "0" + seconds;
    this.setState({
      hours: hours,
      minutes: minutes,
      seconds: seconds
    });
  }

  setDate() {
    var currentdate = new Date();
    var date = currentdate.getDate();
    var month = currentdate.getMonth();
    var year = currentdate.getFullYear();
    var months = [
      "Januari",
      "Februari",
      "Mars",
      "April",
      "Maj",
      "Juni",
      "Juli",
      "Augusti",
      "September",
      "Oktober",
      "November",
      "December"
    ];
    month = months[month];

    this.setState({
      date: date,
      month: month,
      year: year
    });
  }

  componentWillMount() {
    this.setTime();
    this.setDate();
  }

  componentDidMount() {
    window.setInterval(
      function() {
        this.setTime();
        this.setDate();
      }.bind(this),
      1000
    );
  }

  render() {
    const {
      hours: HOURS,
      minutes: MINUTES,
      seconds: SECONDS,
      date: DATE,
      month: MONTH,
      year: YEAR
    } = this.state;

    return (
      <div className="widget clock">
        <div>
          <div className="time">
            {HOURS}:{MINUTES}:{SECONDS}
          </div>
          <div className="date">
            {DATE + " " + MONTH + " " + YEAR}
          </div>
        </div>
      </div>
    );
  }
}

export default Clock;
