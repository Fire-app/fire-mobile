/* eslint-disable global-require */
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import routes from '../../navigation/routes';
import { textStyles, colors, screenStyles } from '../../styles';

const onBoardingRoutes = routes.onboarding;

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={screenStyles.container}>
      <View
        style={[screenStyles.onboardingContentContainer, styles.welcomeMessage]}
      >
        <Text style={textStyles.h1}>{'Welcome to Fire!'}</Text>
      </View>
      <TouchableOpacity
        style={[screenStyles.onboardingButtonContainer, styles.continueButton]}
        onPress={() => navigation.navigate(onBoardingRoutes.language)}
      >
        <Text style={[textStyles.h3, { color: 'white' }]}>{'Continue'}</Text>
      </TouchableOpacity>
    </View>
  );
};

WelcomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  welcomeMessage: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  continueButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: colors.primary,
  },
});
