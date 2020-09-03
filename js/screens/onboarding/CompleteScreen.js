import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import React from 'react';
import OnboardingTemplate from './Template';
import OnboardingTitle from '../../components/OnboardingTitle';
import completeOnboardingAction from '../../store/actions/completeOnboarding';

const IMAGE = require('../../../assets/illustration2.png');

const CompleteScreen = () => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const exitOnboarding = () => dispatch(completeOnboardingAction());

  return (
    <OnboardingTemplate
      primaryButton={{
        onPress: exitOnboarding,
        title: t('continue'),
      }}
    >
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={{
          alignItems: 'center',
          flexGrow: 1,
          justifyContent: 'center',
        }}
      >
        <View style={{ paddingHorizontal: 30 }}>
          <OnboardingTitle alignCenter title={t('completed_title')} />
        </View>
        <Image
          accessibilityLabel="Illustration"
          source={IMAGE}
          style={styles.image}
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
  image: {
    alignSelf: 'center',
    backgroundColor: 'white',
    height: 280,
    padding: 30,
    resizeMode: 'contain',
    width: 400,
  },
});
