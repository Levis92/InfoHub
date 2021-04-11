import { createContext, ReactNode, useContext } from 'react';
import { TimeLine } from 'interfaces';
import dayjs from 'dayjs';

export interface DayCycleContextState {
  sunriseTime?: string;
  sunsetTime?: string;
  isDay(timestanp?: string): boolean;
}

const DayCycleContext = createContext({});

export function useDayCycle(): DayCycleContextState {
  return useContext(DayCycleContext) as DayCycleContextState;
}

export interface DayCycleProviderProps {
  children: ReactNode;
  daylyTimelime?: TimeLine;
}

export function DayCycleProvider({
  children,
  daylyTimelime,
}: DayCycleProviderProps) {
  const sunriseTime =
    daylyTimelime?.timestep === '1d'
      ? daylyTimelime.intervals[0].values.sunriseTime
      : undefined;

  const sunsetTime =
    daylyTimelime?.timestep === '1d'
      ? daylyTimelime.intervals[0].values.sunsetTime
      : undefined;

  const isDay = (timestanp?: string) =>
    sunriseTime &&
    sunsetTime &&
    dayjs(timestanp).isAfter(sunriseTime) &&
    dayjs(timestanp).isBefore(sunsetTime);

  return (
    <DayCycleContext.Provider value={{ sunriseTime, sunsetTime, isDay }}>
      {children}
    </DayCycleContext.Provider>
  );
}
