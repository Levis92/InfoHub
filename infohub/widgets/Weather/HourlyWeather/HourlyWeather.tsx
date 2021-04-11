import { Interval } from 'interfaces';
import { HourlyWeatherItem } from './HourlyWeatherItem';
import styles from './HourlyWeather.module.scss';

export interface HourlyWeatherProps {
  intervals?: Interval[];
}

export function HourlyWeather({ intervals }: HourlyWeatherProps) {
  return (
    <div className={styles.hourlyWeather}>
      {intervals?.slice(0, 12)?.map(({ startTime, values }) => (
        <HourlyWeatherItem
          key={startTime}
          time={startTime}
          icon={values.weatherCode}
          temperature={values.temperature}
        />
      ))}
    </div>
  );
}
