import { CSSProperties } from 'react';

export interface BackgroundImageProps {
  show: boolean;
  image: string;
}

export function BackgroundImage({ show, image }: BackgroundImageProps) {
  const styles = {
    opacity: show ? 1 : 0.3,
    visibility: show ? 'visible' : 'hidden',
    background: `url(${image}) no-repeat center center fixed`,
  } as CSSProperties;
  return <div className="background-image" style={styles} />;
}
