import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { colors } from '../styles';

const OnboardingButtons = ({ onBackPress, onNextPress, nextIsDisabled }) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
        <Text style={[styles.buttonText, styles.backButtonText]}>
          {t('back')}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.nextButton,
          nextIsDisabled ? styles.nextButtonDisabled : null,
        ]}
        onPress={onNextPress}
        disabled={nextIsDisabled}
      >
        <Text style={[styles.buttonText, styles.nextButtonText]}>
          {t('next')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

OnboardingButtons.propTypes = {
  onBackPress: PropTypes.func.isRequired,
  onNextPress: PropTypes.func.isRequired,
  nextIsDisabled: PropTypes.bool.isRequired,
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
