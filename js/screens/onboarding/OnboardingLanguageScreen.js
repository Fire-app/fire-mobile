/* eslint-disable global-require */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import i18n, { resources } from '../../config/i18n';
import routes from '../../navigation/routes';
import { screenStyles } from '../../styles';
import ListSelector from '../../components/ListSelector';
import OnboardingTitle from '../../components/OnboardingTitle';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const onboardingRoutes = routes.onboarding;

const LANGUAGE_OPTIONS = Object.keys(resources).map((locale) => ({
  locale,
  name: resources[locale].name,
}));

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
    <View style={screenStyles.container}>
      <View style={screenStyles.contentContainer}>
        <OnboardingTitle
          title={t('select_language')}
          subtitle={t('select_language_subtitle')}
        />
        <ListSelector
          defaultKey={i18n.language}
          onChange={onLanguageChange}
          data={LANGUAGE_OPTIONS}
          keyExtractor={({ locale }, i) => `${locale}:${i}`}
          selectedExtractor={({ item }) => item.locale}
          titleExtractor={({ item }) => item.name}
        />
      </View>
      <PrimaryButton
        title={t('continue')}
        onPress={() => navigation.navigate(onboardingRoutes.welcome)}
      />
    </View>
  );
};

LanguageScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default LanguageScreen;
