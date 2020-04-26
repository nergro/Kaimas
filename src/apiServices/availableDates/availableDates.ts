import axios from 'axios';
import { AvailableDate } from 'types/availableDate';

export const getDates = async (serviceId: string): Promise<AvailableDate[]> => {
  const dates = await axios.get<AvailableDate[]>(`/availabledate/${serviceId}/service`);
  return dates.data;
};
