export interface ImageUrls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface ImagePosition {
  latitude: number;
  longitude: number;
}

export interface ImageLocation {
  country: string;
  name: string;
  title: string;
  city: string;
  posistion: ImagePosition;
}

export interface ImageCreator {
  id: string;
  name: string;
  username: string;
  location: string;
}

export interface UnsplashImageData {
  id: string;
  alt_description: string;
  description: string;
  blur_hash: string;
  color: string;
  urls: ImageUrls;
  location: ImageLocation;
  user: ImageCreator;
  height: number;
  width: number;
  created_at: string;
  updated_at: string;
}
