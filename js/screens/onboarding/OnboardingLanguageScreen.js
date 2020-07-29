import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import i18n, { getLanguageOptions } from '../../config/i18n';
import routes from '../../navigation/routes';
import ListSelector from '../../components/ListSelector';
import OnboardingTemplate from './Template';
import OnboardingTitle from '../../components/OnboardingTitle';

const onboardingRoutes = routes.onboarding;

const LanguageScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
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
      <OnboardingTitle
        title={t('select_language')}
        subtitle={t('select_language_subtitle')}
      />
      <ListSelector
        defaultKey={i18n.language}
        onChange={onLanguageChange}
        data={getLanguageOptions()}
        keyExtractor={({ locale }, i) => `${locale}:${i}`}
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
