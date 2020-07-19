/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { useTranslation } from 'react-i18next';
import routes from '../../navigation/routes';
import { screenStyles } from '../../styles';
import PrimaryButton from '../../components/PrimaryButton';

const onboardingRoutes = routes.onboarding;

const IntroScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <View style={screenStyles.container}>
      <View style={screenStyles.contentContainer}>
        <Text>{'Intro'}</Text>
      </View>
      <PrimaryButton
        title="Continue"
        onPress={() => navigation.navigate(onboardingRoutes.toolkitIntro)}
        disabled={false}
      />
    </View>
  );
};

IntroScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default IntroScreen;
