import dayjs from 'dayjs';
import { getWeatherIconPath } from 'widgets/Weather/getIcon';
import styles from './HourlyWeatherItem.module.scss';
import { useDayCycle } from 'widgets/Weather/DayCycleProvider';

export interface HourlyWeatherItemProps {
  time: string;
  icon: number;
  temperature: number;
}

export const HourlyWeatherItem = ({
  time,
  icon,
  temperature,
}: HourlyWeatherItemProps) => {
  const { isDay } = useDayCycle();

  const getTime = (timeString: string): string => {
    const time = dayjs(timeString);
    const now = dayjs();
    if (time.hour() === now.hour()) return 'Nu';
    return time.format('HH');
  };

  return (
    <div className={styles.hourlyWeatherItem}>
      <h5>{getTime(time)}</h5>
      <img src={getWeatherIconPath(icon, isDay(time))} alt="" />
      <h5>{Math.round(temperature)}°</h5>
    </div>
  );
};
