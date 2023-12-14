import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // .use - это подключение плагинов
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    // Язык по умолчанию
    fallbackLng: 'ru',
    debug: __IS_DEV__, // debug будет работать только в dev режиме

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
