import { Locale } from 'types/locale';

export const setToken = (token: string): void => {
  localStorage.setItem('token', JSON.stringify(token));
};
export const removeToken = (): void => {
  localStorage.removeItem('token');
};

export const getToken = (): string | undefined => {
  const token = localStorage.getItem('token');
  if (token) {
    const parsedToken = JSON.parse(token);
    return parsedToken;
  } else return undefined;
};

export const setAuthStatus = (status: boolean): void => {
  localStorage.setItem('auth', JSON.stringify(status));
};
export const removeAuthStatus = (): void => {
  localStorage.removeItem('auth');
};

export const getAuthStatus = (): boolean | undefined => {
  const auth = localStorage.getItem('auth');
  if (auth) {
    const parsedAuth: boolean = JSON.parse(auth);
    return parsedAuth;
  } else return undefined;
};

export const setLocale = (locale: Locale): void => {
  localStorage.setItem('locale', JSON.stringify(locale));
};

export const getLocale = (): Locale | null => {
  const stringLocale = localStorage.getItem('locale');
  try {
    let json: Locale | null = null;
    if (stringLocale !== null) {
      json = JSON.parse(stringLocale) as Locale;
    }

    return json;
  } catch (err) {
    return null;
  }
};
