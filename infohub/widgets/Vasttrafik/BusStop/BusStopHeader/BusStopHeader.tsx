import styles from '../BusStop.module.scss';

export interface HeaderProps {
  busStop: string;
}

export function BusStopHeader({ busStop }: HeaderProps) {
  return (
    <div className={`${styles.vasttrafikHeader} widget-header`}>
      <h5 className={styles.busStop}>{busStop}</h5>
      <li>
        <div className={styles.line}>Linje</div>
        <div className={styles.destination}>Riktning</div>
        <div className={styles.track}>Läge</div>
        <div className={styles.departs}>Avgår om</div>
        <div className={styles.nextDeparture}>Nästa tur</div>
      </li>
    </div>
  );
}
