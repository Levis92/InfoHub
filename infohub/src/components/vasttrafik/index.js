import React, { Component } from 'react';
import BusStop from './bus-stop';
import { stops } from '../widget-settings';
import './vasttrafik.sass'


class Vasttrafik extends Component {
  addBusStops() {
    return stops.map( (e, i) => <BusStop key={i} data={e} />);
  }

  render() {
    return (
      <div className="widget vasttrafik">
        {this.addBusStops()}
      </div>
    );
  }
}

export default Vasttrafik;
