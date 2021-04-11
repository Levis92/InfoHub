import dayjs from 'dayjs';
import { getWeatherIconPath } from 'widgets/Weather/getIcon';
import { TimeLine } from 'interfaces';
import { WeatherLocation } from 'widget-settings';
import { useDayCycle } from 'widgets/Weather/DayCycleProvider';
import styles from './CurrentWeather.module.scss';

export interface CurrentWeatherProps {
  location: WeatherLocation;
  currently?: TimeLine;
}

export function CurrentWeather({ location, currently }: CurrentWeatherProps) {
  const { isDay, sunriseTime, sunsetTime } = useDayCycle();
  const { name: locationName, coordinates } = location;
  const [latitude, longitude] = coordinates.split(',');
  if (!currently) {
    return null;
  }

  const { temperature, windSpeed, weatherCode, humidity } =
    currently?.intervals?.[0]?.values ?? {};

  return (
    <div className={styles.currentWeather}>
      <div className={styles.main}>
        <h2>{locationName}</h2>
        <h6>
          {latitude},{longitude}
        </h6>
        <img src={getWeatherIconPath(weatherCode, isDay())} alt="" />
      </div>
      <div className={styles.sidebar}>
        <CurrentWeatherSummary
          temperature={temperature}
          windSpeed={windSpeed}
          humidity={humidity}
        />
        <SunCycle sunriseTime={sunriseTime} sunsetTime={sunsetTime} />
      </div>
    </div>
  );
}

interface CurrentWeatherSummaryProps {
  temperature: number;
  windSpeed: number;
  humidity: number;
}

function CurrentWeatherSummary({
  temperature,
  windSpeed,
  humidity,
}: CurrentWeatherSummaryProps) {
  return (
    <div className={styles.weatherSummary}>
      <h1>{Math.round(temperature)}°</h1>
      <h5>Vindhastighet: {Math.round(windSpeed * 10) / 10} m/s</h5>
      <h5>Luftfuktighet: {Math.round(humidity * 10) / 10}%</h5>
    </div>
  );
}

interface SunCycleProps {
  sunriseTime?: string;
  sunsetTime?: string;
}

function SunCycle({ sunriseTime, sunsetTime }: SunCycleProps) {
  const formatTime = (timestamp: string) => dayjs(timestamp).format('HH:mm');
  return (
    <div className={styles.sunCycle}>
      <span className={styles.sunrise}>
        <img src="/images/weather-icons/clear-day.png" />
        {sunriseTime && formatTime(sunriseTime)}
      </span>
      <span className={styles.sunset}>
        <img src="/images/weather-icons/clear-night.png" />
        {sunsetTime && formatTime(sunsetTime)}
      </span>
    </div>
  );
}
