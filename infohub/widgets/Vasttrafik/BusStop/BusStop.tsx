import { DepartureItem } from './DepartureItem';
import { BusStopHeader } from './BusStopHeader';
import { useDepartures } from './useDepartures';

export interface BusStopProps {
  name: string;
  id: number;
}

export function BusStop({ id, name }: BusStopProps) {
  const { data: departures, isSuccess } = useDepartures({ stopId: id });

  return (
    <div>
      <BusStopHeader busStop={name} />
      <ul>
        {isSuccess && departures?.map((departure) => (
          <DepartureItem key={departure.journeyid} departure={departure} />
        ))}
      </ul>
    </div>
  );
}
