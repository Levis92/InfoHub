import { QueryObserverResult, useQuery } from 'react-query';
import { UnsplashImageData } from 'interfaces';
import { request } from 'helpers/request';

export interface BackgroundImagesSettings {
  refetchInterval?: number;
}

export function useBackgroundImages({
  refetchInterval = 3600000,
}: BackgroundImagesSettings = {}): QueryObserverResult<
  UnsplashImageData[],
  Error
> {
  return useQuery<UnsplashImageData[], Error>(
    'wallpaper',
    () => request('/api/unsplash/wallpaper'),
    { refetchInterval }
  );
}
