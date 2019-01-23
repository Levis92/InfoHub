import React, { Component } from 'react';

const PromoLinks = () => {
  const links = [
    {
      name: 'Dark Sky',
      href: 'https://darksky.net/poweredby/'
    },
    {
      name: 'News API',
      href: 'https://newsapi.org/'
    }
  ];
  return (
    <div className="promo-links">
      {links.map((link, i) => (
        <a key={i} href={link.href}>
          {link.name}
        </a>
      ))}
    </div>
  );
};

const BackgroundImage = ({ show, image }) => {
  const styles = {
    opacity: show ? 1 : 0.3,
    visibility: show ? 'visible' : 'hidden',
    background: `url(${image}) no-repeat center center fixed`
  };
  return <div className="background-image" style={styles} />;
};

class Home extends Component {
  state = {
    images: [],
    index: 0
  };

  fetchWallpaper = () => {
    fetch('/unsplash/wallpaper')
      .then(response => response.json())
      .then(images => this.setState({ images }))
      .catch(error => console.error(error));
  };

  componentDidMount() {
    this.fetchWallpaper();
    this.imageInterval = setInterval(() => {
      this.setState(({ index, images }) => ({
        index: ++index % images.length
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
          <BackgroundImage key={i} show={index === i} image={image.urls.full} />
        ))}
        <PromoLinks />
      </div>
    );
  }
}

export default Home;
