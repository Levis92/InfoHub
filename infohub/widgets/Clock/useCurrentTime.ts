import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';

export function useCurrentTime(): Dayjs {
  const [currentTime, setCurrentTime] = useState(dayjs());

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(dayjs());
    }, 1000);
    return () => clearInterval(timeInterval);
  }, []);

  return currentTime;
}
