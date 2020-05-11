import axios from 'axios';
import { CategoryType } from 'types/category';

type CategoryResponse = {
  items: CategoryType[];
  total: number;
};

export const getCategories = async (): Promise<CategoryType[]> => {
  const categories = await axios.get<CategoryResponse>('/activityCategory');
  return categories.data.items;
};
