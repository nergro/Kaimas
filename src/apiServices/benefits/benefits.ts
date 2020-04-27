import axios from 'axios';
import { BenefitType } from 'types/benefit';

export const getBenefits = async (): Promise<BenefitType[]> => {
  const benefits = await axios.get<BenefitType[]>('/benefit/all');
  return benefits.data;
};
