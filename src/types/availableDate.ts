import { Cabin } from './cabin';
export interface AvailableDate {
  id: string;
  serviceId: Cabin;
  date: string;
  onModel: 'Cabin' | 'Activity';
}
