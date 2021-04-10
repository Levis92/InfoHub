import { useEffect } from 'react';
import { QueryObserverResult, useQuery, useQueryClient } from 'react-query';
import { TwitterResponse } from 'interfaces';
import { request } from 'helpers/request';

export interface TwitterImagesSettings {
  twitterUser: string;
  rotateImages?: boolean;
  rotateIntervalInMS?: number;
  refetchInterval?: number;
}

export function useTwitterImages({
  twitterUser,
  rotateImages = true,
  rotateIntervalInMS = 10000,
  refetchInterval = 900000,
}: TwitterImagesSettings): QueryObserverResult<TwitterResponse, Error> {
  const queryResult = useQuery<TwitterResponse, Error>(
    ['twitter', twitterUser],
    () => request(`/api/twitter/${twitterUser}`),
    { refetchInterval }
  );
  const queryClient = useQueryClient();

  useEffect(() => {
    if (queryResult.isSuccess && rotateImages) {
      const twitterInterval = window.setInterval(() => {
        const cachedData = queryClient.getQueryData<TwitterResponse>([
          'twitter',
          twitterUser,
        ]);
        const firstImage = cachedData?.images.shift();
        if (cachedData && firstImage) {
          cachedData.images.push(firstImage);
          queryClient.setQueryData<TwitterResponse>(
            ['twitter', twitterUser],
            cachedData
          );
        }
      }, rotateIntervalInMS);
      return () => clearInterval(twitterInterval);
    }
  }, [twitterUser, queryResult.isSuccess]);

  return queryResult;
}
