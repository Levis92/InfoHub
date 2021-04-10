import { useEffect } from 'react';
import { QueryObserverResult, useQuery, useQueryClient } from 'react-query';
import { NewsResponse } from 'interfaces';
import { request } from 'helpers/request';

export interface NewsArticlesSettings {
  rotateArticles?: boolean;
  rotateIntervalInMS?: number;
  refetchInterval?: number;
}

export function useNewsArticles({
  rotateArticles = true,
  rotateIntervalInMS = 15000,
  refetchInterval = 900000,
}: NewsArticlesSettings = {}): QueryObserverResult<NewsResponse, Error> {
  const queryResult = useQuery<NewsResponse, Error>(
    'news',
    () => request('/api/news'),
    { refetchInterval }
  );
  const queryClient = useQueryClient();

  useEffect(() => {
    if (queryResult.isSuccess && rotateArticles) {
      const articleInterval = setInterval(() => {
        const cachedData = queryClient.getQueryData<NewsResponse>('news');
        const firstArticle = cachedData?.articles.shift();
        if (cachedData && firstArticle) {
          cachedData.articles.push(firstArticle);
          queryClient.setQueryData<NewsResponse>('news', cachedData);
        }
      }, rotateIntervalInMS);
      return () => clearInterval(articleInterval);
    }
  }, [queryResult.data, queryResult.isSuccess]);

  return queryResult;
}
