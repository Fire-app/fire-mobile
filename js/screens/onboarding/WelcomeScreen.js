/* eslint-disable global-require */
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import routes from '../../navigation/routes';
import { textStyles, colors } from '../../styles';
import OnboardingTitle from '../../components/OnboardingTitle';
import OnboardingTemplate from './Template';

const IMAGE = require('../../../assets/welcomeImage.png');
const LOGO = require('../../../assets/chirlaLogo.png');

const onboardingRoutes = routes.onboarding;

const WelcomeInfo = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.welcomeInfoContainer}>
      <OnboardingTitle
        title={t('welcome_to_fire')}
        subtitle={t('welcome_message')}
        alignCenter
      />
      <View style={styles.logoNameContainer}>
        <Image
          style={styles.logo}
          source={LOGO}
          accessibilityLabel="CHIRLA Logo"
        />
        <Text style={[textStyles.body2, { paddingLeft: 10 }]}>
          {t('a_chirla_project')}
        </Text>
      </View>
    </View>
  );
};

const LegalInfo = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.legalInfoContainer}>
      <Text style={[textStyles.body2, styles.legalText]}>
        {t('must_be_over_13')}
      </Text>
      <Text style={[textStyles.body2, styles.legalText]}>
        {t('verify_over_13')}
      </Text>
    </View>
  );
};

const WelcomeScreen = ({ navigation }) => {
  const { t } = useTranslation();
  return (
    <OnboardingTemplate
      primaryButton={{
        title: t('continue'),
        onPress: () => navigation.navigate(onboardingRoutes.intro),
      }}
      secondaryButton={{
        title: t('not_over_13'),
        onPress: () => navigation.pop(),
      }}
    >
      <ScrollView
        alwaysBounceVertical={false}
        contentContainerStyle={{
          justifyContent: 'center',
          flexGrow: 1,
        }}
      >
        <Image
          style={styles.image}
          source={IMAGE}
          accessibilityLabel="Illustration of people"
        />
        <WelcomeInfo />
        <LegalInfo />
      </ScrollView>
    </OnboardingTemplate>
  );
};

WelcomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    pop: PropTypes.func.isRequired,
  }).isRequired,
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  image: {
    height: 250,
    width: 375,
    backgroundColor: 'white',
    alignSelf: 'center',
    resizeMode: 'cover',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  legalInfoContainer: {
    borderRadius: 3,
    backgroundColor: colors.border,
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  legalText: {
    textAlign: 'center',
    paddingBottom: 15,
    paddingHorizontal: 5,
  },
  welcomeInfoContainer: {
    alignItems: 'center',
  },
  logoNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    paddingBottom: 30,
  },
  logo: {
    height: 25,
    width: 25,
  },
});
