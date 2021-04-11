import { CSSProperties } from 'react';
import styles from './BackgroundImage.module.scss';

export interface BackgroundImageProps {
  show: boolean;
  image: string;
}

export function BackgroundImage({ show, image }: BackgroundImageProps) {
  const targetImageStyles = {
    opacity: show ? 1 : 0.3,
    visibility: show ? 'visible' : 'hidden',
    background: `url(${image}) no-repeat center center fixed`,
  } as CSSProperties;
  return <div className={styles.backgroundImage} style={targetImageStyles} />;
}
