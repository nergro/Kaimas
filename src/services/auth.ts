import axios from 'axios';
import { toast } from 'react-toastify';
import { removeAuthStatus, removeToken, setAuthStatus, setToken } from 'services/localStorage';

export const handleLogin = async (
  email: string,
  password: string,
  errors: string[]
): Promise<string | null> => {
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
      return errors[0];
    } else return errors[1];
  }
};

export const handleRegistration = async (
  name: string,
  lastName: string,
  email: string,
  password: string,
  phone: string,
  errors: string[]
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
      return errors[0];
    } else if (err.response && err.response.status === 400) {
      return errors[1];
    } else return errors[2];
  }
};

export const handleLogout = (toastMessage: string): void => {
  removeToken();
  removeAuthStatus();
  toast.info(toastMessage);
};
