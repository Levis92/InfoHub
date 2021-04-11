import { ReactNode } from 'react';
import { useBackgroundImages } from './useBackgroundImages';
import { useRotatingIndex } from './useRotatingIndex';
import { BackgroundImage } from './BackgroundImage';
import { PromoLinks } from './PromoLinks';
import styles from './HomeLayout.module.scss';

export interface HomeProps {
  children: ReactNode;
}

export function HomeLayout({ children }: HomeProps) {
  const { data: images = [], isSuccess } = useBackgroundImages();
  const index = useRotatingIndex({ active: isSuccess, length: images.length });

  return (
    <div className={styles.home}>
      {images?.map((image, imageIndex) => (
        <BackgroundImage
          key={imageIndex}
          show={index === imageIndex}
          image={image.urls.full}
        />
      ))}
      {children}
      <PromoLinks />
    </div>
  );
}
