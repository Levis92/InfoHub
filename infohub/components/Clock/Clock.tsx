import { ReactNode } from 'react';
import { useCurrentTime } from './useCurrentTime';
import styles from './Clock.module.scss';

export interface ClockProps {
  top?: ReactNode;
  bottom?: ReactNode;
}

export function Clock({ top, bottom }: ClockProps) {
  const time = useCurrentTime();

  return (
    <div className={`widget ${styles.clock}`}>
      {top}
      <div className={styles.timeDate}>
        <div className={styles.time}>{time.format('HH:mm:ss')}</div>
        <div className={styles.date}>{time.format('DD MMM YYYY')}</div>
      </div>
      {bottom}
    </div>
  );
}
