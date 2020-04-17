import axios from 'axios';
import { getAuthStatus, getToken } from 'services/localStorage';

export const baseUrl = 'http://localhost:4000/api';
axios.defaults.baseURL = baseUrl;

const authStatus = getAuthStatus();
const token = getToken();
console.log(authStatus);
console.log(token);
if (authStatus && token) {
  console.log('HERE');
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
