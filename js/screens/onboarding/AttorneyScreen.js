/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { useTranslation } from 'react-i18next';

import routes from '../../navigation/routes';
import { onboardingStyles } from '../../styles';

import OnboardingTitle from '../../components/OnboardingTitle';
import OnboardingButtons from '../../components/OnboardingButtons';
import UseDefault from '../../components/UseDefault';
import AttorneyForm from '../../components/AttorneyForm';

const onBoardingRoutes = routes.onboarding;

const AttorneyScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <KeyboardAvoidingView
      // behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={[styles.container, { justifyContent: 'flex-end' }]}
    >
      <ScrollView contentContainerStyle={{ flex: 1 }}>
        <View style={onboardingStyles.contentContainer}>
          {/* <OnboardingTitle
            title={t('select_attorney')}
            subtitle={t('select_attorney_subtitle')}
          />
          <UseDefault
            title={t('use_default')}
            subtitle={t('attorney_default')}
          /> */}
          <AttorneyForm />
        </View>
        <View style={onboardingStyles.buttonContainer}>
          <OnboardingButtons
            onBackPress={() => navigation.pop()}
            onNextPress={() => navigation.navigate(onBoardingRoutes.complete)}
            nextIsDisabled={false}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

AttorneyScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default AttorneyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
});
