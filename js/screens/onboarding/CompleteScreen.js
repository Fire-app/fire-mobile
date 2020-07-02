/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import { textStyles, colors, onboardingStyles } from '../../styles';

const CompleteScreen = () => {
  return (
    <View style={onboardingStyles.container}>
      <View style={styles.titleContainer}>
        <Text style={textStyles.h1}>{'Set up has completed!'}</Text>
      </View>
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
