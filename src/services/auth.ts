import axios from 'axios';
import { toast } from 'react-toastify';
import { removeAuthStatus, removeToken, setAuthStatus, setToken } from 'services/localStorage';

export const handleLogin = async (email: string, password: string): Promise<string | null> => {
  try {
    const {
      data: { token },
    } = await axios.post('/user/login', { email, password });
    setToken(token);
    setAuthStatus(true);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return null;
  } catch (err) {
    if (err.response && err.response.status === 401) {
      return 'Invalid credentials';
    } else return 'Network error';
  }
};

export const handleRegistration = async (
  name: string,
  lastName: string,
  email: string,
  password: string,
  phone: string
): Promise<string | null> => {
  try {
    const {
      data: { token },
    } = await axios.post('/user/register', { name, lastName, email, password, phone });
    setToken(token);
    setAuthStatus(true);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    return null;
  } catch (err) {
    if (err.response && err.response.status === 409) {
      return 'User already exists';
    } else if (err.response && err.response.status === 400) {
      return 'Entered data is not correct';
    } else return 'Network error';
  }
};

export const handleLogout = (): void => {
  removeToken();
  removeAuthStatus();
  toast.info(`You logged out`);
};
