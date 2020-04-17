import axios from 'axios';
import { getAuthStatus, getToken } from 'services/localStorage';

export const baseUrl = 'http://localhost:4000/api';
axios.defaults.baseURL = baseUrl;

const authStatus = getAuthStatus();
const token = getToken();
if (authStatus && token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
