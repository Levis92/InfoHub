import { ReactNode } from 'react';
import { useBackgroundImages } from './useBackgroundImages';
import { useRotatingIndex } from './useRotatingIndex';
import { BackgroundImage } from './BackgroundImage';
import { PromoLinks } from './PromoLinks';

export interface HomeProps {
  children: ReactNode;
}

export function HomeLayout({ children }: HomeProps) {
  const { data: images = [] , isSuccess } = useBackgroundImages();
  const index = useRotatingIndex({ active: isSuccess, length: images.length });

  return (
    <div className="home">
      {images?.map((image, i) => (
        <BackgroundImage key={i} show={index === i} image={image.urls.full} />
      ))}
      {children}
      <PromoLinks />
    </div>
  );
}
