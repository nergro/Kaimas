import axios from 'axios';
import { Review } from 'types/review';

export const getReviews = async (serviceId: string): Promise<Review[]> => {
  const reviews = await axios.get<Review[]>(`/review/${serviceId}`);
  return reviews.data;
};
