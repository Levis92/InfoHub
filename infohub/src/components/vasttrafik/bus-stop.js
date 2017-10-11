import React, { Component } from "react";
import "../../App.css";
import Header from "./header";
import DepartureList from "./departure-list";
import { API } from "../widget-settings";
import request from "superagent";

class BusStop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: []
    };
  }

  fetchData() {
    const { id } = this.props.data;
    request.get(API + "/vasttrafik/" + id).accept("json").end((err, res) => {
      if (res) {
        res = JSON.parse(res.text);
        this.setState({
          result: res.Departure
        });
      }
    });
  }

  componentWillMount() {
    this.fetchData();
  }

  componentDidMount() {
    window.setInterval(
      function() {
        this.fetchData();
      }.bind(this),
      5000
    );
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
