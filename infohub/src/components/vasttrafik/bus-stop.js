import React, { Component } from "react";
import Header from "./header";
import DepartureList from "./departure-list";

class BusStop extends Component {
  state = {
    result: []
  };

  fetchData() {
    const { id } = this.props.data;
    fetch(`/vasttrafik/${id}`)
      .then(response => response.json())
      .then(json =>
        this.setState({
          result: json.Departure
        })
      );
  }

  componentWillMount() {
    this.fetchData();
  }

  componentDidMount() {
    window.setInterval(() => {
      this.fetchData();
    }, 5000);
  }

  render() {
    const { name } = this.props.data;
    const { result: RESULT } = this.state;

    return (
      <div>
        <Header busStop={name} />
        <DepartureList data={RESULT} />
      </div>
    );
  }
}

export default BusStop;
