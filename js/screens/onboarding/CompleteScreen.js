/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import completeOnboardingAction from '../../store/actions/completeOnboarding';

import { textStyles, colors, onboardingStyles } from '../../styles';

const CompleteScreen = () => {
  const dispatch = useDispatch();
  const exitOnboarding = () => dispatch(completeOnboardingAction());

  return (
    <View style={onboardingStyles.container}>
      <View style={styles.titleContainer}>
        <Text style={textStyles.h1}>{'Set up has completed!'}</Text>
      </View>
      <TouchableOpacity style={styles.nextButton} onPress={exitOnboarding}>
        <Text style={styles.buttonText}>{'Complete Onboarding'}</Text>
      </TouchableOpacity>
    </View>
  );
};

CompleteScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default CompleteScreen;

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
