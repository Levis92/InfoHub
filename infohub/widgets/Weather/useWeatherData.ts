import { QueryObserverResult, useQuery } from 'react-query';
import { WeatherResponse } from 'interfaces';
import { request } from 'helpers/request';

export interface WeatherDataSettings {
  coordinates: string;
  refetchInterval?: number;
}

const latLongRegex = /^[-+]?([1-8]?\d(\.\d+)?|90(\.0+)?),\s*[-+]?(180(\.0+)?|((1[0-7]\d)|([1-9]?\d))(\.\d+)?)$/;

export function useWeatherData({
  coordinates,
  refetchInterval = 300000,
}: WeatherDataSettings): QueryObserverResult<WeatherResponse, Error> {
  return useQuery<WeatherResponse, Error>(
    ['weather', coordinates],
    () => request(`/api/weather/${coordinates}`),
    { refetchInterval, enabled: !!coordinates?.match(latLongRegex) }
  );
}
