/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import routes from '../../navigation/routes';
import { onboardingStyles } from '../../styles';

import LanguageList from '../../components/LanguageList';
import OnboardingTitle from '../../components/OnboardingTitle';
import OnboardingButtons from '../../components/OnboardingButtons';

const onBoardingRoutes = routes.onboarding;

const LanguageScreen = ({ navigation }) => {
  return (
    <View style={onboardingStyles.container}>
      <View style={onboardingStyles.contentContainer}>
        <OnboardingTitle
          title="Select your language"
          subtitle="You can change your language later in settings too!"
        />
        <View style={styles.languageList}>
          <LanguageList />
        </View>
      </View>
      <View style={onboardingStyles.buttonContainer}>
        <OnboardingButtons
          onBackPress={() => navigation.pop()}
          onNextPress={() => navigation.navigate(onBoardingRoutes.hotline)}
        />
      </View>
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

const styles = StyleSheet.create({
  languageList: {
    flex: 1,
    width: '100%',
  },
});
