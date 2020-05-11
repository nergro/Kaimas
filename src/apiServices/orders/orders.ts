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

export const getOrders = async (): Promise<Order[]> => {
  const orders = await axios.get<Order[]>(`/order`);
  return orders.data;
};

export const doOrderCancellation = async (token: string): Promise<boolean> => {
  try {
    await axios.post<string>(`/order/${token}`);
    return true;
  } catch (error) {
    return false;
  }
};
