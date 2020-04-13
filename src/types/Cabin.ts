import { ImageType } from 'types/image';

export interface Cabin {
  id: number;
  nameLT: string;
  nameEN: string;
  descriptionLT: string;
  descriptionEN: string;
  capacity: number;
  price: number;
  thumbnail: ImageType;
  images: string[];
}

export type CapacityFilterType = 'increase' | 'decrease';

export type PriceFilterType = 'start' | 'end';

export type CabinSection = 'About' | 'Perks' | 'Reviews';
