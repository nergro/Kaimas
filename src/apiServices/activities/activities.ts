import axios from 'axios';
import { Activity } from 'types/activity';

export const getActivities = async (): Promise<Activity[]> => {
  const activities = await axios.get<Activity[]>('/activity/all');
  return activities.data;
};
