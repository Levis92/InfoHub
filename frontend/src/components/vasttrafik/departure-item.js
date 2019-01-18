import React from "react";
import "font-awesome/css/font-awesome.css";
const moment = require("moment");
require("moment/locale/sv.js");
moment.locale("sv");

moment.updateLocale("sv", {
  relativeTime: {
    future: "%s",
    past: "%s sedan",
    s: "Nu",
    ss: "%d s",
    m: "1 min",
    mm: "%d min",
    h: "1 tim",
    hh: "%d tim"
  }
});

const DepartureItem = ({ data }) => {
  const checkAccessibility = accessibility => {
    const getIcon = () => {
      switch (accessibility) {
        case "wheelChair":
          return "wheelchair";
        case "lowCarriage":
          return "universal-access";
        default:
          return;
      }
    };
    const icon = getIcon();
    return icon && <i className={`accessibility-icon fa fa-${icon}`} />;
  };

  const checkTime = time => {
    const now = moment();
    let result = time.isValid() ? time.fromNow() : "";
    if (now.diff(time, "seconds") >= 0) {
      result = "Nu";
    }
    return <span>{result}</span>;
  };

  const {
    bgColor,
    fgColor,
    sname,
    direction,
    track,
    rtDate,
    rtTime,
    nextRtDate,
    nextRtTime,
    accessibility,
    nextAccessibility
  } = data;

  const spanStyle = {
    color: bgColor,
    backgroundColor: fgColor,
    padding: "0.1em 0.3em",
    borderRadius: "0.2em"
  };

  const now = [rtDate, rtTime].join(" ");
  const next = [nextRtDate, nextRtTime].join(" ");
  const time = moment(now, "YYYY-MM-DD HH:mm");
  const nextTime = moment(next, "YYYY-MM-DD HH:mm");

  return (
    <li className="widget-list-item">
      <div className="line">
        <span style={spanStyle}>{sname}</span>
      </div>
      <div className="destination">{direction}</div>
      <div className="track">{track}</div>
      <div className="departs">
        {checkAccessibility(accessibility)}
        {checkTime(time)}
      </div>
      <div className="next-departure">
        {checkAccessibility(nextAccessibility)}
        {checkTime(nextTime)}
      </div>
    </li>
  );
};

export default DepartureItem;
