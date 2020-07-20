/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import routes from '../../navigation/routes';
import { screenStyles } from '../../styles';
import LanguageList from '../../components/LanguageList';
import OnboardingTitle from '../../components/OnboardingTitle';
import PrimaryButton from '../../components/Buttons/PrimaryButton';

const onboardingRoutes = routes.onboarding;

const LanguageScreen = ({ navigation }) => {
  return (
    <View style={screenStyles.container}>
      <View style={screenStyles.contentContainer}>
        <OnboardingTitle
          title="Select your language"
          subtitle="You can change your language later in settings too!"
        />
        <LanguageList />
      </View>
      <PrimaryButton
        title="Continue"
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
