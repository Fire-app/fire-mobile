/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import completeOnboardingAction from '../../store/actions/completeOnboarding';
import { screenStyles } from '../../styles';
import PrimaryButton from '../../components/Buttons/PrimaryButton';
import OnboardingTitle from '../../components/OnboardingTitle';

const IMAGE = require('../../../assets/completedImage.png');

const CompleteScreen = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const exitOnboarding = () => dispatch(completeOnboardingAction());

  return (
    <View style={screenStyles.container}>
      <View style={screenStyles.contentContainer}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <OnboardingTitle title={t('completed_title')} alignCenter />
          <View style={{ padding: 20 }} />
          <Image
            style={styles.image}
            source={IMAGE}
            accessibilityLabel="Illustration of a man sitting"
          />
        </View>
      </View>
      <PrimaryButton
        title="Continue"
        onPress={exitOnboarding}
        disabled={false}
      />
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
  title: {
    textAlign: 'center',
    paddingBottom: 5,
  },
  image: {
    height: 200,
    width: 380,
    backgroundColor: 'white',
    padding: 30,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
