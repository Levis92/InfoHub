import React from "react";
import BusStop from "./bus-stop";
import { stops } from "../widget-settings";
import "./vasttrafik.sass";

const Vasttrafik = () => {
  const addBusStops = () => {
    return stops.map((e, i) => <BusStop key={i} data={e} />);
  };

  return <div className="widget vasttrafik">{addBusStops()}</div>;
};

export default Vasttrafik;
