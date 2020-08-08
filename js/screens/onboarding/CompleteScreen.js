/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import completeOnboardingAction from '../../store/actions/completeOnboarding';
import OnboardingTitle from '../../components/OnboardingTitle';
import OnboardingTemplate from './Template';

const IMAGE = require('../../../assets/illustration2.png');

const CompleteScreen = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const exitOnboarding = () => dispatch(completeOnboardingAction());

  return (
    <OnboardingTemplate
      primaryButton={{
        title: t('continue'),
        onPress: exitOnboarding,
      }}
    >
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={{
          justifyContent: 'center',
          flexGrow: 1,
          alignItems: 'center',
        }}
      >
        <View style={{ paddingHorizontal: 30 }}>
          <OnboardingTitle title={t('completed_title')} alignCenter />
        </View>
        <Image
          style={styles.image}
          source={IMAGE}
          accessibilityLabel="Illustration"
        />
      </ScrollView>
    </OnboardingTemplate>
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
    height: 280,
    width: 400,
    backgroundColor: 'white',
    padding: 30,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
