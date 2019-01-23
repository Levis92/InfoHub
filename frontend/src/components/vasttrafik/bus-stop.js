import React, { Component } from 'react';
import Header from './header';
import DepartureList from './departure-list';

class BusStop extends Component {
  state = {
    departure: []
  };

  fetchData() {
    const { id } = this.props.data;
    fetch(`/vasttrafik/${id}`)
      .then(response => response.json())
      .then(({ Departure }) =>
        this.setState({
          departure: Departure
        })
      )
      .catch(error => console.error(error));
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
    const { departure } = this.state;

    return (
      <div>
        <Header busStop={name} />
        <DepartureList data={departure} />
      </div>
    );
  }
}

export default BusStop;
