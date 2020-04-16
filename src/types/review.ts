export interface Review {
  id: string;
  user: { name: string };
  serviceId: string;
  onModeL: string;
  date: string;
  rating: number;
  comment: string;
  recommend: boolean;
}
