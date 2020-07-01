/* eslint-disable global-require */
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import routes from '../../navigation/routes';
import { textStyles, colors } from '../../styles';

const onBoardingRoutes = routes.onboarding;

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={textStyles.h1}>{'WelcomeScreen'}</Text>
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => navigation.navigate(onBoardingRoutes.language)}
      >
        <Text style={styles.text}>{'Next'}</Text>
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
  text: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 19,
    color: 'white',
    fontWeight: '500',
  },
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nextButton: {
    height: '10%',
    width: '90%',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
});
