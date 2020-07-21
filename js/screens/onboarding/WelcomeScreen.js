/* eslint-disable global-require */
import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import routes from '../../navigation/routes';
import { textStyles, screenStyles, colors } from '../../styles';
import NavigationButtons from '../../components/Buttons/NavigationButtons';
import OnboardingTitle from '../../components/OnboardingTitle';

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
        <Text
          style={[
            textStyles.body2,
            { paddingLeft: 10, color: colors.charcoalGrey },
          ]}
        >
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
    <View style={screenStyles.container}>
      <View style={screenStyles.contentContainer}>
        <StatusBar barStyle="dark-content" />
        <View style={styles.innerContainer}>
          <Image
            style={styles.image}
            source={IMAGE}
            accessibilityLabel="Illustration of people"
          />
          <WelcomeInfo />
          <LegalInfo />
        </View>
      </View>
      <NavigationButtons
        // TODO: figure out what to display for not over 13
        onRightPress={() => navigation.pop()}
        onLeftPress={() => navigation.navigate(onboardingRoutes.intro)}
        rightTitle={t('not_over_13')}
        leftTitle={t('continue')}
        hasLongTitle
      />
    </View>
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
    color: colors.charcoalGrey,
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
  title: {
    paddingTop: 30,
    color: colors.charcoalGrey,
  },
  subtitle: {
    color: colors.textLight,
    textAlign: 'center',
    padding: 10,
  },
});
