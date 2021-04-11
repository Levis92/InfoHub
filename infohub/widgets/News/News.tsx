import he from 'he';
import { useNewsArticles } from './useNewsArticles';
import styles from './News.module.scss';

export interface ArticleProps {
  title: string;
  description: string;
}

const Article = ({ title, description }: ArticleProps) => (
  <article>
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description && he.decode(description)}</p>
  </article>
);

export function News() {
  const { data, isSuccess } = useNewsArticles();

  const { articles = [] } = data ?? {};

  return (
    <div className={styles.news}>
      {isSuccess && articles?.length > 0 ? (
        articles?.map((article, i) => (
          <Article
            key={i}
            title={article.title}
            description={article.description}
          />
        ))
      ) : (
        <p className={styles.noNews}>No news at the moment</p>
      )}
    </div>
  );
}
