/* eslint-disable global-require */
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import routes from '../../navigation/routes';
import { textStyles, colors, onboardingStyles } from '../../styles';

const onBoardingRoutes = routes.onboarding;

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={onboardingStyles.container}>
      <View style={styles.titleContainer}>
        <Text style={textStyles.h1}>{'Welcome to Fire!'}</Text>
      </View>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate(onBoardingRoutes.hotline)}
      >
        <Text style={styles.buttonText}>{'Continue'}</Text>
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
  titleContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  nextButton: {
    height: '8%',
    width: '95%',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  buttonText: {
    fontFamily: 'Roboto_500Medium',
    fontSize: 16,
    color: 'white',
  },
});
