/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import completeOnboardingAction from '../../store/actions/completeOnboarding';
import { textStyles, colors, onboardingStyles } from '../../styles';
import OnboardingButtons from '../../components/OnboardingButtons';

const IMAGE = require('../../../assets/completedImage.png');

const CompleteScreen = ({ navigation }) => {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const exitOnboarding = () => dispatch(completeOnboardingAction());

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={[textStyles.h1, styles.title]}>
          {t('completed_title')}
        </Text>
        <Text style={[textStyles.body1, styles.subtitle]}>
          {t('completed_subtitle')}
        </Text>
        <Image
          style={styles.image}
          source={IMAGE}
          accessibilityLabel="Illustration of a man sitting"
        />
      </View>
      <View style={onboardingStyles.buttonContainer}>
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
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
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
