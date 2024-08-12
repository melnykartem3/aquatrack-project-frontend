import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

import enTranslation from '../locales/en/translation.json';
import ukTranslation from '../locales/uk/translation.json';

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      uk: {
        translation: ukTranslation,
      },
    },
    lng: 'en',
    fallbackLng: 'uk',
    debug: false,
    react: {
      useSuspense: false,
    },
  });

export default i18n;
