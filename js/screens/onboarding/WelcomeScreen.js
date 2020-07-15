/* eslint-disable global-require */
import React from 'react';
import { View, StyleSheet, Text, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import routes from '../../navigation/routes';
import { textStyles, colors, screenStyles } from '../../styles';
import { PrimaryButton } from '../../components/Buttons';

const onBoardingRoutes = routes.onboarding;

const WelcomeScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <View style={screenStyles.container}>
      <StatusBar barStyle="dark-content" />
      <View
        style={[screenStyles.onboardingContentContainer, styles.welcomeMessage]}
      >
        <Text style={textStyles.h1}>{'Welcome to Fire!'}</Text>
      </View>
      <View style={{ alignSelf: 'stretch' }}>
        <PrimaryButton
          onPress={() => navigation.navigate(onBoardingRoutes.language)}
          title={t('continue')}
        />
      </View>
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
  welcomeMessage: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  continueButton: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3,
    backgroundColor: colors.primary,
  },
});
