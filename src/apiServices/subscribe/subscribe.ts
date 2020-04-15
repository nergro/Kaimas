import axios from 'axios';

export const doSubscribe = async (email: string): Promise<string> => {
  const data = await axios.post<string>('/subscribe', { email });
  return data.data;
};

export const doCancellation = async (token: string): Promise<boolean> => {
  const data = await axios.post<string>(`/subscribe/${token}`);

  console.log(data);
  return true;
};
