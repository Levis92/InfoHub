import { BusStop } from './BusStop';
import { stops } from 'widget-settings';
import styles from './Vasttrafik.module.scss';

export function Vasttrafik() {
  return (
    <div className={`widget ${styles.vasttrafik}`}>
      {stops.map(({ name, id }) => (
        <BusStop key={id} name={name} id={id} />
      ))}
    </div>
  );
};
