import React, { Component } from "react";
import DepartureItem from "./departure-item";

class DepartureList extends Component {
  addDepartureItem() {
    let { data } = this.props;
    if (data) {
      return data.map((e, i) => <DepartureItem key={i} data={e} />);
    }
  }

  render() {
    return (
      <ul>
        {this.addDepartureItem()}
      </ul>
    );
  }
}

export default DepartureList;
