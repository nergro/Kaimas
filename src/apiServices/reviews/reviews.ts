import axios from 'axios';
import moment from 'moment';
import { Review } from 'types/review';

export const getReviews = async (serviceId: string): Promise<Review[]> => {
  const reviews = await axios.get<Review[]>(`/review/${serviceId}`);
  return reviews.data;
};

export const writeReview = async (
  serviceId: string,
  serviceType: string,
  rating: number,
  comment: string,
  recommend: boolean
): Promise<number> => {
  const data = await axios.post<Review>('/review', {
    serviceId,
    serviceType,
    rating,
    date: moment().format('YYYY-MM-DD'),
    comment,
    recommend,
  });

  return data.status;
};
