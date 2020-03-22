export interface Cabin {
  id: number;
  title: string;
  capacity: number;
  price: number;
  description: string;
  thumbnail: string;
  images: string[];
}

export type CapacityFilterType = 'increase' | 'decrease';

export type PriceFilterType = 'start' | 'end';

export type CabinSection = 'About' | 'Perks' | 'Reviews';
