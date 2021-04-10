import { QueryObserverResult, useQuery } from 'react-query';
import { Departure } from 'interfaces';
import { request } from 'helpers/request';

export interface DeparturesSettings {
  stopId: number;
  refetchInterval?: number;
}

export function useDepartures({
  stopId,
  refetchInterval = 5000,
}: DeparturesSettings): QueryObserverResult<Departure[], Error> {
  return useQuery<Departure[], Error>(
    ['vasttrafik', stopId],
    () => request(`/api/vasttrafik/${stopId}`),
    { refetchInterval }
  );
}
