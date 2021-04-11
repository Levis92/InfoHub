import { CurrentWeather } from './CurrentWeather';
import { HourlyWeather } from './HourlyWeather';
import { weatherLocation } from 'widget-settings';
import { useWeatherData } from './useWeatherData';
import { DayCycleProvider } from './DayCycleProvider';
import { WidgetContainer } from 'common';
import styles from './Weather.module.scss';

export function Weather() {
  const { data } = useWeatherData({ coordinates: weatherLocation.coordinates });

  const currentTimeline = data?.data?.timelines?.find(
    ({ timestep }) => timestep === 'current'
  );
  const hourlyTimeline = data?.data?.timelines?.find(
    ({ timestep }) => timestep === '1h'
  );
  const daylyTimeline = data?.data?.timelines?.find(
    ({ timestep }) => timestep === '1d'
  );

  return (
    <WidgetContainer className={styles.weather}>
      <DayCycleProvider daylyTimelime={daylyTimeline}>
        <CurrentWeather
          location={weatherLocation}
          currently={currentTimeline}
        />
        <HourlyWeather intervals={hourlyTimeline?.intervals} />
      </DayCycleProvider>
    </WidgetContainer>
  );
}


