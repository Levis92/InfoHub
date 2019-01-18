import React, { Component } from "react";
import { twitterUser } from "../widget-settings";
import "./twitter.sass";

class Twitter extends Component {
  state = {
    images: [],
    image: "",
    count: 0
  };

  fetchData() {
    fetch(`/twitter/${twitterUser}`)
      .then(response => response.json())
      .then(json =>
        this.setState({
          images: json.images,
          image: json.images[0],
          count: 0
        })
      );
  }

  componentWillMount() {
    this.fetchData();
  }

  componentDidMount() {
    window.setInterval(() => {
      let { count, images } = this.state;
      this.setState({
        image: images[count],
        count: ++count % images.length
      });
      if (count === 0) {
        this.fetchData();
      }
    }, 10000);
  }

  render() {
    const { image } = this.state;

    return (
      <div className="twitter-container">
        <div className="widget twitter">
          <img src={image} alt="" />
          <div>
            <h3>@{twitterUser}</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Twitter;
