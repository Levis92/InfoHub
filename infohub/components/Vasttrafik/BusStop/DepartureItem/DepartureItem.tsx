import dayjs, { Dayjs } from 'dayjs';
import { Accessibility, Departure } from 'interfaces';
import styles from '../../Vasttrafik.module.scss';

export interface DepartureItemProps {
  departure: Departure;
}

export function DepartureItem({ departure }: DepartureItemProps) {
  const checkAccessibility = (accessibility: Accessibility) => {
    const getIcon = () => {
      switch (accessibility) {
        case 'wheelChair':
          return 'wheelchair';
        case 'lowCarriage':
          return 'universal-access';
        default:
          return;
      }
    };
    const icon = getIcon();
    return (
      icon && <i className={`${styles.accessibilityIcon} fa fa-${icon}`} />
    );
  };

  const checkTime = (time: Dayjs) => {
    const now = dayjs();
    let result = time.isValid() ? time.fromNow() : '';
    if (now.diff(time, 'seconds') >= 0) {
      result = 'Nu';
    }
    return <span>{result}</span>;
  };

  const {
    bgColor,
    fgColor,
    sname,
    direction,
    track,
    rtDate,
    rtTime,
    nextRtDate,
    nextRtTime,
    accessibility,
    nextAccessibility,
  } = departure;

  const spanStyle = {
    color: bgColor,
    backgroundColor: fgColor,
    padding: '0.1em 0.3em',
    borderRadius: '0.2em',
  };

  const now = [rtDate, rtTime].join(' ');
  const next = [nextRtDate, nextRtTime].join(' ');
  const time = dayjs(now, 'YYYY-MM-DD HH:mm');
  const nextTime = dayjs(next, 'YYYY-MM-DD HH:mm');

  return (
    <li className={styles.widgetListItem}>
      <div className={styles.line}>
        <span style={spanStyle}>{sname}</span>
      </div>
      <div className={styles.destination}>{direction}</div>
      <div className={styles.track}>{track}</div>
      <div className={styles.departs}>
        {checkAccessibility(accessibility)}
        {checkTime(time)}
      </div>
      <div className={styles.nextDeparture}>
        {checkAccessibility(nextAccessibility)}
        {checkTime(nextTime)}
      </div>
    </li>
  );
};

export default DepartureItem;
