export interface Cabin {
  id: number;
  title: string;
  capacity: number;
  price: number;
  description: string;
  imageUrl: string;
}

export type CapacityFilterType = 'increase' | 'decrease';

export type PriceFilterType = 'start' | 'end';
