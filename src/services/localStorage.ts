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

export const setCabinReservationStatus = (status: boolean): void => {
  localStorage.setItem('hasCabinReservation', JSON.stringify(status));
};

export const removeCabinReservationStatus = (): void => {
  localStorage.removeItem('hasCabinReservation');
};

export const setActivityReservationStatus = (status: boolean): void => {
  localStorage.setItem('hasActivityReservation', JSON.stringify(status));
};

export const removeActivityReservationStatus = (): void => {
  localStorage.removeItem('hasActivityReservation');
};

export const getReservationStatus = (type: 'cabin' | 'activity'): boolean | undefined => {
  const hasReservation =
    type === 'activity'
      ? localStorage.getItem('hasActivityReservation')
      : localStorage.getItem('hasCabinReservation');
  if (hasReservation) {
    const parsedReservation: boolean = JSON.parse(hasReservation);
    return parsedReservation;
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
