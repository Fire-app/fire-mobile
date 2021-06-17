import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { AsyncStorage } from 'react-native';

// Our app is lightweight, so we import all translations up front.
import englishJson from '../../lang/en.json';
import spanishJson from '../../lang/es.json';
import chineseJson from '../../lang/zh.json';
import tagalogJson from '../../lang/tl.json';
import koreanJson from '../../lang/ko.json';
import { logError } from '../diagnostics/sentry';

const DEVICE_LOCALE = Localization.locale;

const STORED_LANGUAGE = 'STORED_LANGUAGE';

/**
 * Changes the language of the i18n context, and stores it for hydration later.
 * @param {string} locale
 */
export const changeLanguage = async (locale) => {
  await i18n.changeLanguage(locale);
  await AsyncStorage.setItem(STORED_LANGUAGE, locale);
};

/**
 * Changes the i18n language context to the previous language context stored.
 * Silently fails on error to not block app usage.
 */
export const rehydrateLanguageSelection = async () => {
  try {
    const locale = await AsyncStorage.getItem(STORED_LANGUAGE);
    await i18n.changeLanguage(locale);
  } catch (e) {
    logError(e, 'Failed to rehydrate language');
  }
};

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
    name: 'Español',
    translation: spanishJson,
  },
  ko: {
    name: '한글',
    translation: koreanJson,
  },
  tl: {
    name: 'Tagalog',
    translation: tagalogJson,
  },
  zh: {
    name: '中文',
    translation: chineseJson,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    // we do not use keys in form messages.welcome
    keySeparator: false,
    lng: DEVICE_LOCALE,
    resources,
  });

export default i18n;
