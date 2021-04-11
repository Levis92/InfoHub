import { useEffect, useState } from 'react';

export interface RotatingIndexSettings {
  active?: boolean;
  length?: number;
  rotateIntervalInMS?: number;
}

export function useRotatingIndex({
  active = true,
  length = 99,
  rotateIntervalInMS = 30000,
}: RotatingIndexSettings = {}): number {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (active) {
      const imageInterval = setInterval(() => {
        setIndex((index) => (index + 1) % length);
      }, rotateIntervalInMS);
      return () => clearInterval(imageInterval);
    }
  }, [active, length]);

  return index;
}
