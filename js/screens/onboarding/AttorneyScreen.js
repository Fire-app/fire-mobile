/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

import routes from '../../navigation/routes';
import { onboardingStyles } from '../../styles';

import OnboardingTitle from '../../components/OnboardingTitle';
import OnboardingButtons from '../../components/OnboardingButtons';
import UseDefault from '../../components/UseDefault';

const onBoardingRoutes = routes.onboarding;

const AttorneyScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <View style={onboardingStyles.container}>
      <View style={onboardingStyles.contentContainer}>
        <OnboardingTitle
          title={t('select_attorney')}
          subtitle={t('select_attorney_subtitle')}
        />
        <View>
          <UseDefault
            title={t('use_default')}
            subtitle={t('attorney_default')}
          />
        </View>
      </View>
      <View style={onboardingStyles.buttonContainer}>
        <OnboardingButtons
          onBackPress={() => navigation.pop()}
          onNextPress={() => navigation.navigate(onBoardingRoutes.complete)}
          nextIsDisabled={false}
        />
      </View>
    </View>
  );
};

AttorneyScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default AttorneyScreen;
