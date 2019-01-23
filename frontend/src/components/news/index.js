import React from 'react';
import './news.sass';
import he from 'he';

const Article = ({ title, description }) => (
  <>
    <h3 className="title">{title}</h3>
    <p className="description">{description && he.decode(description)}</p>
  </>
);

class News extends React.Component {
  state = {
    articles: []
  };

  fetchNews = () => {
    fetch('/news')
      .then(response => response.json())
      .then(({ articles }) => this.setState({ articles }))
      .catch(error => console.error(error));
  };

  componentDidMount() {
    this.fetchNews();
    this.articleInterval = setInterval(() => {
      this.setState(({ articles }) => {
        const firstArticle = articles.shift();
        articles.push(firstArticle);
        return { articles };
      });
    }, 15000);
    this.fetchInterval = setInterval(() => this.fetchNews(), 900000);
  }

  componentWillUnmount() {
    clearInterval(this.fetchInterval);
    clearInterval(this.articleInterval);
  }
  render() {
    const { articles } = this.state;

    return (
      <div className="news">
        {articles.length > 0 ? (
          articles.map((article, i) => (
            <Article
              key={i}
              title={article.title}
              description={article.description}
            />
          ))
        ) : (
          <p className="no-news">No news at the moment</p>
        )}
      </div>
    );
  }
}

export default News;
