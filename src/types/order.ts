import { AvailableDate } from './availableDate';

export interface Order {
  id: string;
  serviceId: string;
  onModel: 'Cabin' | 'Activity';
  date: string;
  price: number;
  userId: string;
  reservedDates: AvailableDate[];
}
