/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import completeOnboardingAction from '../../store/actions/completeOnboarding';
import { textStyles, colors, screenStyles } from '../../styles';
import OnboardingButtons from '../../components/OnboardingButtons';
import OnboardingTitle from '../../components/OnboardingTitle';

const IMAGE = require('../../../assets/completedImage.png');

const CompleteScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const exitOnboarding = () => dispatch(completeOnboardingAction());

  return (
    <View style={screenStyles.container}>
      <View
        style={[
          screenStyles.onboardingContentContainer,
          { justifyContent: 'center' },
        ]}
      >
        <OnboardingTitle
          alignCenter
          title={t('completed_title')}
          subtitle={t('completed_subtitle')}
        />
        <Image
          style={styles.image}
          source={IMAGE}
          accessibilityLabel="Illustration of a man sitting"
        />
      </View>
      <View style={screenStyles.onboardingButtonContainer}>
        <OnboardingButtons
          onRightPress={() => navigation.pop()}
          onLeftPress={exitOnboarding}
          rightTitle={t('back')}
          leftTitle={t('continue')}
          nextIsDisabled={false}
        />
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
  title: {
    color: colors.text,
    textAlign: 'center',
    paddingBottom: 5,
  },
  subtitle: {
    color: colors.subtext,
    textAlign: 'center',
  },
  image: {
    height: Dimensions.get('window').width - 80,
    width: Dimensions.get('window').width - 80,
    backgroundColor: 'white',
    padding: 30,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
});
