import { WidgetContainer } from 'common';
import { stops } from 'widget-settings';
import { BusStop } from './BusStop';
import styles from './Vasttrafik.module.scss';

export function Vasttrafik() {
  return (
    <WidgetContainer className={styles.vasttrafik}>
      {stops.map(({ name, id }) => (
        <BusStop key={id} name={name} id={id} />
      ))}
    </WidgetContainer>
  );
}
