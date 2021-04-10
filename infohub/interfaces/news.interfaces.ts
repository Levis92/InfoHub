export interface ArticleSource {
  id: string;
  name: string;
}

export interface NewsArticle {
  title: string;
  author: string;
  content: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: ArticleSource;
}

export interface NewsResponse {
  articles: NewsArticle[];
  status: string;
  totalResults: number;
}
