import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { colors } from '../styles';

const OnboardingButtons = ({
  onRightPress,
  onLeftPress,
  rightTitle,
  leftTitle,
  nextIsDisabled,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onRightPress}>
        <Text style={[styles.buttonText, styles.backButtonText]}>
          {rightTitle}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.nextButton,
          nextIsDisabled ? styles.nextButtonDisabled : null,
        ]}
        onPress={onLeftPress}
        disabled={nextIsDisabled}
      >
        <Text style={[styles.buttonText, styles.nextButtonText]}>
          {leftTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

OnboardingButtons.propTypes = {
  onRightPress: PropTypes.func.isRequired,
  onLeftPress: PropTypes.func.isRequired,
  nextIsDisabled: PropTypes.bool.isRequired,
  rightTitle: PropTypes.string.isRequired,
  leftTitle: PropTypes.string.isRequired,
};

export default OnboardingButtons;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    height: '100%',
    width: '48%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  nextButton: {
    height: '100%',
    width: '45%',
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
  },
  nextButtonDisabled: {
    backgroundColor: colors.buttonDisabled,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Roboto_500Medium',
  },
  backButtonText: {
    color: colors.primary,
  },
  nextButtonText: {
    color: 'white',
  },
});
