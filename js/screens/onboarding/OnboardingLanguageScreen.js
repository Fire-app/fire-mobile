import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import ListSelector from '../../components/ListSelector';
import OnboardingTemplate from './Template';
import OnboardingTitle from '../../components/OnboardingTitle';
import i18n, { getLanguageOptions, changeLanguage } from '../../config/i18n';
import routes from '../../navigation/routes';

const onboardingRoutes = routes.onboarding;

// TODO: Add these conversions for more system languages.
// This acts as a funnel from system languages, with multiple locales, to
// our finite set where appropriate. (e.g. various englishes should be converted to "en")
// Without this, the app will start without a selected language.
const systemLanguageToInternalLocale = (locale) => {
  if (locale === 'en-US') return 'en';
  return locale;
};

const LanguageScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    systemLanguageToInternalLocale(i18n.language)
  );

  useEffect(() => {
    changeLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const onLanguageChange = ({ item }) => {
    setSelectedLanguage(item.locale);
  };

  return (
    <OnboardingTemplate
      primaryButton={{
        onPress: () => navigation.navigate(onboardingRoutes.welcome),
        title: t('continue'),
      }}
    >
      <ListSelector
        data={getLanguageOptions()}
        defaultKey={i18n.language}
        keyExtractor={({ locale }, i) => `${locale}:${i}`}
        listHeaderComponent={
          <OnboardingTitle
            subtitle={t('select_language_subtitle')}
            title={t('select_language')}
          />
        }
        onChange={onLanguageChange}
        selectedExtractor={({ item }) => item.locale}
        titleExtractor={({ item }) => item.name}
      />
    </OnboardingTemplate>
  );
};

LanguageScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default LanguageScreen;
