import axios from 'axios';
import moment from 'moment';
import { Order } from 'types/order';

export const createOrder = async (
  datesIds: string[],
  serviceId: string,
  serviceType: string,
  price: number
): Promise<number> => {
  const data = await axios.post<Order>('/order', {
    datesIds,
    serviceId,
    onModel: serviceType,
    price,
    date: moment().format('YYYY-MM-DD'),
  });

  return data.status;
};
