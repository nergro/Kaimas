import { Activity } from './activity';
import { AvailableDate } from './availableDate';
import { Cabin } from './cabin';

export interface Order {
  id: string;
  serviceId: Cabin | Activity;
  onModel: 'Cabin' | 'Activity';
  date: string;
  price: number;
  userId: string;
  reservedDates: AvailableDate[];
}
