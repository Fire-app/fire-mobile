import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

// Our app is lightweight, so we import all translations up front.
import englishJson from '../../lang/en.json';
import spanishJson from '../../lang/es.json';
import chineseJson from '../../lang/zh.json';
import tagalogJson from '../../lang/tl.json';
import koreanJson from '../../lang/ko.json';

const DEFAULT = 'en';
export const fallback = DEFAULT;

export const getLanguageOptions = () =>
  Object.keys(resources).map((locale) => ({
    locale,
    name: resources[locale].name,
  }));

export const resources = {
  en: {
    name: 'English',
    translation: englishJson,
  },
  es: {
    name: 'Espa\u00f1ol',
    translation: spanishJson,
  },
  ko: {
    name: '\ud55c\uae00',
    translation: koreanJson,
  },
  tl: {
    name: 'Tagalog',
    translation: tagalogJson,
  },
  zh: {
    name: '\u4e2d\u6587',
    translation: chineseJson,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    // we do not use keys in form messages.welcome
    keySeparator: false,
    lng: DEFAULT,
    resources,
  });

export default i18n;
