import axios from 'axios';
import { Cabin } from 'types/cabin';

export const getCabins = async (): Promise<Cabin[]> => {
  const cabins = await axios.get<Cabin[]>('/cabin/all');
  return cabins.data;
};
