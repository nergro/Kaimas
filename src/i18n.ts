import i18n from 'i18next';
import en from 'localization/en.json';
import lt from 'localization/lt.json';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: en,
  },
  lt: {
    translation: lt,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

// eslint-disable-next-line import/no-default-export
export default i18n;
