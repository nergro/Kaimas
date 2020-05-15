import axios from 'axios';
import { AvailableDate } from 'types/availableDate';

export const getDatesById = async (serviceId: string): Promise<AvailableDate[]> => {
  const dates = await axios.get<AvailableDate[]>(`/availabledate/${serviceId}/service`);
  return dates.data;
};

type Response = {
  items: AvailableDate[];
  total: number;
};

export const getDates = async (): Promise<AvailableDate[]> => {
  const dates = await axios.get<Response>('/availabledate');
  return dates.data.items;
};
