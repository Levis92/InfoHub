import React, { Component } from "react";

class Home extends Component {
  state = {
    images: [],
    index: 0
  };

  fetchWallpaper = () => {
    fetch("/unsplash/wallpaper")
      .then(response => response.json())
      .then(json =>
        this.setState({ images: json.map(image => image.urls.full) })
      )
      .catch(error => console.error(error));
  };

  componentDidMount() {
    this.fetchWallpaper();
    this.imageInterval = setInterval(() => {
      this.setState(state => ({
        index: ++state.index % state.images.length
      }));
    }, 30000);
    this.fetchInterval = setInterval(() => {
      this.fetchWallpaper();
    }, 3600000);
  }

  componentWillUnmount() {
    clearInterval(this.imageInterval);
    clearInterval(this.fetchInterval);
  }

  render() {
    const { images, index } = this.state;
    return (
      <div className="home">
        {images.map((image, i) => (
          <BackgroundImage key={i} show={index === i} image={image} />
        ))}
        {this.props.children}
      </div>
    );
  }
}

const BackgroundImage = ({ show, image }) => {
  const styles = {
    opacity: show ? 1 : 0.3,
    visibility: show ? "visible" : "hidden",
    background: `url(${image}) no-repeat center center fixed`,
  };
  return <div className="background-image" style={styles} />;
};

export default Home;
