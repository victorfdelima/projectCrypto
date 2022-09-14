import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { messages } from './languages';

const currentLanguage = localStorage.getItem('i18nextLng') || 'en-US';

function getResource(key) {
  const languages = {
    'en-US': 'en',
    'pt-BR': 'pt',
    'es-ES': 'es',
  };

  return languages[key];
}

i18n.use(initReactI18next).init({
  lng: getResource(currentLanguage),
  resources: {
    en: messages.en,
    pt: messages.pt,
    es: messages.es
  },
  react: {
    useSuspense: false,
  },
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
