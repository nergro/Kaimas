import { ImageType } from 'types/image';

export interface Activity {
  id: string;
  nameLT: string;
  nameEN: string;
  descriptionLT: string;
  descriptionEN: string;
  capacity: number;
  price: number;
  category: string;
  address: string;
  thumbnail: ImageType;
  images: ImageType[];
}

export type CapacityFilterType = 'increase' | 'decrease';

export type PriceFilterType = 'start' | 'end';

export type ActivitySection = 'About' | 'Reviews';
