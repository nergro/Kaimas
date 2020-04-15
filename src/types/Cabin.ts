import { BenefitType } from 'types/benefit';
import { ImageType } from 'types/image';

export interface Cabin {
  id: string;
  nameLT: string;
  nameEN: string;
  descriptionLT: string;
  descriptionEN: string;
  capacity: number;
  price: number;
  address: string;
  thumbnail: ImageType;
  images: ImageType[];
  benefits: BenefitType[];
}

export type CapacityFilterType = 'increase' | 'decrease';

export type PriceFilterType = 'start' | 'end';
