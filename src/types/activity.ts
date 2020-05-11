import { BenefitType } from 'types/benefit';
import { CategoryType } from 'types/category';
import { ImageType } from 'types/image';

export interface Activity {
  id: string;
  nameLT: string;
  nameEN: string;
  descriptionLT: string;
  descriptionEN: string;
  capacity: number;
  price: number;
  category: CategoryType;
  address: string;
  thumbnail: ImageType;
  images: ImageType[];
  benefits: BenefitType[];
}
